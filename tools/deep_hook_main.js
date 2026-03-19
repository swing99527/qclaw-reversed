/**
 * QClaw 主进程深度运行时 Hook v3
 * 目标：提取所有模块导出、类定义、函数签名、事件注册等
 */
const { app } = require('electron');
const vm = require('vm');
const fs = require('fs');
const path = require('path');
const Module = require('module');
const v8 = require('v8');

// ===== 数据收集 =====
const collected = {
  moduleExports: {},
  classes: [],
  functions: [],
  httpRequests: [],
  fsOperations: [],
  timers: [],
  eventEmitters: {},
  ipcHandlers: [],
  ipcOnListeners: [],
  appEvents: [],
  browserWindowConfigs: [],
  trayConfigs: [],
  menuConfigs: [],
  dialogCalls: [],
  shellCalls: [],
  clipboardCalls: [],
  protocolHandlers: [],
  sessionHandlers: [],
  nativeModules: [],
  envAccess: [],
  cryptoCalls: [],
  childProcessCalls: [],
  netRequests: [],
  safeStorageCalls: [],
  contextBridgeAPIs: {},
  globalShortcuts: [],
  autoUpdaterEvents: [],
  notificationConfigs: [],
  webContentsEvents: [],
  requireCalls: [],
};

// ===== Helper =====
function safeToString(fn) {
  try {
    const s = fn.toString();
    // 检查是否为零宽字符（bytenode 占位符）
    if (/^[\u200b\s]+$/.test(s)) return '[bytenode-compiled]';
    return s.substring(0, 2000);
  } catch { return '[toString-failed]'; }
}

function safeInspect(obj, depth = 2) {
  try {
    const seen = new WeakSet();
    function serialize(val, d) {
      if (d <= 0) return '...';
      if (val === null) return null;
      if (val === undefined) return undefined;
      if (typeof val === 'function') return `[Function: ${val.name || 'anonymous'}]`;
      if (typeof val !== 'object') return val;
      if (seen.has(val)) return '[Circular]';
      seen.add(val);
      if (Array.isArray(val)) return val.slice(0, 10).map(v => serialize(v, d - 1));
      const result = {};
      const keys = Object.keys(val).slice(0, 50);
      for (const k of keys) {
        try { result[k] = serialize(val[k], d - 1); } catch { result[k] = '[Error]'; }
      }
      return result;
    }
    return serialize(obj, depth);
  } catch { return '[inspect-failed]'; }
}

// ===== Mock Electron =====
const EventEmitter = require('events');

class MockStore extends EventEmitter {
  constructor() { super(); this._data = {}; }
  get(k) { return this._data[k]; }
  set(k, v) { this._data[k] = v; }
  delete(k) { delete this._data[k]; }
  has(k) { return k in this._data; }
  clear() { this._data = {}; }
}

