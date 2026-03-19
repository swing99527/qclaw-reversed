/**
 * QClaw 主进程 - 重建代码
 * ========================================
 * 来源: out/main/index.cjsc (1.76MB V8 bytecode)
 * 方法: 运行时 Hook 捕获 + 字节码字符串提取 + 渲染器 IPC 调用分析
 * 说明: 由于原始代码为 bytenode 编译的 V8 字节码，无法直接反编译为源码。
 *       以下为基于逆向分析重建的等效伪代码，函数名和 IPC 通道名均来自原始字节码。
 * ========================================
 */

// =============================================================================
//  依赖模块 (29 个，来自 require() Hook 捕获)
// =============================================================================
const { app, BrowserWindow, ipcMain, dialog, shell, clipboard, nativeImage, 
        safeStorage, screen, session, protocol, globalShortcut, Menu, MenuItem, 
        Tray, Notification, powerMonitor, autoUpdater, net, systemPreferences,
        nativeTheme, contextBridge } = require('electron');
const path = require('path');
const fs = require('fs');
const { execSync, spawn, fork } = require('child_process');
const os = require('os');
const { promisify } = require('util');
const { EventEmitter } = require('events');
const http = require('http');
const https = require('https');
const crypto = require('crypto');
const zlib = require('zlib');
const net_ = require('net');
const fsPromises = require('fs/promises');
const { machineId, machineIdSync } = require('node-machine-id');
const { Worker } = require('worker_threads');
const electronLog = require('electron-log');
const { autoUpdater: electronUpdater } = require('electron-updater');
// const smhSdk = require('@tencent/smh-js-sdk');  // 腾讯 SMH 文件管理 SDK

// =============================================================================
//  常量定义 (474 个配置常量，提取自字节码)
// =============================================================================

/** @section 配置管理 */
const WORKSPACE_DIR_NAME = 'workspace';
const BACKUP_DIR_NAME = 'backups';
const BACKUP_FILE_PATTERN = '*.backup.json';
const BACKUP_KEEP_COUNT = 5;
const BOOT_IN_PROGRESS_FLAG_FILE = '.boot-in-progress';

/** @section 进程管理 */
const HEALTH_CHECK_ENDPOINT = '/health';
const OPENCLAW_COMPAT_MATRIX = {}; // 版本兼容矩阵
const OPENCLAW_HEALTH_WAIT_RETRIES = 30;
const HEALTH_WAIT_DEFAULT_RETRY_DELAY_MS = 1000;
const SUPERVISOR_BACKOFF_MULTIPLIER = 1.5;
const SUPERVISOR_CIRCUIT_HALF_OPEN_MAX_DELAY = 60000;

/** @section 遥测上报 */
const RUM_COLLECT_URL = 'https://galileotelemetry.tencent.com/collect';
const RUM_FROM_MAIN = 'main';
const RUM_FROM_RENDERER = 'renderer';
const FIRST_REPORT_DELAY = 5000;
const RUM_EVENT_SERVICE_START = 'service_start';
const RUM_EVENT_SERVICE_STOP = 'service_stop';
const RUM_EVENT_OPENCLAW_HEALTH_RESTART = 'openclaw_health_restart';
const RUM_EVENT_OPENCLAW_INVALID_CONFIG = 'openclaw_invalid_config';

/** @section 网络代理 */
const COS_FILE_PROXY_PREFIX = '/cos-file/';
const BUNDLED_PATH_SUFFIXES = [];

/** @section API 端点 */
const API_URLS = {
  JPRX_PROD: 'https://jprx.sparta.html5.qq.com/',
  JPRX_BETA: 'http://jprx.beta.wsd.com/',
  JPRX_V1: 'https://jprx.sparta.html5.qq.com/aizone/v1',
  JPRX_QQ: 'https://jprx.m.qq.com/',
  JPRX_WOA: 'https://jprx.woa.com/',
  GUANJIA: 'https://guanjia.qq.com',
  SECURITY_LOGIN: 'https://security.guanjia.qq.com/login',
  SECURITY_LOGIN_TEST: 'https://security-test.guanjia.qq.com/login',
  GALILEO_COLLECT: 'https://galileotelemetry.tencent.com/collect',
  GALILEO_WHITELIST: 'https://galileotelemetry.tencent.com/aegiscontrol/whitelist',
  GALILEO_CRASH: 'https://galileotelemetry.tencent.com/crashReport',
  AEGIS_EVENTS: 'https://aegis.qq.com/collect/events',
  DATA_REPORT: 'https://pcmgrmonitor.3g.qq.com/datareport',
  DATA_REPORT_TEST: 'https://pcmgrmonitor.3g.qq.com/test/datareport',
  WX_TOKEN: 'https://mmgrcalltoken.3g.qq.com/aizone/v1',
  SKILL_HUB: 'https://skillhub.tencent.com/*',
  OPENCLAW_LOCAL: 'http://127.0.0.1:28789/*',
};

