/**
 * QClaw Preload 脚本 - 重建代码
 * ========================================
 * 来源: out/preload/index.cjsc (34KB V8 bytecode)
 * 方法: 运行时 Hook + contextBridge 捕获 + 字节码字符串提取
 * 说明: Preload 通过 contextBridge.exposeInMainWorld 暴露 electronAPI 接口给渲染器
 * ========================================
 */

const { contextBridge, ipcRenderer } = require('electron');

// =============================================================================
//  Helper: 创建 IPC invoke 包装器
// =============================================================================
function createInvoker(channel) {
  return (...args) => ipcRenderer.invoke(channel, ...args);
}

function createListener(channel) {
  return (callback) => {
    const handler = (event, ...args) => callback(...args);
    ipcRenderer.on(channel, handler);
    return () => ipcRenderer.removeListener(channel, handler);
  };
}

// =============================================================================
//  electronAPI 接口定义 (16 命名空间)
// =============================================================================

const electronAPI = {
  // ─── 1. 窗口管理 ─────────────────────────────────────────────
  window: {
    minimize: createInvoker('window:minimize'),
    maximize: createInvoker('window:maximize'),
    close: createInvoker('window:close'),
    isMaximized: createInvoker('window:isMaximized'),
    setSize: (width, height) => ipcRenderer.invoke('window:setSize', width, height),
    getSize: createInvoker('window:getSize'),
    onMaximizeChange: createListener('window:maximizeChange'),
  },

  // ─── 2. 应用信息 ─────────────────────────────────────────────
  app: {
    getVersion: createInvoker('app:get-version'),
    getChannel: createInvoker('app:get-channel'),
    getMachineId: createInvoker('app:get-machine-id'),
    getOpenClawVersion: createInvoker('app:get-openclaw-version'),
    checkOpenClawCompatibility: createInvoker('app:check-openclaw-compatibility'),
    quitApp: createInvoker('app:quit'),
    openPath: (path) => ipcRenderer.invoke('app:openPath', path),
    openFolderDialog: createInvoker('app:openFolderDialog'),
    openAISandbox: createInvoker('app:openAISandbox'),
    downloadFile: (url, dest) => ipcRenderer.invoke('app:downloadFile', url, dest),
    downloadSkill: (skillId) => ipcRenderer.invoke('app:downloadSkill', skillId),
    enableSkills: (skillIds) => ipcRenderer.invoke('app:enableSkills', skillIds),
    removeUserSkill: (skillId) => ipcRenderer.invoke('app:removeUserSkill', skillId),
    checkSkillsInstalled: (skillIds) => ipcRenderer.invoke('app:checkSkillsInstalled', skillIds),
    getSkillsInfo: createInvoker('app:getSkillsInfo'),
    onDownloadProgress: createListener('app:downloadProgress'),
  },

  // ─── 3. 配置管理 ─────────────────────────────────────────────
  config: {
    getField: (field) => ipcRenderer.invoke('config:getField', field),
    updateField: (field, value) => ipcRenderer.invoke('config:updateField', field, value),
  },

  // ─── 4. 安全存储 ─────────────────────────────────────────────
  safeStorage: {
    isAvailable: createInvoker('safeStorage:isAvailable'),
    encrypt: (data) => ipcRenderer.invoke('safeStorage:encrypt', data),
    decrypt: (data) => ipcRenderer.invoke('safeStorage:decrypt', data),
    getJwtToken: createInvoker('safeStorage:getJwtToken'),
    setJwtToken: (token) => ipcRenderer.invoke('safeStorage:setJwtToken', token),
    getUserInfo: createInvoker('safeStorage:getUserInfo'),
    setUserInfo: (info) => ipcRenderer.invoke('safeStorage:setUserInfo', info),
    clearJwtToken: createInvoker('safeStorage:clearJwtToken'),
    clearUserInfo: createInvoker('safeStorage:clearUserInfo'),
  },

  // ─── 5. 安全验证 ─────────────────────────────────────────────
  security: {
    verifyInviteCode: (code) => ipcRenderer.invoke('security:verifyInviteCode', code),
    isInviteVerified: createInvoker('security:isInviteVerified'),
    clearInviteStatus: createInvoker('security:clearInviteStatus'),
  },

  // ─── 6. 进程管理 ─────────────────────────────────────────────
  process: {
    start: createInvoker('process:start'),
    stop: createInvoker('process:stop'),
    restart: createInvoker('process:restart'),
    getStatus: createInvoker('process:getStatus'),
    getLogs: createInvoker('process:getLogs'),
    openControlUI: createInvoker('process:openControlUI'),
    setPowerSaveBlockerEnabled: (enabled) => ipcRenderer.invoke('process:setPowerSaveBlockerEnabled', enabled),
    getPowerSaveBlockerEnabled: createInvoker('process:getPowerSaveBlockerEnabled'),
    onStatusChange: createListener('process:status'),
    onSpawned: createListener('process:spawned'),
    onHealthProgress: createListener('process:healthProgress'),
    onPowerSaveBlockerChange: createListener('process:powerSaveBlockerChange'),
    onLog: createListener('process:log'),
  },

  // ─── 7. 实例管理 ─────────────────────────────────────────────
  instance: {
    getBootState: createInvoker('instance:getBootState'),
    getMode: createInvoker('instance:getMode'),
    setMode: (mode) => ipcRenderer.invoke('instance:setMode', mode),
    retryBoot: createInvoker('instance:retryBoot'),
    onBootState: createListener('instance:bootState'),
    onModeChange: createListener('instance:modeChange'),
  },

  // ─── 8. QClaw 数据读写 ───────────────────────────────────────
  qclaw: {
    readQClawConfig: createInvoker('qclaw:readConfig'),
    readQClawMeta: createInvoker('qclaw:readMeta'),
    readAgentList: createInvoker('qclaw:readAgentList'),
    readAgentProfile: (agentId) => ipcRenderer.invoke('qclaw:readAgentProfile', agentId),
    readAgentMemory: (agentId) => ipcRenderer.invoke('qclaw:readAgentMemory', agentId),
    readAgentModels: createInvoker('qclaw:readAgentModels'),
    readAgentSessions: (agentId) => ipcRenderer.invoke('qclaw:readAgentSessions', agentId),
    writeAgentProfileFile: (agentId, profile) => ipcRenderer.invoke('qclaw:writeAgentProfileFile', agentId, profile),
    writeAgentMemoryFile: (agentId, memory) => ipcRenderer.invoke('qclaw:writeAgentMemoryFile', agentId, memory),
    readSkillList: createInvoker('qclaw:readSkillList'),
    readSkillDetail: (skillId) => ipcRenderer.invoke('qclaw:readSkillDetail', skillId),
    readCronJobs: createInvoker('qclaw:readCronJobs'),
    readCronRunHistory: createInvoker('qclaw:readCronRunHistory'),
    readSessionFile: (sessionId) => ipcRenderer.invoke('qclaw:readSessionFile', sessionId),
  },

  // ─── 9. 会话操作 ─────────────────────────────────────────────
  session: {
    search: (query) => ipcRenderer.invoke('session:search', query),
    appendFakeMessages: (sid, msgs) => ipcRenderer.invoke('session:appendFakeMessages', sid, msgs),
    getFakeMessages: (sid) => ipcRenderer.invoke('session:getFakeMessages', sid),
    clearFakeMessages: (sid) => ipcRenderer.invoke('session:clearFakeMessages', sid),
    mergeFakeMessages: (sid) => ipcRenderer.invoke('session:mergeFakeMessages', sid),
    trimLastExchange: (sid) => ipcRenderer.invoke('session:trimLastExchange', sid),
    deleteSecurityBlockedExchanges: (sid) => ipcRenderer.invoke('session:deleteSecurityBlockedExchanges', sid),
  },

  // ─── 10. 遥测上报 ────────────────────────────────────────────
  galileo: {
    syncCommonParams: (params) => ipcRenderer.invoke('galileo:syncCommonParams', params),
    syncSessionId: (sessionId) => ipcRenderer.invoke('galileo:syncSessionId', sessionId),
  },

  // ─── 11. 调试工具 ────────────────────────────────────────────
  debug: {
    openLogFolder: createInvoker('debug:openLogFolder'),
    packQclaw: createInvoker('debug:packQclaw'),
    onTogglePanel: createListener('debug:togglePanel'),
  },

  // ─── 12. 性能监控 ────────────────────────────────────────────
  perf: {
    setRunningState: (state) => ipcRenderer.invoke('perf:setRunningState', state),
  },

  // ─── 13. 软件更新 ────────────────────────────────────────────
  updater: {
    checkForUpdates: createInvoker('updater:check'),
    downloadUpdate: createInvoker('updater:download'),
    quitAndInstall: createInvoker('updater:quit-and-install'),
    getDownloadedInfo: createInvoker('updater:get-downloaded-info'),
    onUpdateAvailable: createListener('updater:update-available'),
    onUpdateDownloaded: createListener('updater:update-downloaded'),
    onUpdateNotAvailable: createListener('updater:update-not-available'),
    onDownloadProgress: createListener('updater:download-progress'),
    onError: createListener('updater:error'),
  },

  // ─── 14. 日志系统 ────────────────────────────────────────────
  logger: {
    // electron-log preload bridge
    // 通过 __ELECTRON_LOG_IPC__ 和 __ELECTRON_LOG__ 通道通信
  },

  // ─── 15. 数据上报 ────────────────────────────────────────────
  reporter: {
    report: (eventCode, params) => {
      // RUM 上报 → rum:report channel
    },
  },

  // ─── 16. 平台信息 ────────────────────────────────────────────
  platform: process.platform,
  arch: process.arch,
};

// =============================================================================
//  暴露 API 到渲染器窗口
// =============================================================================

contextBridge.exposeInMainWorld('electronAPI', electronAPI);

// electron-log preload 初始化
// require('../renderer/electron-log-preload.js');