class MockBrowserWindow extends EventEmitter {
  constructor(opts) {
    super();
    collected.browserWindowConfigs.push(safeInspect(opts, 3));
    this.id = MockBrowserWindow._id++;
    this.webContents = new MockWebContents(this);
    this._opts = opts || {};
  }
  static _id = 1;
  static getAllWindows() { return []; }
  static getFocusedWindow() { return null; }
  static fromWebContents() { return null; }
  loadURL(url) { return Promise.resolve(); }
  loadFile(f) { return Promise.resolve(); }
  show() {}
  hide() {}
  close() {}
  destroy() {}
  focus() {}
  blur() {}
  minimize() {}
  maximize() {}
  restore() {}
  isMinimized() { return false; }
  isMaximized() { return false; }
  isVisible() { return true; }
  isDestroyed() { return false; }
  isFocused() { return true; }
  setSize(w, h) {}
  getSize() { return [800, 600]; }
  setPosition(x, y) {}
  getPosition() { return [0, 0]; }
  setBounds(b) {}
  getBounds() { return { x: 0, y: 0, width: 800, height: 600 }; }
  setTitle(t) {}
  getTitle() { return 'QClaw'; }
  setAlwaysOnTop(f) {}
  setSkipTaskbar(f) {}
  setProgressBar(p) {}
  setOverlayIcon(o, d) {}
  setThumbarButtons(b) {}
  setMenu(m) {}
  setAutoHideMenuBar(f) {}
  setMenuBarVisibility(f) {}
  moveTop() {}
  center() {}
  setResizable(f) {}
  isResizable() { return true; }
  setMovable(f) {}
  setMinimumSize(w, h) {}
  setMaximumSize(w, h) {}
  setFullScreen(f) {}
  isFullScreen() { return false; }
  setSimpleFullScreen(f) {}
  setOpacity(o) {}
  getNativeWindowHandle() { return Buffer.alloc(8); }
  hookWindowMessage() {}
  isWindowMessageHooked() { return false; }
  unhookWindowMessage() {}
  setTouchBar() {}
  setBackgroundColor(c) {}
  setVibrancy(v) {}
  getMediaSourceId() { return 'mockId'; }
}

class MockWebContents extends EventEmitter {
  constructor(win) { super(); this._win = win; this.id = win?.id || 1; }
  send(channel, ...args) { collected.webContentsEvents.push({ type: 'send', channel, argTypes: args.map(a => typeof a) }); }
  executeJavaScript(code) { return Promise.resolve(); }
  loadURL(url) { return Promise.resolve(); }
  getURL() { return 'https://qclaw.qq.com'; }
  getTitle() { return 'QClaw'; }
  openDevTools() {}
  closeDevTools() {}
  isDevToolsOpened() { return false; }
  setWindowOpenHandler(h) {}
  session = {
    setPreloads: (p) => {},
    getPreloads: () => [],
    webRequest: { onBeforeSendHeaders: () => {}, onHeadersReceived: () => {} },
    cookies: { get: () => Promise.resolve([]), set: () => Promise.resolve(), remove: () => Promise.resolve() },
    setPermissionRequestHandler: () => {},
    setProxy: () => Promise.resolve(),
    protocol: { handle: () => {}, registerFileProtocol: () => {} },
  };
}

class MockTray extends EventEmitter {
  constructor(icon) { super(); collected.trayConfigs.push({ icon }); }
  setImage(img) {}
  setTitle(t) {}
  setToolTip(t) {}
  setContextMenu(m) {}
  destroy() {}
  isDestroyed() { return false; }
  popUpContextMenu() {}
}

class MockNotification extends EventEmitter {
  constructor(opts) { super(); collected.notificationConfigs.push(safeInspect(opts)); }
  static isSupported() { return true; }
  show() {}
  close() {}
}

class MockMenu {
  static buildFromTemplate(t) { collected.menuConfigs.push(safeInspect(t, 2)); return new MockMenu(); }
  static setApplicationMenu(m) {}
  static getApplicationMenu() { return null; }
  popup() {}
  closePopup() {}
  items = [];
}

class MockMenuItem {
  constructor(opts) { this.opts = opts; }
}

// Mock ipcMain
const mockIpcMain = new EventEmitter();
mockIpcMain.handle = (channel, handler) => {
  collected.ipcHandlers.push({
    channel,
    handlerSource: safeToString(handler),
    handlerName: handler.name || 'anonymous',
  });
};
mockIpcMain.removeHandler = () => {};
const originalOn = mockIpcMain.on.bind(mockIpcMain);
mockIpcMain.on = (channel, handler) => {
  if (channel !== 'newListener' && channel !== 'removeListener') {
    collected.ipcOnListeners.push({
      channel,
      handlerSource: safeToString(handler),
    });
  }
  return originalOn(channel, handler);
};

