// QClaw 运行时 Hook 脚本 v2 - 修复 __electronLog
// 用法: /tmp/node_modules/.bin/electron --no-sandbox /tmp/runtime_hook_v2.js

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const v8 = require("v8");
const Module = require("module");
const EventEmitter = require("events");

v8.setFlagsFromString("--no-lazy");
v8.setFlagsFromString("--no-flush-bytecode");

const FLAG_HASH_OFFSET = 12;
const SOURCE_HASH_OFFSET = 8;
let dummyBytecode;

function setFlagHashHeader(bytecodeBuffer) {
  if (!dummyBytecode) {
    const script = new vm.Script("", { produceCachedData: true });
    dummyBytecode = script.createCachedData();
  }
  dummyBytecode.slice(FLAG_HASH_OFFSET, FLAG_HASH_OFFSET + 4).copy(bytecodeBuffer, FLAG_HASH_OFFSET);
}
function getSourceHashHeader(bytecodeBuffer) {
  return bytecodeBuffer.slice(SOURCE_HASH_OFFSET, SOURCE_HASH_OFFSET + 4);
}
function buffer2Number(buffer) {
  let ret = 0;
  ret |= buffer[3] << 24;
  ret |= buffer[2] << 16;
  ret |= buffer[1] << 8;
  ret |= buffer[0];
  return ret;
}

// ============================================================
// 定义 __electronLog 全局变量 (electron-log 库)
// ============================================================
const logFn = function(...args) { /* silent */ };
logFn.log = logFn;
const logScope = function(name) { return logProxy; };
const logProxy = new Proxy(logFn, {
  get: function(target, prop) {
    if (prop === 'scope') return logScope;
    if (prop === 'transports') return new Proxy({}, { get: () => new Proxy({}, { get: () => logFn }) });
    if (prop === 'initialize') return logFn;
    if (prop === 'info' || prop === 'warn' || prop === 'error' || prop === 'debug' || prop === 'verbose' || prop === 'silly') return logFn;
    if (prop === 'log') return logFn;
    if (prop === 'functions') return {};
    if (prop === 'hooks') return [];
    if (prop === 'levels') return ['error', 'warn', 'info', 'verbose', 'debug', 'silly'];
    if (prop === 'variables') return {};
    if (prop === 'logId') return 'default';
    if (prop === 'errorHandler') return { startCatching: logFn, stopCatching: logFn };
    if (prop === 'eventLogger') return { startLogging: logFn, stopLogging: logFn };
    return logFn;
  },
  apply: function() { return undefined; },
});

global.__electronLog = logProxy;

// ============================================================
// 数据收集
// ============================================================
const collected = {
  ipcMainHandles: [],
  ipcMainOns: [],
  browserWindowCalls: [],
  menuTemplates: [],
  trayCalls: [],
  appEvents: [],
  safeStorageCalls: [],
  requireCalls: [],
  protocolHandles: [],
  errors: [],
};