// =============================================================================
//  日志系统初始化
// =============================================================================

const log = electronLog;
log.transports.file.level = 'info';
log.transports.console.level = 'info';
log.transports.ipc.level = false;
log.errorHandler.startCatching();

function getElectronLogPath() {
  return path.join(app.getPath('logs'), 'main.log');
}

function getAppLogPath() {
  return app.getPath('logs');
}

function createDefaultLogger() {
  return log.scope('main');
}

// =============================================================================
//  配置管理模块
// =============================================================================

class ConfigManager {
  constructor() {
    this._config = {};
    this._configPath = null;
  }

  getConfigPath() {
    return this._configPath || path.join(app.getPath('userData'), 'config.json');
  }

  getDefaultConfigSourcePath() {
    return path.join(this.getBundledConfigDir(), 'default-config.json');
  }

  getBundledConfigDir() {
    return path.join(app.getAppPath(), 'bundled', 'config');
  }

  readConfigFile() {
    return JSON.parse(fs.readFileSync(this.getConfigPath(), 'utf-8'));
  }

  readConfigFileSync() {
    return this.readConfigFile();
  }

  writeConfigFile(config) {
    fs.writeFileSync(this.getConfigPath(), JSON.stringify(config, null, 2));
  }

  writeConfigFileSync(config) {
    this.writeConfigFile(config);
  }

  getConfig() { return this._config; }
  setConfig(config) { this._config = config; }
  getRuntimeConfig() { return this._config; }
  getDefaultConfig() { /* ... */ }

  readConfigField(field) { return this._config[field]; }
  updateField(field, value) { this._config[field] = value; this.writeConfigFile(this._config); }
  setTempConfig(key, value) { this._config[key] = value; }
  onConfigChange(callback) { /* 监听配置变化 */ }
  readQClawConfig() { return this.readConfigFile(); }
}

const configManager = new ConfigManager();

// =============================================================================
//  设备标识模块
// =============================================================================

function getDeviceId() {
  const filePath = getDeviceIdFilePath();
  try {
    return fs.readFileSync(filePath, 'utf-8').trim();
  } catch {
    const id = machineIdSync();
    fs.writeFileSync(filePath, id);
    return id;
  }
}

function getDeviceIdFilePath() {
  return path.join(app.getPath('userData'), '.device-id');
}

function getDevicePlatform() {
  return process.platform;
}

// =============================================================================
//  安全存储模块 (Electron safeStorage API)
// =============================================================================

class SafeStorageManager {
  isAvailable() {
    return safeStorage.isEncryptionAvailable();
  }

  encrypt(data) {
    return safeStorage.encryptString(data);
  }

  decrypt(data) {
    return safeStorage.decryptString(data);
  }

  getJwtToken() {
    try {
      const encrypted = fs.readFileSync(path.join(app.getPath('userData'), '.jwt'));
      return this.decrypt(encrypted);
    } catch { return null; }
  }

  setJwtToken(token) {
    const encrypted = this.encrypt(token);
    fs.writeFileSync(path.join(app.getPath('userData'), '.jwt'), encrypted);
  }

  clearJwtToken() {
    try { fs.unlinkSync(path.join(app.getPath('userData'), '.jwt')); } catch {}
  }

  getUserInfo() {
    try {
      const encrypted = fs.readFileSync(path.join(app.getPath('userData'), '.userinfo'));
      return JSON.parse(this.decrypt(encrypted));
    } catch { return null; }
  }

  setUserInfo(info) {
    const encrypted = this.encrypt(JSON.stringify(info));
    fs.writeFileSync(path.join(app.getPath('userData'), '.userinfo'), encrypted);
  }