// Mock ipcRenderer
const mockIpcRenderer = new EventEmitter();
mockIpcRenderer.invoke = (ch, ...args) => Promise.resolve();
mockIpcRenderer.send = (ch, ...args) => {};
mockIpcRenderer.sendSync = (ch, ...args) => null;

// Mock app
const mockApp = new EventEmitter();
Object.assign(mockApp, {
  name: 'QClaw',
  getVersion: () => '0.1.9',
  getPath: (name) => `/mock/path/${name}`,
  getAppPath: () => '/mock/app/path',
  getLocale: () => 'zh-CN',
  getLocaleCountryCode: () => 'CN',
  isReady: () => true,
  whenReady: () => Promise.resolve(),
  quit: () => {},
  exit: () => {},
  relaunch: () => {},
  focus: () => {},
  hide: () => {},
  show: () => {},
  setName: () => {},
  setAppUserModelId: () => {},
  requestSingleInstanceLock: () => true,
  hasSingleInstanceLock: () => true,
  releaseSingleInstanceLock: () => {},
  setLoginItemSettings: () => {},
  getLoginItemSettings: () => ({}),
  isDefaultProtocolClient: () => false,
  setAsDefaultProtocolClient: () => true,
  removeAsDefaultProtocolClient: () => false,
  commandLine: { appendSwitch: () => {}, hasSwitch: () => false, getSwitchValue: () => '' },
  dock: { bounce: () => 0, cancelBounce: () => {}, setBadge: () => {}, getBadge: () => '', hide: () => {}, show: () => Promise.resolve(), isVisible: () => true, setMenu: () => {}, setIcon: () => {} },
  isPackaged: true,
  allowRendererProcessReuse: true,
});
const origAppOn = mockApp.on.bind(mockApp);
mockApp.on = (event, handler) => {
  collected.appEvents.push({ event, handlerSource: safeToString(handler) });
  return origAppOn(event, handler);
};
mockApp.once = (event, handler) => {
  collected.appEvents.push({ event, type: 'once', handlerSource: safeToString(handler) });
  return mockApp;
};

// Mock other electron modules
const mockDialog = {
  showOpenDialog: (...args) => { collected.dialogCalls.push({ type: 'showOpenDialog', args: safeInspect(args) }); return Promise.resolve({ canceled: true, filePaths: [] }); },
  showSaveDialog: (...args) => { collected.dialogCalls.push({ type: 'showSaveDialog', args: safeInspect(args) }); return Promise.resolve({ canceled: true }); },
  showMessageBox: (...args) => { collected.dialogCalls.push({ type: 'showMessageBox', args: safeInspect(args) }); return Promise.resolve({ response: 0 }); },
  showErrorBox: () => {},
};

const mockShell = {
  openExternal: (url) => { collected.shellCalls.push({ type: 'openExternal', url }); return Promise.resolve(); },
  openPath: (p) => { collected.shellCalls.push({ type: 'openPath', path: p }); return Promise.resolve(''); },
  showItemInFolder: (p) => { collected.shellCalls.push({ type: 'showItemInFolder', path: p }); },
  beep: () => {},
  trashItem: (p) => Promise.resolve(),
};

const mockClipboard = {
  readText: () => { collected.clipboardCalls.push('readText'); return ''; },
  writeText: (t) => { collected.clipboardCalls.push({ type: 'writeText', text: t }); },
  readImage: () => null,
  writeImage: () => {},
  readHTML: () => '',
  writeHTML: () => {},
  clear: () => {},
};

const mockNativeImage = {
  createFromPath: (p) => ({ isEmpty: () => false, toDataURL: () => '', getSize: () => ({ width: 0, height: 0 }), resize: () => mockNativeImage.createFromPath(''), toPNG: () => Buffer.alloc(0), toJPEG: () => Buffer.alloc(0), getBitmap: () => Buffer.alloc(0), getNativeHandle: () => Buffer.alloc(0) }),
  createFromDataURL: () => mockNativeImage.createFromPath(''),
  createFromBuffer: () => mockNativeImage.createFromPath(''),
  createEmpty: () => mockNativeImage.createFromPath(''),
};