// ============================================================
// Mock Electron 模块
// ============================================================
function createMockElectron() {
  const ipcMain = new EventEmitter();
  ipcMain.handle = function(channel, handler) {
    collected.ipcMainHandles.push({ channel, handlerSource: handler.toString(), handlerName: handler.name || '(anon)' });
    console.log(`  [IPC HANDLE] ${channel}`);
  };
  ipcMain.on = function(channel, handler) {
    collected.ipcMainOns.push({ channel, handlerSource: handler.toString(), handlerName: handler.name || '(anon)' });
    console.log(`  [IPC ON] ${channel}`);
  };
  ipcMain.removeHandler = function() {};
  ipcMain.removeAllListeners = function() { return ipcMain; };

  function BrowserWindow(options) {
    collected.browserWindowCalls.push(JSON.parse(JSON.stringify(options || {}, (k,v) => typeof v === 'function' ? '[Function]' : v)));
    console.log(`  [BrowserWindow] created with options: ${JSON.stringify(options?.width)}x${JSON.stringify(options?.height)}`);
    const self = this;
    this.id = Math.random();
    this.webContents = new EventEmitter();
    this.webContents.send = function(ch, ...a) { console.log(`    [webContents.send] ${ch}`); };
    this.webContents.session = { webRequest: { onBeforeSendHeaders: function() {}, onHeadersReceived: function() {} }, cookies: { get: () => Promise.resolve([]), set: () => Promise.resolve(), remove: () => Promise.resolve() }, clearCache: () => Promise.resolve() };
    this.webContents.openDevTools = function() {};
    this.webContents.setWindowOpenHandler = function() {};
    this.webContents.id = 1;
    this.loadURL = function(url) { console.log(`    [loadURL] ${url}`); return Promise.resolve(); };
    this.loadFile = function(f) { console.log(`    [loadFile] ${f}`); return Promise.resolve(); };
    this.on = function(ev, cb) { console.log(`    [BrowserWindow.on] ${ev}`); return self; };
    this.once = function(ev, cb) { return self; };
    this.show = function() {};
    this.hide = function() {};
    this.close = function() {};
    this.destroy = function() {};
    this.focus = function() {};
    this.blur = function() {};
    this.isDestroyed = function() { return false; };
    this.isVisible = function() { return true; };
    this.isMinimized = function() { return false; };
    this.isMaximized = function() { return false; };
    this.minimize = function() {};
    this.maximize = function() {};
    this.unmaximize = function() {};
    this.restore = function() {};
    this.setPosition = function() {};
    this.getPosition = function() { return [0, 0]; };
    this.setSize = function() {};
    this.getSize = function() { return [1200, 800]; };
    this.getBounds = function() { return { x: 0, y: 0, width: 1200, height: 800 }; };
    this.setBounds = function() {};
    this.setResizable = function() {};
    this.setMinimumSize = function() {};
    this.setMaximumSize = function() {};
    this.setMenu = function() {};
    this.setMenuBarVisibility = function() {};
    this.setAlwaysOnTop = function() {};
    this.center = function() {};
    this.setSkipTaskbar = function() {};
    this.setTitle = function() {};
    this.getTitle = function() { return 'QClaw'; };
    this.flashFrame = function() {};
    this.setProgressBar = function() {};
    this.setOverlayIcon = function() {};
    this.removeMenu = function() {};
    this.setBackgroundColor = function() {};
  }
  BrowserWindow.getAllWindows = function() { return []; };
  BrowserWindow.fromWebContents = function() { return null; };
  BrowserWindow.fromId = function() { return null; };
  BrowserWindow.getFocusedWindow = function() { return null; };

  const app = new EventEmitter();
  const origOn = app.on.bind(app);
  app.on = function(event, handler) {
    collected.appEvents.push({ event, handlerSource: handler.toString() });
    console.log(`  [APP ON] ${event}`);
    if (event === 'ready') {
      setTimeout(() => { try { handler(); } catch(e) { collected.errors.push(`app.ready: ${e.message}`); } }, 100);
    }
    if (event === 'second-instance') {
      // don't call
    }
    return app;
  };
  app.once = app.on;
  app.whenReady = function() { return Promise.resolve(); };
  app.getPath = function(name) {
    const p = `/tmp/qclaw_mock/${name}`;
    try { fs.mkdirSync(p, { recursive: true }); } catch(e) {}
    return p;
  };
  app.getAppPath = function() { return '/tmp/qclaw_extracted'; };
  app.getName = function() { return 'QClaw'; };
  app.getVersion = function() { return '0.1.9'; };
  app.getLocale = function() { return 'zh-CN'; };
  app.isReady = function() { return true; };
  app.requestSingleInstanceLock = function() { return true; };
  app.quit = function() { console.log('  [APP] quit called'); };
  app.exit = function() {};
  app.relaunch = function() {};
  app.setLoginItemSettings = function() {};
  app.isPackaged = true;
  app.commandLine = { appendSwitch: function() {}, getSwitchValue: function() { return ''; }, hasSwitch: function() { return false; } };
  app.dock = { setIcon: function() {}, setBadge: function() {}, show: function() {}, hide: function() {} };
  app.setAboutPanelOptions = function() {};
  app.setAsDefaultProtocolClient = function() { return true; };

  const Menu = {
    buildFromTemplate: function(template) {
      collected.menuTemplates.push(template);
      return { popup: function() {}, items: [] };
    },
    setApplicationMenu: function() {},
    getApplicationMenu: function() { return null; },
  };

  function Tray(iconPath) {
    collected.trayCalls.push({ iconPath: String(iconPath) });
    console.log(`  [Tray] created`);
    this.setToolTip = function() {};
    this.setContextMenu = function() {};
    this.on = function() { return this; };
    this.destroy = function() {};
    this.setImage = function() {};
    this.setTitle = function() {};
    this.isDestroyed = function() { return false; };
    this.getBounds = function() { return { x: 0, y: 0, width: 22, height: 22 }; };
    this.popUpContextMenu = function() {};
  }

  const dialog = {
    showOpenDialog: (opts) => Promise.resolve({ canceled: true, filePaths: [] }),
    showSaveDialog: (opts) => Promise.resolve({ canceled: true }),
    showMessageBox: (opts) => Promise.resolve({ response: 0 }),
    showMessageBoxSync: () => 0,
    showErrorBox: () => {},
  };

  const safeStorage = {
    isEncryptionAvailable: () => true,
    encryptString: (s) => { collected.safeStorageCalls.push({ method: 'encrypt', arg: s }); return Buffer.from(s); },
    decryptString: (b) => { collected.safeStorageCalls.push({ method: 'decrypt' }); return b.toString ? b.toString() : ''; },
  };

  const session = {
    defaultSession: {
      webRequest: { onBeforeSendHeaders: () => {}, onHeadersReceived: () => {} },
      cookies: { get: () => Promise.resolve([]), set: () => Promise.resolve(), remove: () => Promise.resolve(), flushStore: () => Promise.resolve() },
      clearCache: () => Promise.resolve(),
      clearStorageData: () => Promise.resolve(),
      setPermissionRequestHandler: () => {},
      setUserAgent: () => {},
      getUserAgent: () => 'QClaw Mock',
      protocol: { handle: () => {}, registerFileProtocol: () => {} },
    },
    fromPartition: () => session.defaultSession,
  };

  const shell = {
    openExternal: (url) => { console.log(`  [SHELL] openExternal: ${url}`); return Promise.resolve(); },
    openPath: (p) => Promise.resolve(''),
    showItemInFolder: () => {},
    trashItem: () => Promise.resolve(),
  };

  const nativeImage = {
    createFromPath: (p) => ({
      isEmpty: () => true, getSize: () => ({ width: 0, height: 0 }), resize: () => nativeImage.createFromPath(''),
      toPNG: () => Buffer.alloc(0), toJPEG: () => Buffer.alloc(0), toDataURL: () => '',
    }),
    createFromBuffer: () => nativeImage.createFromPath(''),
    createEmpty: () => nativeImage.createFromPath(''),
  };

  const screen = {
    getPrimaryDisplay: () => ({ workAreaSize: { width: 1920, height: 1080 }, bounds: { x: 0, y: 0, width: 1920, height: 1080 }, scaleFactor: 2 }),
    getAllDisplays: () => [screen.getPrimaryDisplay()],
    getDisplayMatching: () => screen.getPrimaryDisplay(),
    getCursorScreenPoint: () => ({ x: 0, y: 0 }),
  };

  const clipboard = { readText: () => '', writeText: () => {}, readImage: () => nativeImage.createFromPath(''), writeImage: () => {} };
  const powerMonitor = new EventEmitter();
  powerMonitor.on = function(ev, cb) { console.log(`  [PowerMonitor.on] ${ev}`); return this; };
  const globalShortcut = { register: () => true, unregister: () => {}, unregisterAll: () => {}, isRegistered: () => false };
  const autoUpdater = new EventEmitter();
  autoUpdater.setFeedURL = () => {};
  autoUpdater.checkForUpdates = () => {};
  autoUpdater.quitAndInstall = () => {};

  const protocol = {
    registerSchemesAsPrivileged: () => {},
    handle: (scheme, handler) => {
      collected.protocolHandles.push({ scheme, handlerSource: handler.toString() });
      console.log(`  [PROTOCOL] handle: ${scheme}`);
    },
    registerFileProtocol: () => true,
    registerStringProtocol: () => true,
    registerBufferProtocol: () => true,
    registerHttpProtocol: () => true,
    interceptFileProtocol: () => {},
    unhandle: () => {},
    isProtocolHandled: () => Promise.resolve(true),
    registerSchemesAsPrivileged: () => {},
  };

  const systemPreferences = {
    getMediaAccessStatus: () => 'granted',
    askForMediaAccess: () => Promise.resolve(true),
    getUserDefault: () => null,
    setUserDefault: () => {},
    getAccentColor: () => '0099ff',
    getColor: () => '#000000',
    getAnimationSettings: () => ({ shouldRenderRichAnimation: true, scrollAnimationsEnabledBySystem: true, prefersReducedMotion: false }),
  };

  const desktopCapturer = { getSources: () => Promise.resolve([]) };
  const crashReporter = { start: () => {}, getLastCrashReport: () => null };
  const net = {
    request: (opts) => { const r = new EventEmitter(); r.end = () => {}; r.write = () => {}; r.setHeader = () => {}; return r; },
    fetch: (url, opts) => { console.log(`  [NET.FETCH] ${url}`); return Promise.resolve(new Response('{}', { status: 200 })); },
  };
  const pushNotifications = { on: () => {}, registerForAPNSNotifications: () => {} };
  const nativeTheme = new EventEmitter();
  nativeTheme.shouldUseDarkColors = false;
  nativeTheme.themeSource = 'system';
  nativeTheme.shouldUseHighContrastColors = false;
  nativeTheme.shouldUseInvertedColorScheme = false;

  const powerSaveBlocker = {
    start: () => 1,
    stop: () => {},
    isStarted: () => false,
  };

  const contentTracing = {
    startRecording: () => Promise.resolve(),
    stopRecording: () => Promise.resolve(''),
    getTraceBufferUsage: () => Promise.resolve({ value: 0, percentage: 0 }),
  };

  const contextBridge = {
    exposeInMainWorld: (apiKey, api) => {
      console.log(`  [contextBridge] exposeInMainWorld("${apiKey}")`);
    },
  };

  const ipcRenderer = {
    invoke: (ch, ...a) => { console.log(`  [ipcRenderer.invoke] ${ch}`); return Promise.resolve(null); },
    send: (ch, ...a) => { console.log(`  [ipcRenderer.send] ${ch}`); },
    sendSync: (ch, ...a) => { console.log(`  [ipcRenderer.sendSync] ${ch}`); return null; },
    on: (ch, cb) => { console.log(`  [ipcRenderer.on] ${ch}`); return ipcRenderer; },
    once: (ch, cb) => ipcRenderer,
    removeAllListeners: () => ipcRenderer,
    removeListener: () => ipcRenderer,
  };

  return {
    app, BrowserWindow, Menu, Tray, dialog, safeStorage,
    session, shell, nativeImage, screen, net, ipcMain,
    clipboard, powerMonitor, globalShortcut, autoUpdater,
    protocol, systemPreferences, desktopCapturer, crashReporter,
    contextBridge, ipcRenderer, nativeTheme, powerSaveBlocker,
    contentTracing, pushNotifications,
    utilityProcess: { fork: () => { const p = new EventEmitter(); p.pid = 999; p.kill = () => {}; return p; } },
    MessageChannelMain: function() { this.port1 = new EventEmitter(); this.port2 = new EventEmitter(); },
    ShareMenu: function() {},
    TouchBar: function() {},
    webContents: { getAllWebContents: () => [], fromId: () => null },
    webFrameMain: { fromId: () => null },
  };
}