  clearUserInfo() {
    try { fs.unlinkSync(path.join(app.getPath('userData'), '.userinfo')); } catch {}
  }
}

const safeStorageManager = new SafeStorageManager();

// =============================================================================
//  邀请码安全验证模块
// =============================================================================

class SecurityManager {
  verifyInviteCode(code) {
    // 调用 JPRX API 验证邀请码
    // POST /jprx/security/verify-invite
    // 验证通过后设置标记
  }

  isInviteVerified() {
    // 检查本地标记文件
  }

  clearInviteStatus() {
    // 清除验证标记
  }
}

// =============================================================================
//  窗口管理模块
// =============================================================================

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 960,
    height: 740,
    minWidth: 960,
    minHeight: 740,
    show: false,
    frame: false,                // 无边框窗口
    titleBarStyle: 'hidden',
    trafficLightPosition: { x: 20, y: 28 },
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.cjsc'),
      sandbox: false,            // ⚠️ 关闭沙箱
      contextIsolation: true,    // 上下文隔离
      nodeIntegration: false,    // 禁止 Node 集成
    },
  });

  // macOS 最大化/最小化事件
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window:maximizeChange', true);
  });
  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window:maximizeChange', false);
  });

  // 加载渲染器页面
  if (process.env.VITE_DEV_SERVER_URL) {
    mainWindow.loadURL('http://localhost:5175');
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }

  return mainWindow;
}

// =============================================================================
//  系统托盘模块
// =============================================================================

class TrayManager {
  constructor() {
    this.tray = null;
  }

  createTray() {
    const icon = this.getTrayIcon();
    this.tray = new Tray(nativeImage.createFromPath(icon));
    this.tray.setToolTip('QClaw - AI 助手');
    this.tray.setContextMenu(this._buildMenu());
    return this.tray;
  }

  getTrayIcon() {
    return this.getMacTrayIcon();
  }

  getMacTrayIcon() {
    const iconsDir = path.join(app.getAppPath(), 'icons');
    return path.join(iconsDir, 'tray-icon-Template.png');
  }

  _buildMenu() {
    return Menu.buildFromTemplate([
      { label: '显示主窗口', click: () => { /* show main window */ } },
      { type: 'separator' },
      { label: '退出', click: () => app.quit() },
    ]);
  }
}

// =============================================================================
//  OpenClaw 进程管理模块
// =============================================================================

class ProcessManager extends EventEmitter {
  constructor() {
    super();
    this.mode = 'shared';  // 'shared' | 'isolated'
    this.childProcess = null;
    this.healthCheckTimer = null;
    this.status = 'stopped';
    this.port = 28789;
    this.bootState = 'idle';
  }