const mockSafeStorage = {
  isEncryptionAvailable: () => true,
  encryptString: (s) => { collected.safeStorageCalls.push({ type: 'encrypt', len: s?.length }); return Buffer.from('encrypted'); },
  decryptString: (b) => { collected.safeStorageCalls.push({ type: 'decrypt', len: b?.length }); return ''; },
};

const mockScreen = new EventEmitter();
Object.assign(mockScreen, {
  getCursorScreenPoint: () => ({ x: 0, y: 0 }),
  getPrimaryDisplay: () => ({ id: 1, bounds: { x: 0, y: 0, width: 1920, height: 1080 }, workArea: { x: 0, y: 0, width: 1920, height: 1040 }, scaleFactor: 1, rotation: 0, size: { width: 1920, height: 1080 } }),
  getAllDisplays: () => [mockScreen.getPrimaryDisplay()],
  getDisplayNearestPoint: () => mockScreen.getPrimaryDisplay(),
  getDisplayMatching: () => mockScreen.getPrimaryDisplay(),
});

const mockSession = {
  defaultSession: {
    webRequest: { onBeforeSendHeaders: () => {}, onHeadersReceived: () => {} },
    cookies: { get: () => Promise.resolve([]), set: () => Promise.resolve(), remove: () => Promise.resolve() },
    setPreloads: () => {},
    getPreloads: () => [],
    setPermissionRequestHandler: () => {},
    setProxy: () => Promise.resolve(),
    protocol: { handle: (scheme, handler) => { collected.protocolHandlers.push({ scheme, handlerSource: safeToString(handler) }); }, registerFileProtocol: () => {} },
  },
  fromPartition: () => mockSession.defaultSession,
};

const mockProtocol = {
  registerSchemesAsPrivileged: (schemes) => { collected.protocolHandlers.push({ type: 'registerSchemes', schemes: safeInspect(schemes) }); },
  handle: (scheme, handler) => { collected.protocolHandlers.push({ scheme, handlerSource: safeToString(handler) }); },
  registerFileProtocol: () => {},
  registerStringProtocol: () => {},
  registerHttpProtocol: () => {},
};

const mockGlobalShortcut = {
  register: (accel, cb) => { collected.globalShortcuts.push({ accelerator: accel }); return true; },
  unregister: () => {},
  unregisterAll: () => {},
  isRegistered: () => false,
};

const mockPowerMonitor = new EventEmitter();
Object.assign(mockPowerMonitor, {
  getSystemIdleState: () => 'active',
  getSystemIdleTime: () => 0,
  isOnBatteryPower: () => false,
});

const mockAutoUpdater = new EventEmitter();
Object.assign(mockAutoUpdater, {
  setFeedURL: () => {},
  getFeedURL: () => '',
  checkForUpdates: () => {},
  quitAndInstall: () => {},
});

const mockNet = {
  request: (opts) => { collected.netRequests.push(safeInspect(opts)); return new EventEmitter(); },
  fetch: (url, opts) => { collected.netRequests.push({ url, opts: safeInspect(opts) }); return Promise.resolve(new Response()); },
  isOnline: () => true,
};

const mockContentTracing = {
  getCategories: () => Promise.resolve([]),
  startRecording: () => Promise.resolve(),
  stopRecording: () => Promise.resolve(''),
};

const mockSystemPreferences = new EventEmitter();
Object.assign(mockSystemPreferences, {
  isDarkMode: () => false,
  isSwipeTrackingFromScrollEventsEnabled: () => false,
  getColor: () => '#000000',
  getAccentColor: () => '0078d7',
  getSystemColor: () => '#000000',
  getEffectiveAppearance: () => 'NSAppearanceNameAqua',
  canPromptTouchID: () => false,
  isTrustedAccessibilityClient: () => false,
  getMediaAccessStatus: () => 'not-determined',
  askForMediaAccess: () => Promise.resolve(true),
  getUserDefault: () => null,
});