// ============================================================
// 字节码加载
// ============================================================
function loadBytecode(filename) {
  const bytecodeBuffer = fs.readFileSync(filename);
  setFlagHashHeader(bytecodeBuffer);
  const length = buffer2Number(getSourceHashHeader(bytecodeBuffer));
  let dummyCode = "";
  if (length > 1) dummyCode = '"' + "\u200b".repeat(length - 2) + '"';
  const script = new vm.Script(dummyCode, { filename, lineOffset: 0, displayErrors: true, cachedData: bytecodeBuffer });
  if (script.cachedDataRejected) throw new Error("cachedDataRejected");
  return script.runInThisContext({ filename, lineOffset: 0, columnOffset: 0, displayErrors: true });
}

// ============================================================
// 临时目录
// ============================================================
for (const d of ['userData', 'appData', 'temp', 'logs', 'home', 'desktop', 'documents', 'exe', 'cache', 'crashDumps']) {
  try { fs.mkdirSync(`/tmp/qclaw_mock/${d}`, { recursive: true }); } catch(e) {}
}

// ============================================================
// Hook require
// ============================================================
const mockElectron = createMockElectron();
const originalRequire = Module.prototype.require;
Module.prototype.require = function hookedRequire(id) {
  collected.requireCalls.push(id);
  if (id === 'electron') return mockElectron;
  try { return originalRequire.call(this, id); } catch(e) {
    // 返回深层 Proxy mock
    return new Proxy(function(){}, {
      get: (t, p) => {
        if (p === 'then') return undefined;
        if (p === 'default') return new Proxy(function(){}, { get: () => function() { return new Proxy(function(){}, { get: () => function(){} }); }, apply: () => ({}) });
        return new Proxy(function(){}, { get: () => function() { return {}; }, apply: () => ({}) });
      },
      apply: () => ({}),
      construct: () => ({}),
    });
  }
};