  async start() {
    this.bootState = 'starting';
    emit('process:spawned');
    
    const openclawPath = this.getOpenClawEntryPath();
    const env = this.createCleanEnv();
    
    this.childProcess = spawn(this.getExecNodePath(), [openclawPath], {
      env,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    
    this.childProcess.stdout.on('data', (data) => { /* log */ });
    this.childProcess.stderr.on('data', (data) => { /* log error */ });
    
    this.childProcess.on('exit', (code) => {
      this.status = 'stopped';
      this.emit('process:status', 'stopped');
    });
    
    this.status = 'running';
    await this.checkHealthWithRetry();
    this.bootState = 'ready';
    this.startHealthMonitor();
  }

  async stop() {
    if (this.childProcess) {
      this.childProcess.kill();
      this.childProcess = null;
    }
    this.status = 'stopped';
  }

  async restart() {
    await this.stop();
    await this.start();
  }

  getStatus() { return this.status; }
  
  getOpenClawEntryPath() {
    return path.join(this.getOpenClawPath(), 'index.js');
  }

  getOpenClawPath() {
    // 根据模式选择路径
    return path.join(app.getPath('userData'), 'openclaw');
  }
  
  getOpenClawVersion() {
    const pkg = JSON.parse(fs.readFileSync(path.join(this.getOpenClawPath(), 'package.json'), 'utf-8'));
    return pkg.version;
  }

  checkOpenClawCompatibility() {
    /* 检查 Electron 版本与 OpenClaw 版本兼容性 */
  }

  getExecNodePath() {
    return process.execPath;
  }

  createCleanEnv() {
    return { ...process.env };
  }

  async checkHealth() {
    try {
      const res = await fetch(`http://127.0.0.1:${this.port}${HEALTH_CHECK_ENDPOINT}`);
      return res.ok;
    } catch { return false; }
  }

  async checkHealthWithRetry() {
    for (let i = 0; i < OPENCLAW_HEALTH_WAIT_RETRIES; i++) {
      if (await this.checkHealth()) return true;
      await new Promise(r => setTimeout(r, HEALTH_WAIT_DEFAULT_RETRY_DELAY_MS));
      this.emit('process:healthProgress', i + 1, OPENCLAW_HEALTH_WAIT_RETRIES);
    }
    throw new Error('OpenClaw health check timeout');
  }

  startHealthMonitor() {
    this.healthCheckTimer = setInterval(async () => {
      if (!await this.checkHealth()) {
        log.warn('OpenClaw health check failed, restarting...');
        this.emit('process:healthRestart');
        await this.restart();
      }
    }, 30000);
  }

  getLogs() {
    /* 读取进程日志 */
  }

  getProcessStatus() { return { status: this.status, port: this.port, mode: this.mode }; }
  getMode() { return this.mode; }
  setMode(mode) { this.mode = mode; }

  setPowerSaveBlockerEnabled(enabled) { /* 防止系统休眠 */ }
  getPowerSaveBlockerEnabled() { /* ... */ }

  openControlUI() {
    shell.openExternal(`http://127.0.0.1:${this.port}`);
  }

  checkBootCrashFlag() {
    /* 检查上次启动是否崩溃 */
  }
}

const processManager = new ProcessManager();

// =============================================================================
//  Agent 系统模块
// =============================================================================

class AgentManager {
  readAgentList() {
    // 从 OpenClaw 工作空间读取 Agent 列表
    // GET http://127.0.0.1:28789/api/agents
  }

  readAgentProfile(agentId) {
    // 读取 Agent 配置文件
    // 从文件系统: workspace/{agentId}/profile.json
  }

  readAgentMemory(agentId) {
    // 读取 Agent 记忆
  }

  readAgentModels() {
    // 读取可用的 AI 模型列表
  }

  readAgentSessions(agentId) {
    // 读取 Agent 会话列表
  }

  writeAgentProfileFile(agentId, profile) {
    // 写入 Agent 配置文件
  }

  writeAgentMemoryFile(agentId, memory) {
    // 写入 Agent 记忆文件
  }
}

// =============================================================================
//  技能系统模块
// =============================================================================

class SkillManager {
  getBundledSkillsDir() {
    return path.join(app.getAppPath(), 'bundled', 'skills');
  }

  getSkillSearchDirs() {
    return [this.getBundledSkillsDir(), path.join(app.getPath('userData'), 'skills')];
  }

  getSkillSourceDirs() {
    return this.getSkillSearchDirs();
  }

  readSkillList() {
    // 从所有搜索目录读取技能列表
  }

  readSkillDetail(skillId) {
    // 读取单个技能详细信息
  }

  getDisabledSkillNames() {
    return configManager.readConfigField('disabledSkills') || [];
  }

  async downloadSkill(skillId) {
    // 从 skillhub.tencent.com 下载技能
  }

  async enableSkills(skillIds) {
    // 启用指定技能
  }

  async removeUserSkill(skillId) {
    // 移除用户自定义技能
  }

  async checkSkillsInstalled(skillIds) {
    // 检查技能是否已安装
  }

  getSkillsInfo() {
    // 获取所有技能的综合信息
  }
}

// =============================================================================
//  CronJob 模块
// =============================================================================

class CronJobManager {
  readCronJobs() {
    // 从配置/工作空间读取定时任务列表
  }

  readCronRunHistory() {
    // 读取定时任务执行历史
  }
}

// =============================================================================
//  会话管理模块
// =============================================================================

class SessionManager {
  readSessionFile(sessionId) {
    // 读取会话文件内容
  }

  search(query) {
    // 搜索会话内容
  }

  appendFakeMessages(sessionId, messages) {
    // 追加模拟消息（用于调试/测试）
  }

  getFakeMessages(sessionId) {
    // 获取模拟消息
  }

  clearFakeMessages(sessionId) {
    // 清除模拟消息
  }

  mergeFakeMessages(sessionId) {
    // 合并模拟消息到正式会话
  }

  trimLastExchange(sessionId) {
    // 移除最后一轮对话
  }

  deleteSecurityBlockedExchanges(sessionId) {
    // 删除安全审查被阻止的对话
  }
}

// =============================================================================
//  备份管理模块
// =============================================================================

class BackupManager {
  createBackup() {
    // 创建配置和工作空间备份
  }

  getBackupList() {
    // 列出所有备份文件
  }
}

// =============================================================================
//  网关/API 代理模块 (AuthGateway)
// =============================================================================

class AuthGateway {
  constructor() {
    this.server = null;
    this.port = null;
    this.router = null;
  }

  createGatewayRouter() {
    // 创建 HTTP 路由器
    // 路由包括:
    //   - /forward/* → 转发到 JPRX 网关
    //   - /llm/* → 转发到 LLM 代理
    //   - /cos-file/* → 转发到 COS 文件存储
  }

  createForwardRoute() {
    // 创建请求转发路由 → JPRX 网关
    // 自动附加 JWT Token 作为 Authorization header
  }

  createLlmRoute() {
    // 创建 LLM API 代理路由
    // 支持 SSE 流式响应
  }

  createAuthGateway() {
    this.router = this.createGatewayRouter();
    this.server = http.createServer(this.router);
    this.server.listen(0, '127.0.0.1', () => {
      this.port = this.server.address().port;
    });
  }

  getAuthGatewayLlmProxyBaseUrl() {
    return `http://127.0.0.1:${this.port}/llm`;
  }

  getRunningAuthGatewayLlmBaseUrl() {
    return this.getAuthGatewayLlmProxyBaseUrl();
  }

  getForwardProxyPrefix() {
    return `http://127.0.0.1:${this.port}/forward`;
  }

  getLlmProxyPrefix() {
    return '/llm';
  }

  getCosFileProxyPrefix() {
    return COS_FILE_PROXY_PREFIX;
  }

  setAuthHeaderForToken(headers) {
    const token = safeStorageManager.getJwtToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  writeAuthGatewayBaseUrl() {
    // 将 AuthGateway 基础 URL 写入配置文件
    // 供 OpenClaw 进程使用
  }

  getEnvUrls() {
    // 根据环境（prod/beta/test）返回 API URL
  }

  updatePort(port) {
    this.port = port;
  }
}

// =============================================================================
//  Galileo 遥测模块
// =============================================================================

class GalileoReporter {
  syncCommonParams(params) {
    // 同步公共上报参数
  }

  syncSessionId(sessionId) {
    // 同步会话 ID
  }

  createRumCrashReporter() {
    // 创建 RUM 崩溃上报器
  }
}

// =============================================================================
//  软件更新模块 (electron-updater)
// =============================================================================

class UpdateManager {
  constructor() {
    this.downloadPromise = null;
  }

  async check() {
    return electronUpdater.checkForUpdates();
  }

  async download() {
    this.downloadPromise = electronUpdater.downloadUpdate();
    return this.downloadPromise;
  }

  quitAndInstall() {
    electronUpdater.quitAndInstall();
  }

  getDownloadedUpdateInfo() {
    return electronUpdater.getDownloadedUpdateInfo?.();
  }

  onUpdateAvailable(info) {
    // 通知渲染器有更新可用
    mainWindow?.webContents.send('updater:update-available', info);
  }

  handleUpdateDownloaded(info) {
    mainWindow?.webContents.send('updater:update-downloaded', info);
  }
}

// =============================================================================
//  文件下载管理模块
// =============================================================================

class DownloadManager {
  async downloadFile(url, destPath) {
    // 下载文件到指定路径
    // 支持进度回调 → app:downloadProgressx
  }

  async downloadSkill(skillId) {
    // 从 SkillHub 下载技能包
  }

  getBaseDownloadPath() {
    return path.join(app.getPath('downloads'), 'QClaw');
  }

  handleDownloadResponse(response) {
    // 处理下载响应，计算进度  
  }

  handleUpload(options) {
    // 处理文件上传
  }

  createUploadTask(options) {
    // 创建上传任务
  }
}

// =============================================================================
//  性能监控模块
// =============================================================================

class PerfMonitor {
  setRunningState(state) {
    // 设置运行状态标记
  }

  getCpuUsageStats() {
    return process.cpuUsage();
  }

  getMemoryGrowthRate() {
    // 计算内存增长率
  }

  checkGpuDegradation() {
    // 检查 GPU 性能退化
  }

  writeInitPerfLog() {
    // 写入初始化性能日志
  }

  getPerfTimings() {
    // 获取性能计时数据
  }
}

// =============================================================================
//  IPC 通道注册 (79 handle + 1 on, 来自运行时 Hook 捕获)
// =============================================================================

function registerIpcHandlers(mainWindow) {
  
  // ─── 窗口管理 (7) ────────────────────────────────────────────
  ipcMain.handle('window:minimize', () => mainWindow.minimize());
  ipcMain.handle('window:maximize', () => {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
  });
  ipcMain.handle('window:close', () => mainWindow.close());
  ipcMain.handle('window:isMaximized', () => mainWindow.isMaximized());
  ipcMain.handle('window:setSize', (_, width, height) => mainWindow.setSize(width, height));
  ipcMain.handle('window:getSize', () => mainWindow.getSize());
  ipcMain.on('window:maximizeChange', () => {}); // 监听最大化变化事件

  // ─── 应用信息 (4) ────────────────────────────────────────────
  ipcMain.handle('app:get-version', () => app.getVersion());
  ipcMain.handle('app:get-channel', () => configManager.readConfigField('channel'));
  ipcMain.handle('app:get-machine-id', () => getDeviceId());
  ipcMain.handle('app:quit', () => app.quit());
  ipcMain.handle('app:get-openclaw-version', () => processManager.getOpenClawVersion());
  ipcMain.handle('app:check-openclaw-compatibility', () => processManager.checkOpenClawCompatibility());
  ipcMain.handle('app:openPath', (_, p) => shell.openPath(p));
  ipcMain.handle('app:openFolderDialog', () => dialog.showOpenDialog({ properties: ['openDirectory'] }));
  ipcMain.handle('app:openAISandbox', () => shell.openExternal('http://127.0.0.1:28789'));

  // ─── 技能管理 (5) ────────────────────────────────────────────
  ipcMain.handle('app:downloadFile', (_, url, dest) => downloadManager.downloadFile(url, dest));
  ipcMain.handle('app:downloadSkill', (_, skillId) => skillManager.downloadSkill(skillId));
  ipcMain.handle('app:enableSkills', (_, skillIds) => skillManager.enableSkills(skillIds));
  ipcMain.handle('app:removeUserSkill', (_, skillId) => skillManager.removeUserSkill(skillId));
  ipcMain.handle('app:checkSkillsInstalled', (_, skillIds) => skillManager.checkSkillsInstalled(skillIds));
  ipcMain.handle('app:getSkillsInfo', () => skillManager.getSkillsInfo());

  // ─── 配置管理 (2) ────────────────────────────────────────────
  ipcMain.handle('config:getField', (_, field) => configManager.readConfigField(field));
  ipcMain.handle('config:updateField', (_, field, value) => configManager.updateField(field, value));

  // ─── 安全存储 (7) ────────────────────────────────────────────
  ipcMain.handle('safeStorage:isAvailable', () => safeStorageManager.isAvailable());
  ipcMain.handle('safeStorage:encrypt', (_, data) => safeStorageManager.encrypt(data));
  ipcMain.handle('safeStorage:decrypt', (_, data) => safeStorageManager.decrypt(data));
  ipcMain.handle('safeStorage:getJwtToken', () => safeStorageManager.getJwtToken());
  ipcMain.handle('safeStorage:setJwtToken', (_, token) => safeStorageManager.setJwtToken(token));
  ipcMain.handle('safeStorage:getUserInfo', () => safeStorageManager.getUserInfo());
  ipcMain.handle('safeStorage:setUserInfo', (_, info) => safeStorageManager.setUserInfo(info));
  ipcMain.handle('safeStorage:clearJwtToken', () => safeStorageManager.clearJwtToken());
  ipcMain.handle('safeStorage:clearUserInfo', () => safeStorageManager.clearUserInfo());

  // ─── 安全验证 (3) ────────────────────────────────────────────
  ipcMain.handle('security:verifyInviteCode', (_, code) => securityManager.verifyInviteCode(code));
  ipcMain.handle('security:isInviteVerified', () => securityManager.isInviteVerified());
  ipcMain.handle('security:clearInviteStatus', () => securityManager.clearInviteStatus());

  // ─── 进程管理 (10) ───────────────────────────────────────────
  ipcMain.handle('process:start', () => processManager.start());
  ipcMain.handle('process:stop', () => processManager.stop());
  ipcMain.handle('process:restart', () => processManager.restart());
  ipcMain.handle('process:getStatus', () => processManager.getProcessStatus());
  ipcMain.handle('process:getLogs', () => processManager.getLogs());
  ipcMain.handle('process:openControlUI', () => processManager.openControlUI());
  ipcMain.handle('process:setPowerSaveBlockerEnabled', (_, e) => processManager.setPowerSaveBlockerEnabled(e));
  ipcMain.handle('process:getPowerSaveBlockerEnabled', () => processManager.getPowerSaveBlockerEnabled());
  // process:status → 事件推送
  // process:spawned → 事件推送
  // process:healthProgress → 事件推送
  // process:powerSaveBlockerChange → 事件推送
  // process:log → 事件推送

  // ─── 实例管理 (4+2事件) ──────────────────────────────────────
  ipcMain.handle('instance:getBootState', () => processManager.bootState);
  ipcMain.handle('instance:getMode', () => processManager.getMode());
  ipcMain.handle('instance:setMode', (_, mode) => processManager.setMode(mode));
  ipcMain.handle('instance:retryBoot', () => processManager.restart());
  // instance:bootState → 事件推送
  // instance:modeChange → 事件推送

  // ─── QClaw 数据读写 (14) ─────────────────────────────────────
  ipcMain.handle('qclaw:readConfig', () => configManager.readQClawConfig());
  ipcMain.handle('qclaw:readMeta', () => ({ version: app.getVersion(), channel: configManager.readConfigField('channel') }));
  ipcMain.handle('qclaw:readAgentList', () => agentManager.readAgentList());
  ipcMain.handle('qclaw:readAgentProfile', (_, agentId) => agentManager.readAgentProfile(agentId));
  ipcMain.handle('qclaw:readAgentMemory', (_, agentId) => agentManager.readAgentMemory(agentId));
  ipcMain.handle('qclaw:readAgentModels', () => agentManager.readAgentModels());
  ipcMain.handle('qclaw:readAgentSessions', (_, agentId) => agentManager.readAgentSessions(agentId));
  ipcMain.handle('qclaw:writeAgentProfileFile', (_, agentId, profile) => agentManager.writeAgentProfileFile(agentId, profile));
  ipcMain.handle('qclaw:writeAgentMemoryFile', (_, agentId, memory) => agentManager.writeAgentMemoryFile(agentId, memory));
  ipcMain.handle('qclaw:readSkillList', () => skillManager.readSkillList());
  ipcMain.handle('qclaw:readSkillDetail', (_, skillId) => skillManager.readSkillDetail(skillId));
  ipcMain.handle('qclaw:readCronJobs', () => cronJobManager.readCronJobs());
  ipcMain.handle('qclaw:readCronRunHistory', () => cronJobManager.readCronRunHistory());
  ipcMain.handle('qclaw:readSessionFile', (_, sessionId) => sessionManager.readSessionFile(sessionId));

  // ─── 会话操作 (7) ────────────────────────────────────────────
  ipcMain.handle('session:search', (_, query) => sessionManager.search(query));
  ipcMain.handle('session:appendFakeMessages', (_, sid, msgs) => sessionManager.appendFakeMessages(sid, msgs));
  ipcMain.handle('session:getFakeMessages', (_, sid) => sessionManager.getFakeMessages(sid));
  ipcMain.handle('session:clearFakeMessages', (_, sid) => sessionManager.clearFakeMessages(sid));
  ipcMain.handle('session:mergeFakeMessages', (_, sid) => sessionManager.mergeFakeMessages(sid));
  ipcMain.handle('session:trimLastExchange', (_, sid) => sessionManager.trimLastExchange(sid));
  ipcMain.handle('session:deleteSecurityBlockedExchanges', (_, sid) => sessionManager.deleteSecurityBlockedExchanges(sid));

  // ─── 遥测/伽利略 (2) ─────────────────────────────────────────
  ipcMain.handle('galileo:syncCommonParams', (_, params) => galileoReporter.syncCommonParams(params));
  ipcMain.handle('galileo:syncSessionId', (_, sessionId) => galileoReporter.syncSessionId(sessionId));

  // ─── 调试 (2) ────────────────────────────────────────────────
  ipcMain.handle('debug:openLogFolder', () => shell.openPath(getAppLogPath()));
  ipcMain.handle('debug:packQclaw', () => { /* 打包调试信息 */ });

  // ─── 性能 (1) ────────────────────────────────────────────────
  ipcMain.handle('perf:setRunningState', (_, state) => perfMonitor.setRunningState(state));

  // ─── 软件更新 (3+5事件) ──────────────────────────────────────
  ipcMain.handle('updater:check', () => updateManager.check());
  ipcMain.handle('updater:download', () => updateManager.download());
  ipcMain.handle('updater:quit-and-install', () => updateManager.quitAndInstall());
  ipcMain.handle('updater:get-downloaded-info', () => updateManager.getDownloadedUpdateInfo());
  // updater:update-available → 事件推送
  // updater:update-downloaded → 事件推送
  // updater:download-progress → 事件推送
  // updater:update-not-available → 事件推送
  // updater:error → 事件推送
}

// =============================================================================
//  Protocol 注册 (自定义协议)
// =============================================================================

function registerProtocols() {
  // 注册 qclaw:// 协议
  protocol.registerSchemesAsPrivileged([
    { scheme: 'qclaw', privileges: { standard: true, secure: true, supportFetchAPI: true } },
  ]);
}

// =============================================================================
//  应用生命周期 (8 个事件，来自运行时 Hook 捕获)
// =============================================================================

let mainWindow = null;
const trayManager = new TrayManager();
const agentManager = new AgentManager();
const skillManager = new SkillManager();
const cronJobManager = new CronJobManager();
const sessionManager = new SessionManager();
const securityManager = new SecurityManager();
const galileoReporter = new GalileoReporter();
const updateManager = new UpdateManager();
const downloadManager = new DownloadManager();
const perfMonitor = new PerfMonitor();
const authGateway = new AuthGateway();

// event 1: before-quit
app.on('before-quit', () => {
  // 清理：停止 OpenClaw 进程、保存配置
  processManager.stop();
});

// event 2: ready
app.on('ready', async () => {
  // 初始化 electron-log
  log.initialize();
  
  // 创建系统托盘
  trayManager.createTray();
  
  // 创建主窗口
  mainWindow = createWindow();
  
  // 注册 IPC handlers
  registerIpcHandlers(mainWindow);
  
  // 设置 preload 路径
  setPreloadFileForSessions();
  
  // 启动 AuthGateway
  authGateway.createAuthGateway();
  
  // 初始化遥测
  galileoReporter.createRumCrashReporter();
  
  // 启动 OpenClaw 进程
  try {
    await processManager.start();
  } catch (e) {
    log.error('OpenClaw 启动失败:', e);
  }
  
  // 显示窗口
  mainWindow.show();
});

// event 3: window-all-closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// event 4: activate (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    mainWindow = createWindow();
  } else {
    mainWindow?.show();
  }
});

// event 5: second-instance (单实例锁)
app.on('second-instance', () => {
  if (mainWindow) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
  }
});

// event 6: will-quit
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

// event 7: open-url (macOS deep link)
app.on('open-url', (event, url) => {
  event.preventDefault();
  // 处理 qclaw:// 协议打开
});

// event 8: certificate-error
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
  // 处理证书错误
});

// Preload 设置
function setPreloadFileForSessions() {
  const preloadPath = path.join(__dirname, '../preload/index.cjsc');
  // session.defaultSession.setPreloads([preloadPath]);
  // 使用 bytecode-loader 注册 .cjsc 扩展
}

function checkPreloadIntegrity() {
  // 检查 preload 文件完整性（SHA256）
}

// 注册自定义协议
registerProtocols();

// 单实例锁
app.requestSingleInstanceLock();