const mockContextBridge = {
  exposeInMainWorld: (apiKey, api) => {
    collected.contextBridgeAPIs[apiKey] = {};
    function extractAPI(obj, prefix = '') {
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'function') {
          collected.contextBridgeAPIs[apiKey][fullKey] = {
            type: 'function',
            name: value.name || key,
            source: safeToString(value),
          };
        } else if (typeof value === 'object' && value !== null) {
          collected.contextBridgeAPIs[apiKey][fullKey] = { type: 'namespace' };
          extractAPI(value, fullKey);
        } else {
          collected.contextBridgeAPIs[apiKey][fullKey] = { type: typeof value, value };
        }
      }
    }
    extractAPI(api);
  },
};

// Full electron mock
const mockElectron = {
  app: mockApp,
  BrowserWindow: MockBrowserWindow,
  ipcMain: mockIpcMain,
  ipcRenderer: mockIpcRenderer,
  dialog: mockDialog,
  shell: mockShell,
  clipboard: mockClipboard,
  nativeImage: mockNativeImage,
  safeStorage: mockSafeStorage,
  screen: mockScreen,
  session: mockSession,
  protocol: mockProtocol,
  globalShortcut: mockGlobalShortcut,
  Menu: MockMenu,
  MenuItem: MockMenuItem,
  Tray: MockTray,
  Notification: MockNotification,
  powerMonitor: mockPowerMonitor,
  autoUpdater: mockAutoUpdater,
  net: mockNet,
  contentTracing: mockContentTracing,
  systemPreferences: mockSystemPreferences,
  contextBridge: mockContextBridge,
  utilityProcess: { fork: () => new EventEmitter() },
  crashReporter: { start: () => {}, getLastCrashReport: () => null, getUploadedReports: () => [], getUploadToServer: () => false, setUploadToServer: () => {} },
  desktopCapturer: { getSources: () => Promise.resolve([]) },
  nativeTheme: Object.assign(new EventEmitter(), { shouldUseDarkColors: false, themeSource: 'system', shouldUseHighContrastColors: false, shouldUseInvertedColorScheme: false }),
  MessageChannelMain: class { port1 = new EventEmitter(); port2 = new EventEmitter(); },
  webUtils: { getPathForFile: () => '' },
};

// ===== Hook require =====
const originalRequire = Module.prototype.require;
Module.prototype.require = function(id) {
  collected.requireCalls.push(id);
  
  if (id === 'electron' || id.startsWith('electron/')) {
    return mockElectron;
  }
  
  // Mock electron-log
  if (id === 'electron-log' || id === 'electron-log/main') {
    const mockLog = Object.assign((...args) => {}, {
      info: () => {}, warn: () => {}, error: () => {}, debug: () => {}, verbose: () => {},
      silly: () => {}, log: () => {},
      transports: { file: { level: 'info', resolvePathFn: null, getFile: () => ({ path: '/mock/log' }) }, console: { level: 'info' }, ipc: { level: false } },
      initialize: () => {},
      scope: () => mockLog,
      create: () => mockLog,
      errorHandler: { startCatching: () => {}, stopCatching: () => {} },
      eventLogger: { startLogging: () => {}, stopLogging: () => {} },
    });
    return mockLog;
  }
  
  if (id === 'electron-updater') {
    const updater = Object.assign(new EventEmitter(), {
      autoDownload: false,
      autoInstallOnAppQuit: true,
      checkForUpdates: () => Promise.resolve(null),
      checkForUpdatesAndNotify: () => Promise.resolve(null),
      downloadUpdate: () => Promise.resolve([]),
      quitAndInstall: () => {},
      setFeedURL: () => {},
      getFeedURL: () => '',
      channel: 'latest',
      currentVersion: { version: '0.1.9' },
    });
    return { autoUpdater: updater, AppUpdater: class extends EventEmitter {}, NsisUpdater: class extends EventEmitter {} };
  }
  
  if (id === 'node-machine-id') {
    return { machineId: () => Promise.resolve('mock-machine-id'), machineIdSync: () => 'mock-machine-id' };
  }
  
  if (id === '@electron/remote' || id === '@electron/remote/main') {
    return { initialize: () => {}, enable: () => {} };
  }
  
  if (id === '@tencent/smh-js-sdk') {
    return {};
  }
  
  // Try original require for Node.js core modules
  try {
    return originalRequire.apply(this, arguments);
  } catch (e) {
    console.log(`  [require FAIL] ${id}: ${e.message}`);
    return {};
  }
};