// 注册 .cjsc 扩展
Module._extensions[".cjsc"] = function(module, filename) {
  const compiledWrapper = loadBytecode(filename);
  const dirname = path.dirname(filename);
  const req = (id) => module.require(id);
  req.resolve = (r, o) => Module._resolveFilename(r, module, false, o);
  req.main = process.mainModule;
  req.extensions = Module._extensions;
  req.cache = Module._cache;
  return compiledWrapper.apply(module.exports, [module.exports, req, module, filename, dirname, process, global]);
};

// ============================================================
// 主逻辑
// ============================================================
async function main() {
  console.log("========== 加载 Main 脚本 ==========\n");

  try {
    const mainWrapper = loadBytecode("/tmp/qclaw_extracted/out/main/index.cjsc");
    const mainModule = { exports: {}, id: 'main', filename: '/tmp/qclaw_extracted/out/main/index.cjsc', loaded: false };
    const mainRequire = function(id) {
      if (id === 'electron') return mockElectron;
      try { return require(id); } catch(e) { return {}; }
    };
    mainRequire.resolve = (r) => r;
    mainRequire.extensions = Module._extensions;
    mainRequire.cache = Module._cache;

    mainWrapper.apply(mainModule.exports, [
      mainModule.exports, mainRequire, mainModule,
      '/tmp/qclaw_extracted/out/main/index.cjsc', '/tmp/qclaw_extracted/out/main',
      process, global
    ]);
    console.log("\n✅ Main 加载成功!");
  } catch(e) {
    console.log(`\n⚠️ Main 加载错误: ${e.message}`);
    collected.errors.push(`main: ${e.message}\n${e.stack}`);
  }

  // 等待异步 (app.ready 等)
  console.log("\n等待 5 秒捕获异步注册...");
  await new Promise(resolve => setTimeout(resolve, 5000));

  // ============================================================
  // 输出结果
  // ============================================================
  console.log("\n" + "=".repeat(60));
  console.log("                   信息汇总");
  console.log("=".repeat(60));

  console.log(`\n📡 IPC Handles (${collected.ipcMainHandles.length}):`);
  for (const h of collected.ipcMainHandles) console.log(`  ${h.channel}`);

  console.log(`\n📨 IPC Ons (${collected.ipcMainOns.length}):`);
  for (const h of collected.ipcMainOns) console.log(`  ${h.channel}`);

  console.log(`\n🖥  App Events (${collected.appEvents.length}):`);
  for (const e of collected.appEvents) console.log(`  ${e.event}`);

  console.log(`\n🔗 Protocol Handles (${collected.protocolHandles.length}):`);
  for (const p of collected.protocolHandles) console.log(`  ${p.scheme}`);

  console.log(`\n🪟 BrowserWindow: ${collected.browserWindowCalls.length}`);
  console.log(`📋 Menu templates: ${collected.menuTemplates.length}`);
  console.log(`🔔 Tray: ${collected.trayCalls.length}`);
  console.log(`❌ Errors: ${collected.errors.length}`);
  for (const e of collected.errors) console.log(`  ${e.substring(0, 300)}`);

  // 保存
  fs.writeFileSync('/tmp/qclaw_hook_v2_result.json', JSON.stringify(collected, null, 2));
  console.log(`\n✅ 结果 → /tmp/qclaw_hook_v2_result.json`);

  // IPC handlers
  const out = [];
  out.push("// QClaw IPC Handlers (runtime intercepted)\n");
  for (const h of collected.ipcMainHandles) {
    out.push(`// ===== ipcMain.handle("${h.channel}") [${h.handlerName}] =====`);
    out.push(h.handlerSource);
    out.push("");
  }
  for (const h of collected.ipcMainOns) {
    out.push(`// ===== ipcMain.on("${h.channel}") [${h.handlerName}] =====`);
    out.push(h.handlerSource);
    out.push("");
  }
  fs.writeFileSync('/tmp/qclaw_ipc_handlers_v2.js', out.join('\n'));
  console.log(`✅ IPC Handlers → /tmp/qclaw_ipc_handlers_v2.js`);

  // App events
  const appOut = [];
  for (const e of collected.appEvents) {
    appOut.push(`// ===== app.on("${e.event}") =====`);
    appOut.push(e.handlerSource);
    appOut.push("");
  }
  if (appOut.length) {
    fs.writeFileSync('/tmp/qclaw_app_events_v2.js', appOut.join('\n'));
    console.log(`✅ App Events → /tmp/qclaw_app_events_v2.js`);
  }

  // BrowserWindow configs
  if (collected.browserWindowCalls.length) {
    fs.writeFileSync('/tmp/qclaw_browserwindow_configs.json', JSON.stringify(collected.browserWindowCalls, null, 2));
    console.log(`✅ BrowserWindow → /tmp/qclaw_browserwindow_configs.json`);
  }

  console.log("\n========== 完成 ==========");
  process.exit(0);
}

main().catch(err => {
  console.error("Fatal:", err);
  fs.writeFileSync('/tmp/qclaw_hook_v2_result.json', JSON.stringify(collected, null, 2));
  process.exit(1);
});