// ===== Setup V8 flags and bytecode loader =====
v8.setFlagsFromString('--no-lazy');
v8.setFlagsFromString('--no-flush-bytecode');

// ===== Mock __electronLog =====
global.__electronLog = Object.assign((...args) => {}, {
  info: () => {}, warn: () => {}, error: () => {}, debug: () => {}, verbose: () => {},
  silly: () => {}, log: () => {},
  transports: { file: { level: 'info' }, console: { level: 'info' }, ipc: { level: false } },
  scope: function() { return global.__electronLog; },
  create: function() { return global.__electronLog; },
  errorHandler: { startCatching: () => {}, stopCatching: () => {} },
});

// ===== Load and execute bytecode =====
console.log('\n========== QClaw 深度逆向 Hook v3 ==========\n');

const MAIN_CJSC = '/tmp/qclaw_extracted/out/main/index.cjsc';
const PRELOAD_CJSC = '/tmp/qclaw_extracted/out/preload/index.cjsc';

function loadCjsc(filePath) {
  const buf = fs.readFileSync(filePath);
  const sourceLen = buf.readUInt32LE(8);
  const cachedData = buf.subarray(12);
  
  // Build dummyCode
  let dummyCode = '';
  const len = sourceLen;
  if (len > 2) {
    dummyCode = '"' + '\u200b'.repeat(len - 2) + '"';
  }
  
  // Fix flag hash (from bytecode-loader.cjs logic)
  const flagHashOffset = 12;
  cachedData.writeUInt32LE(0, flagHashOffset);
  
  const script = new vm.Script(dummyCode, { cachedData, filename: filePath });
  if (script.cachedDataRejected) {
    throw new Error('V8 cachedData 被拒绝');
  }
  
  return script.runInThisContext();
}

// Load main
try {
  console.log('加载 main/index.cjsc...');
  const mainFn = loadCjsc(MAIN_CJSC);
  
  if (typeof mainFn === 'function') {
    console.log('主函数类型:', typeof mainFn);
    
    // Create mock module for main
    const mockModule = { exports: {}, id: '.', filename: MAIN_CJSC, loaded: false, paths: [] };
    const mockExports = mockModule.exports;
    const mockRequire = Module.prototype.require.bind(mockModule);
    mockRequire.resolve = (id) => id;
    mockRequire.cache = {};
    
    try {
      mainFn.call(mockExports, mockExports, mockRequire, mockModule, MAIN_CJSC, path.dirname(MAIN_CJSC));
      console.log('✅ Main 执行完成');
    } catch (e) {
      console.log(`⚠️ Main 执行中断: ${e.message}`);
      console.log(`   位置: ${e.stack?.split('\n')[1] || 'unknown'}`);
    }
    
    // Capture module.exports
    collected.moduleExports.main = safeInspect(mockModule.exports, 3);
  }
} catch (e) {
  console.log(`❌ Main 加载失败: ${e.message}`);
}

// Trigger app ready
console.log('\n--- 触发 app.ready ---');
try {
  const readyListeners = mockApp.listeners('ready');
  console.log(`ready 监听器数量: ${readyListeners.length}`);
  mockApp.emit('ready');
} catch (e) {
  console.log(`⚠️ app.ready 触发中断: ${e.message}`);
}

// Load preload
try {
  console.log('\n加载 preload/index.cjsc...');
  const preloadFn = loadCjsc(PRELOAD_CJSC);
  
  if (typeof preloadFn === 'function') {
    const mockModule2 = { exports: {}, id: '.', filename: PRELOAD_CJSC, loaded: false, paths: [] };
    const mockExports2 = mockModule2.exports;
    const mockRequire2 = Module.prototype.require.bind(mockModule2);
    mockRequire2.resolve = (id) => id;
    mockRequire2.cache = {};
    
    try {
      preloadFn.call(mockExports2, mockExports2, mockRequire2, mockModule2, PRELOAD_CJSC, path.dirname(PRELOAD_CJSC));
      console.log('✅ Preload 执行完成');
    } catch (e) {
      console.log(`⚠️ Preload 执行中断: ${e.message}`);
    }
    
    collected.moduleExports.preload = safeInspect(mockModule2.exports, 3);
  }
} catch (e) {
  console.log(`❌ Preload 加载失败: ${e.message}`);
}

// ===== Save results =====
// Deduplicate require calls
const requireFreq = {};
for (const r of collected.requireCalls) {
  requireFreq[r] = (requireFreq[r] || 0) + 1;
}
collected.requireCallsSummary = Object.entries(requireFreq)
  .sort((a, b) => b[1] - a[1])
  .map(([mod, count]) => ({ module: mod, count }));
delete collected.requireCalls; // Too verbose

const outputFile = '/tmp/qclaw_deep_hook_v3.json';

// Remove function bodies that are just [bytenode-compiled] to reduce noise
function cleanData(obj) {
  if (typeof obj === 'string') return obj;
  if (Array.isArray(obj)) return obj.map(cleanData);
  if (typeof obj === 'object' && obj !== null) {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = cleanData(v);
    }
    return result;
  }
  return obj;
}

fs.writeFileSync(outputFile, JSON.stringify(cleanData(collected), null, 2));
console.log(`\n✅ 结果已保存到: ${outputFile}`);

// Print summary
console.log('\n========== 摘要 ==========');
console.log(`IPC Handlers: ${collected.ipcHandlers.length}`);
console.log(`IPC On Listeners: ${collected.ipcOnListeners.length}`);
console.log(`App Events: ${collected.appEvents.length}`);
console.log(`BrowserWindow Configs: ${collected.browserWindowConfigs.length}`);
console.log(`Tray Configs: ${collected.trayConfigs.length}`);
console.log(`Menu Configs: ${collected.menuConfigs.length}`);
console.log(`Dialog Calls: ${collected.dialogCalls.length}`);
console.log(`Shell Calls: ${collected.shellCalls.length}`);
console.log(`Protocol Handlers: ${collected.protocolHandlers.length}`);
console.log(`Global Shortcuts: ${collected.globalShortcuts.length}`);
console.log(`ContextBridge APIs: ${Object.keys(collected.contextBridgeAPIs).length}`);
console.log(`Net Requests: ${collected.netRequests.length}`);
console.log(`SafeStorage Calls: ${collected.safeStorageCalls.length}`);
console.log(`Notification Configs: ${collected.notificationConfigs.length}`);
console.log(`WebContents Events: ${collected.webContentsEvents.length}`);
console.log(`Require Modules: ${collected.requireCallsSummary.length}`);

// IPC channel names for quick reference
console.log('\n--- IPC Channels ---');
for (const h of collected.ipcHandlers) {
  console.log(`  [handle] ${h.channel}`);
}
for (const h of collected.ipcOnListeners) {
  console.log(`  [on] ${h.channel}`);
}

process.exit(0);
