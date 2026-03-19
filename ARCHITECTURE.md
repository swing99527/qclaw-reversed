# QClaw 逆向工程 - 完整架构文档

> **产品名称**: QClaw (管家 OpenClaw)
> **内部包名**: `@guanjia-openclaw/electron`
> **版本**: 0.1.9
> **Bundle ID**: `com.tencent.qclaw`
> **技术栈**: Electron 37.10.3 + Vue 3 + Vite + Ant Design Vue
> **定位**: 7x24小时全能电脑 AI 助手，微信直连
> **逆向方法**: 静态分析 (渲染器 JS bundle) + 动态运行时 Hook (主进程字节码)

---

## 1. 项目总览

QClaw 是腾讯出品的桌面 AI 助手应用，基于 Electron 构建，核心功能包括：
- **微信扫码登录** + IOA 企业认证
- **AI 对话助手** (Chat 页面)
- **像素办公室** (Office 虚拟空间)
- **OpenClaw 后端进程管理** (支持 shared/isolated 两种模式)
- **自动更新** + 安全沙箱

---

## 2. 应用架构

```
┌──────────────────────────────────────────────────────────┐
│                   QClaw Electron App                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  ┌─────────────┐    IPC Bridge     ┌─────────────────┐  │
│  │  Main Process│◄═══════════════►│  Renderer Process │  │
│  │  (index.cjsc)│   electronAPI    │  (Vue 3 App)     │  │
│  └──────┬───────┘                  └────────┬─────────┘  │
│         │                                    │           │
│  ┌──────▼───────┐               ┌────────────▼────────┐ │
│  │  Preload     │               │   Vite Bundle        │ │
│  │  (index.cjsc)│               │   - e-Kf-uhv6n.js   │ │
│  │  contextBridge│              │   - c-Gmkq65k9.js   │ │
│  └──────────────┘               │   - c-DX3Ewe2z.js   │ │
│                                  │   - 7 more chunks   │ │
│                                  └─────────────────────┘ │
│                                                          │
│  ┌──────────────────────────────────────────────────────┐│
│  │  OpenClaw Backend Process (local service on :18789)  ││
│  │  - AI/LLM inference engine                          ││
│  │  - Supports shared or isolated mode                 ││
│  └──────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────┘
```

### 2.1 进程架构

| 进程 | 文件 | 状态 | 大小 |
|------|------|------|------|
| Main Process | `out/main/index.cjsc` | V8 字节码 (bytenode) | 1.76 MB |
| Preload Script | `out/preload/index.cjsc` | V8 字节码 (bytenode) | 34 KB |
| Renderer | `out/renderer/` | 明文 JS (Vite bundle) | ~7.1 MB |
| OpenClaw Backend | 外部进程 | 独立 Node 服务 | - |

### 2.2 字节码保护

主进程和 preload 脚本使用 **bytenode** 编译为 V8 字节码 (`.cjsc`)：
- `bytecode-loader.cjs` 注册 `.cjsc` 扩展处理器
- 使用 `vm.Script` + `cachedData` 加载字节码
- `dummyCode` 为 zero-width space 占位符 (`\u200b`)
- `Function.prototype.toString()` 返回占位符，非真实源码
- 需要匹配的 V8 版本 (Electron 37.10.3) 才能加载

---

## 3. 路由结构

```javascript
const routes = [
  { path: "/",              redirect: "/init-loading" },
  { path: "/wx-login",      name: "WXLogin",      title: "微信登录 - QClaw" },
  { path: "/init-loading",  name: "InitLoading",  title: "初始化中 - QClaw" },
  { path: "/chat",          name: "Chat",          title: "AI 助手 - QClaw" },
  { path: "/office",        name: "Office",        title: "像素办公室 - QClaw" },
];
```

---

## 4. IPC 通信接口 (运行时 Hook 全量捕获)

> 以下数据通过运行时 Hook 脚本 (`runtime_hook_v2.js`) 动态捕获，
> 共计 **79 个 `ipcMain.handle`** + **1 个 `ipcMain.on`** 通道。

### 4.0 完整 IPC 通道总表

| # | 通道名 | 类型 | 模块 | 说明 |
|---|--------|------|------|------|
| 1 | `__ELECTRON_LOG__` | handle + on | 日志 | electron-log 日志桥接 |
| 2 | `window:minimize` | handle | 窗口 | 最小化窗口 |
| 3 | `window:maximize` | handle | 窗口 | 最大化/还原窗口 |
| 4 | `window:close` | handle | 窗口 | 关闭窗口 |
| 5 | `window:isMaximized` | handle | 窗口 | 查询最大化状态 |
| 6 | `window:setSize` | handle | 窗口 | 设置窗口大小 |
| 7 | `window:getSize` | handle | 窗口 | 获取窗口大小 |
| 8 | `process:start` | handle | 进程 | 启动 OpenClaw 进程 |
| 9 | `process:stop` | handle | 进程 | 停止 OpenClaw 进程 |
| 10 | `process:restart` | handle | 进程 | 重启 OpenClaw 进程 |
| 11 | `process:getStatus` | handle | 进程 | 获取进程状态 |
| 12 | `process:getLogs` | handle | 进程 | 获取进程日志 |
| 13 | `process:openControlUI` | handle | 进程 | 打开控制面板 UI |
| 14 | `process:setPowerSaveBlockerEnabled` | handle | 进程 | 设置电源节能阻止 |
| 15 | `process:getPowerSaveBlockerEnabled` | handle | 进程 | 获取电源节能阻止状态 |
| 16 | `config:getField` | handle | 配置 | 读取配置字段 |
| 17 | `config:updateField` | handle | 配置 | 更新配置字段 |
| 18 | `app:get-machine-id` | handle | 应用 | 获取机器唯一标识 |
| 19 | `app:get-openclaw-version` | handle | 应用 | 获取 OpenClaw 版本号 |
| 20 | `app:check-openclaw-compatibility` | handle | 应用 | 检查 OpenClaw 兼容性 |
| 21 | `app:get-version` | handle | 应用 | 获取 QClaw 版本号 |
| 22 | `app:get-channel` | handle | 应用 | 获取更新渠道 |
| 23 | `app:openPath` | handle | 应用 | 用系统默认程序打开路径 |
| 24 | `app:quit` | handle | 应用 | 退出应用 |
| 25 | `app:openFolderDialog` | handle | 应用 | 打开文件夹选择对话框 |
| 26 | `app:openAISandbox` | handle | 应用 | 打开 AI 沙箱环境 |
| 27 | `app:downloadFile` | handle | 应用 | 下载文件 |
| 28 | `app:downloadSkill` | handle | 技能 | 下载技能包 |
| 29 | `app:checkSkillsInstalled` | handle | 技能 | 检查技能是否已安装 |
| 30 | `app:enableSkills` | handle | 技能 | 启用技能 |
| 31 | `app:getSkillsInfo` | handle | 技能 | 获取已安装技能信息 |
| 32 | `app:removeUserSkill` | handle | 技能 | 移除用户自定义技能 |
| 33 | `instance:getBootState` | handle | 实例 | 获取启动状态 |
| 34 | `instance:setMode` | handle | 实例 | 设置运行模式 (shared/isolated) |
| 35 | `instance:getMode` | handle | 实例 | 获取当前运行模式 |
| 36 | `instance:retryBoot` | handle | 实例 | 重试启动 |
| 37 | `rum:report` | handle | 监控 | RUM 性能上报 |
| 38 | `perf:setRunningState` | handle | 性能 | 设置性能采集运行状态 |
| 39 | `session:trimLastExchange` | handle | 会话 | 修剪最后一轮对话 |
| 40 | `session:appendFakeMessages` | handle | 会话 | 追加模拟消息 |
| 41 | `session:getFakeMessages` | handle | 会话 | 获取模拟消息 |
| 42 | `session:clearFakeMessages` | handle | 会话 | 清除模拟消息 |
| 43 | `session:mergeFakeMessages` | handle | 会话 | 合并模拟消息 |
| 44 | `session:deleteSecurityBlockedExchanges` | handle | 会话 | 删除安全拦截的对话 |
| 45 | `session:search` | handle | 会话 | 搜索会话历史 |
| 46 | `security:verifyInviteCode` | handle | 安全 | 验证邀请码 |
| 47 | `security:isInviteVerified` | handle | 安全 | 检查邀请码是否已验证 |
| 48 | `security:clearInviteStatus` | handle | 安全 | 清除邀请状态 |
| 49 | `safeStorage:encrypt` | handle | 存储 | 加密数据 |
| 50 | `safeStorage:decrypt` | handle | 存储 | 解密数据 |
| 51 | `safeStorage:isAvailable` | handle | 存储 | 检查安全存储可用性 |
| 52 | `safeStorage:setJwtToken` | handle | 存储 | 存储 JWT Token |
| 53 | `safeStorage:getJwtToken` | handle | 存储 | 读取 JWT Token |
| 54 | `safeStorage:clearJwtToken` | handle | 存储 | 清除 JWT Token |
| 55 | `safeStorage:setUserInfo` | handle | 存储 | 存储用户信息 |
| 56 | `safeStorage:getUserInfo` | handle | 存储 | 读取用户信息 |
| 57 | `safeStorage:clearUserInfo` | handle | 存储 | 清除用户信息 |
| 58 | `debug:openLogFolder` | handle | 调试 | 打开日志文件夹 |
| 59 | `debug:packQclaw` | handle | 调试 | 打包 QClaw 诊断信息 |
| 60 | `qclaw:readConfig` | handle | QClaw | 读取 QClaw 配置 |
| 61 | `qclaw:readMeta` | handle | QClaw | 读取 QClaw 元数据 |
| 62 | `qclaw:readAgentList` | handle | Agent | 读取 Agent 列表 |
| 63 | `qclaw:readAgentProfile` | handle | Agent | 读取 Agent 详情 |
| 64 | `qclaw:readAgentMemory` | handle | Agent | 读取 Agent 记忆 |
| 65 | `qclaw:readAgentModels` | handle | Agent | 读取 Agent 模型配置 |
| 66 | `qclaw:readAgentSessions` | handle | Agent | 读取 Agent 会话列表 |
| 67 | `qclaw:readSessionFile` | handle | Agent | 读取会话文件 |
| 68 | `qclaw:readSkillList` | handle | 技能 | 读取技能列表 |
| 69 | `qclaw:readSkillDetail` | handle | 技能 | 读取技能详情 |
| 70 | `qclaw:readCronJobs` | handle | 定时 | 读取定时任务列表 |
| 71 | `qclaw:readCronRunHistory` | handle | 定时 | 读取定时任务执行历史 |
| 72 | `qclaw:writeAgentProfileFile` | handle | Agent | 写入 Agent 配置文件 |
| 73 | `qclaw:writeAgentMemoryFile` | handle | Agent | 写入 Agent 记忆文件 |
| 74 | `galileo:syncSessionId` | handle | 分析 | 同步 Galileo 会话 ID |
| 75 | `galileo:syncCommonParams` | handle | 分析 | 同步 Galileo 公共参数 |
| 76 | `updater:check` | handle | 更新 | 检查更新 |
| 77 | `updater:download` | handle | 更新 | 下载更新 |
| 78 | `updater:quit-and-install` | handle | 更新 | 退出并安装更新 |
| 79 | `updater:get-downloaded-info` | handle | 更新 | 获取已下载更新信息 |

### 4.1 `electronAPI.window` - 窗口控制 (7 通道)
```typescript
interface WindowAPI {
  minimize(): Promise<void>;        // window:minimize
  maximize(): Promise<void>;        // window:maximize
  close(): Promise<void>;           // window:close
  isMaximized(): Promise<boolean>;  // window:isMaximized
  setSize(w: number, h: number): Promise<void>;  // window:setSize
  getSize(): Promise<[number, number]>;           // window:getSize
  onMaximizeChange(cb: (isMax: boolean) => void): () => void; // webContents.send
}
```

### 4.2 `electronAPI.process` - OpenClaw 进程管理 (8 通道)
```typescript
interface ProcessAPI {
  start(): Promise<void>;                          // process:start
  stop(): Promise<void>;                           // process:stop
  restart(): Promise<void>;                        // process:restart
  getStatus(): Promise<ProcessStatus>;             // process:getStatus
  getLogs(): Promise<LogEntry[]>;                   // process:getLogs
  openControlUI(): Promise<void>;                  // process:openControlUI
  setPowerSaveBlockerEnabled(v: boolean): Promise<void>;  // process:setPowerSaveBlockerEnabled
  getPowerSaveBlockerEnabled(): Promise<boolean>;  // process:getPowerSaveBlockerEnabled
  // 以下为 webContents.send 推送事件:
  onStatusChange(cb): () => void;
  onLog(cb): () => void;
  onSpawned(cb): () => void;
  onHealthProgress(cb): () => void;
  onPowerSaveBlockerChange(cb): () => void;
}
```

### 4.3 `electronAPI.instance` - 实例管理 (4 通道)
```typescript
interface InstanceAPI {
  getBootState(): Promise<BootState>;   // instance:getBootState
  setMode(mode: 'shared' | 'isolated'): Promise<void>;  // instance:setMode
  getMode(): Promise<string>;           // instance:getMode
  retryBoot(): Promise<BootState>;      // instance:retryBoot
  onBootState(cb): () => void;          // webContents.send
  onModeChange(cb): () => void;         // webContents.send
}
```

### 4.4 `electronAPI.config` - 配置管理 (2 通道)
```typescript
interface ConfigAPI {
  getField(key: string): Promise<any>;              // config:getField
  updateField(fields: object): Promise<void>;       // config:updateField
}
```

### 4.5 `electronAPI.app` - 应用管理 (11 通道)
```typescript
interface AppAPI {
  getMachineId(): Promise<string>;           // app:get-machine-id
  getVersion(): Promise<string>;             // app:get-version
  getChannel(): Promise<string>;             // app:get-channel
  getOpenClawVersion(): Promise<string>;     // app:get-openclaw-version
  checkOpenClawCompatibility(): Promise<any>; // app:check-openclaw-compatibility
  openPath(path: string): Promise<void>;     // app:openPath
  quitApp(): Promise<void>;                  // app:quit
  openFolderDialog(): Promise<string>;       // app:openFolderDialog
  openAISandbox(): Promise<void>;            // app:openAISandbox
  downloadFile(url, filename): Promise<string>;  // app:downloadFile
  downloadSkill(url): Promise<void>;         // app:downloadSkill
  checkSkillsInstalled(): Promise<boolean>;  // app:checkSkillsInstalled
  enableSkills(): Promise<void>;             // app:enableSkills
  getSkillsInfo(): Promise<SkillInfo[]>;     // app:getSkillsInfo
  removeUserSkill(id): Promise<void>;        // app:removeUserSkill
  onDownloadProgress(cb): () => void;        // webContents.send
}
```

### 4.6 `electronAPI.session` - 会话管理 (7 通道)
```typescript
interface SessionAPI {
  trimLastExchange(sessionId: string): Promise<void>;       // session:trimLastExchange
  search(query: string): Promise<SearchResult[]>;           // session:search
  appendFakeMessages(msgs: Message[]): Promise<void>;       // session:appendFakeMessages
  getFakeMessages(): Promise<Message[]>;                    // session:getFakeMessages
  clearFakeMessages(): Promise<void>;                       // session:clearFakeMessages
  mergeFakeMessages(): Promise<void>;                       // session:mergeFakeMessages
  deleteSecurityBlockedExchanges(): Promise<void>;          // session:deleteSecurityBlockedExchanges
}
```

### 4.7 `electronAPI.security` - 安全验证 (3 通道)
```typescript
interface SecurityAPI {
  verifyInviteCode(code: string): Promise<void>;   // security:verifyInviteCode
  isInviteVerified(): Promise<boolean>;            // security:isInviteVerified
  clearInviteStatus(): Promise<void>;              // security:clearInviteStatus
}
```

### 4.8 `electronAPI.safeStorage` - 安全存储 (9 通道)
```typescript
interface SafeStorageAPI {
  encrypt(data: string): Promise<string>;      // safeStorage:encrypt
  decrypt(data: string): Promise<string>;      // safeStorage:decrypt
  isAvailable(): Promise<boolean>;             // safeStorage:isAvailable
  setJwtToken(token: string): Promise<void>;   // safeStorage:setJwtToken
  getJwtToken(): Promise<string>;              // safeStorage:getJwtToken
  clearJwtToken(): Promise<void>;              // safeStorage:clearJwtToken
  setUserInfo(info: object): Promise<void>;    // safeStorage:setUserInfo
  getUserInfo(): Promise<object>;              // safeStorage:getUserInfo
  clearUserInfo(): Promise<void>;              // safeStorage:clearUserInfo
}
```

### 4.9 `electronAPI.qclaw` - QClaw 核心数据 (14 通道)
```typescript
interface QClawAPI {
  // 配置
  readQClawConfig(): Promise<QClawConfig>;       // qclaw:readConfig
  readQClawMeta(): Promise<QClawMeta>;           // qclaw:readMeta
  // Agent 管理
  readAgentList(): Promise<Agent[]>;             // qclaw:readAgentList
  readAgentProfile(id: string): Promise<AgentProfile>;    // qclaw:readAgentProfile
  readAgentMemory(id: string): Promise<AgentMemory>;      // qclaw:readAgentMemory
  readAgentModels(id: string): Promise<AgentModels>;      // qclaw:readAgentModels
  readAgentSessions(id: string): Promise<AgentSession[]>; // qclaw:readAgentSessions
  readSessionFile(path: string): Promise<SessionData>;    // qclaw:readSessionFile
  writeAgentProfileFile(id, data): Promise<void>;         // qclaw:writeAgentProfileFile
  writeAgentMemoryFile(id, data): Promise<void>;          // qclaw:writeAgentMemoryFile
  // 技能管理
  readSkillList(): Promise<Skill[]>;             // qclaw:readSkillList
  readSkillDetail(id: string): Promise<SkillDetail>;  // qclaw:readSkillDetail
  // 定时任务
  readCronJobs(): Promise<CronJob[]>;            // qclaw:readCronJobs
  readCronRunHistory(id: string): Promise<CronRun[]>; // qclaw:readCronRunHistory
}
```

### 4.10 `electronAPI.updater` - 自动更新 (4 通道)
```typescript
interface UpdaterAPI {
  checkForUpdates(): Promise<UpdateInfo>;         // updater:check
  downloadUpdate(): Promise<void>;               // updater:download
  quitAndInstall(): Promise<void>;               // updater:quit-and-install
  getDownloadedInfo(): Promise<DownloadedInfo>;   // updater:get-downloaded-info
  // 以下为 webContents.send 推送事件:
  onUpdateAvailable(cb): () => void;
  onUpdateNotAvailable(cb): () => void;
  onDownloadProgress(cb): () => void;
  onUpdateDownloaded(cb): () => void;
  onError(cb): () => void;
}
```

### 4.11 `electronAPI.galileo` - 数据分析 (2 通道)
```typescript
interface GalileoAPI {
  syncSessionId(id: string): void;               // galileo:syncSessionId
  syncCommonParams(params: object): void;         // galileo:syncCommonParams
}
```

### 4.12 `electronAPI.debug` - 调试工具 (2 通道)
```typescript
interface DebugAPI {
  openLogFolder(): Promise<void>;                // debug:openLogFolder
  packQclaw(): Promise<string>;                  // debug:packQclaw
  onTogglePanel(cb): () => void;                 // webContents.send
}
```

### 4.13 其他命名空间
```typescript
electronAPI.logger.info(msg)     // electron-log 桥接
electronAPI.logger.warn(msg)
electronAPI.logger.error(msg)
electronAPI.reporter.report(event)  // rum:report
electronAPI.perf.setRunningState(state)  // perf:setRunningState
electronAPI.platform  // 'darwin' | 'win32' | 'linux'
electronAPI.arch      // 'arm64' | 'x64'
```

---

## 5. API 服务层

### 5.1 网关配置

- **JPRX Gateway**: 主要 API 网关
- **JPRX Internal Gateway**: 内部 API 网关
- 所有请求都通过 `data/{commandId}/forward` 路由转发
- 请求头包含: `X-Version`, `X-Token`, `X-Guid`, `X-Account`, `X-Session`, `X-OpenClaw-Token`
- 客户端版本: `web_version: "1.4.0"`, `web_env: "release"`

### 5.2 API 端点映射

| API 方法 | 命令ID | 说明 |
|----------|--------|------|
| `generateContactLink` | 4018 | 生成联系链接 |
| `queryDeviceByGuid` | 4019 | 按 GUID 查询设备 |
| `disconnectDevice` | 4020 | 断开设备连接 |
| `wxLogin` | 4026 | 微信登录 |
| `getUserInfo` | 4027 | 获取用户信息 |
| `wxLogout` | 4028 | 微信登出 |
| `getWxLoginState` | 4050 | 获取微信登录状态 |
| `createApiKey` | 4055 | 创建 API Key |
| `checkInviteCode` | 4056 | 检查邀请码 |
| `submitInviteCode` | 4057 | 提交邀请码 |
| `refreshChannelToken` | 4058 | 刷新渠道 Token |
| `checkUpdate` | 4066 | 检查更新 |
| `getTodayRemainingTokens` | 4075 | 今日剩余 Token 额度 |
| `getInspirationList` | (待分析) | 灵感列表 |
| `createIOAState` | (待分析) | IOA 登录状态创建 |
| `checkIOAState` | (待分析) | IOA 登录状态检查 |

### 5.3 Token 刷新机制
- 响应头 `X-New-Token` 自动刷新 JWT Token
- 错误码 `21004` 表示会话过期，自动清除所有认证数据并触发 `openclaw:session-expired` 事件

---

## 6. 核心业务流程

### 6.1 登录流程

```
用户打开应用
    ↓
/init-loading (InitLoading 组件)
    ↓
检查已有 JWT Token → 有效 → /chat
    ↓ (无效)
/wx-login (WXLoginView 组件)
    ↓
加载微信登录 SDK (wxLogin.js)
    ↓
用户扫码 → sendCode 消息
    ↓
wxLogin API (4026) → 获取 token + user_info
    ↓
检查邀请码 (4056) → 已验证 → 保存认证数据
    ↓                    ↓ (未验证)
    ↓              显示邀请码输入界面
    ↓
保存到 safeStorage + localStorage
    ↓
/init-loading → 启动 OpenClaw → /chat
```

### 6.2 IOA 企业认证流程
- 支持 `reqType=1` (登录) 和 `reqType=2` (绑定)
- 轮询间隔 3 秒，超时 5 分钟
- 状态: `pending` → `done` / `expired`

### 6.3 OpenClaw 启动流程

```
InitLoading 组件加载
    ↓
检测系统中是否已安装独立 OpenClaw
    ↓
┌── 检测到 → 弹出 LinkOpenClawModal
│   ├── "关联" → shared 模式 (复用外部实例)
│   └── "独立运行" → isolated 模式 (启动内置实例)
└── 未检测到 → 自动 isolated 模式
    ↓
启动进程 → 健康检查 (轮询状态)
    ↓
status === 'running' → 跳转到 /chat
```

### 6.4 安全存储机制

```javascript
// 存储键前缀: "secure_"
// 加密流程:
//   1. 检查 electronAPI.safeStorage.isAvailable()
//   2. 可用 → encrypt(value) → localStorage.setItem("secure_" + key)
//   3. 不可用 → 明文存储
//
// 存储的敏感数据:
//   - jwt_token
//   - openclaw_channel_token
//   - userInfo (JSON: nickname, avatar, userId, guid)
//   - loginKey
//   - wx_login_code
```

---

## 7. 事件追踪系统

### 7.1 Beacon 事件上报
```javascript
const EventTypes = {
  CLICK_NEW: "click_new",       // 点击事件
  EXPO: "expo",                 // 曝光事件
  SUBMIT: "submit",             // 提交事件
  RESOURCE_MONITOR: "resource_monitor",
  CRASH_EVENT: "crash_event",
  INTERACTION_EVENT: "interaction_event",
  JANK_EVENT: "jank_event",     // 卡顿检测
};
```

### 7.2 Galileo 上报
- 与 `window.electronAPI.galileo` 集成
- 同步 sessionId + commonParams (user_id, is_login, guid, 等)

### 7.3 性能监控 (Jank Detection)
- 使用 `requestAnimationFrame` + `PerformanceObserver`(longtask)
- 阈值: ≥50ms 记录, ≥200ms moderate, ≥500ms severe
- 每 30 秒聚合上报

### 7.4 全局错误捕获
- `Vue.config.errorHandler` → `renderer_vue_error`
- `window.onerror` → `renderer_js_error`
- `window.onunhandledrejection` → `renderer_unhandled_rejection`

---

## 7.5 BrowserWindow 配置 (运行时捕获)

```json
{
  "width": 1200,
  "height": 800,
  "minWidth": 800,
  "minHeight": 600,
  "show": false,
  "autoHideMenuBar": true,
  "titleBarStyle": "hiddenInset",
  "trafficLightPosition": { "x": 12, "y": 16 },
  "backgroundColor": "#ffffff",
  "webPreferences": {
    "preload": "out/preload/index.cjs",
    "sandbox": false,
    "contextIsolation": true,
    "nodeIntegration": false,
    "webviewTag": true,
    "devTools": false
  }
}
```

**关键安全配置:**
- `contextIsolation: true` — 启用上下文隔离
- `nodeIntegration: false` — 禁止渲染器直接访问 Node.js
- `sandbox: false` — 未启用沙箱 (安全隐患)
- `webviewTag: true` — 支持 `<webview>` 标签 (用于 AI 沙箱等)
- `devTools: false` — 生产环境禁用开发者工具

## 7.6 App 生命周期事件 (运行时捕获)

| 事件 | 注册次数 | 说明 |
|------|----------|------|
| `second-instance` | 1 | 处理第二实例 (单例模式) |
| `window-all-closed` | 1 | 所有窗口关闭时处理 |
| `before-quit` | 1 | 退出前清理 (含大量清理逻辑) |
| `child-process-gone` | 1 | 子进程异常退出处理 |
| `browser-window-created` | 3 | 窗口创建时钩子 (注册了3个) |
| `activate` | 1 | macOS dock 点击重新激活 |

## 7.7 主进程依赖模块 (运行时捕获)

通过 `require()` 拦截捕获到以下 **29 个模块**:

| 分类 | 模块 |
|------|------|
| **Node 核心** | `path`, `fs`, `fs/promises`, `os`, `util`, `events`, `crypto`, `net`, `http`, `https`, `zlib`, `stream`, `assert`, `tty`, `url`, `constants`, `child_process`, `worker_threads` |
| **Node 前缀** | `node:crypto`, `node:os`, `node:child_process`, `node:fs`, `node:path`, `node:util`, `node:http`, `node:https` |
| **第三方** | `node-machine-id`, `@tencent/smh-js-sdk` |

---

## 8. 第三方依赖

### 8.1 主进程依赖 (package.json)
| 包名 | 版本 | 用途 |
|------|------|------|
| `@electron-toolkit/utils` | ^3.0.0 | Electron 工具库 |
| `@guanjia-openclaw/report` | workspace:* | 内部上报模块 |
| `@tencent/smh-js-sdk` | ^1.0.4 | 腾讯 SMH SDK |
| `adm-zip` | ^0.5.16 | ZIP 处理 |
| `electron-log` | ^5.4.3 | 日志 |
| `electron-updater` | ^6.6.2 | 自动更新 |
| `json5` | ^2.2.3 | JSON5 解析 |
| `node-machine-id` | ^1.1.12 | 机器唯一标识 |
| `tar` | ^7.5.9 | TAR 处理 |

### 8.2 渲染器依赖 (从 bundle 分析)
| 库 | 用途 |
|-----|------|
| Vue 3 | UI 框架 |
| Vue Router | 路由管理 |
| Ant Design Vue | UI 组件库 |
| Zod v4 | 数据验证 |
| axios / fetch | HTTP 请求 |
| 微信登录 SDK | `wxLogin.js` |

---

## 9. 渲染器文件清单

| 文件 | 大小 | 内容 |
|------|------|------|
| `e-Kf-uhv6n.js` | 663 KB | **入口文件**: App 组件, 路由, API 服务层, 认证, 存储, 事件追踪 |
| `c-Gmkq65k9.js` | 5.58 MB | **核心模块**: Chat/Office 页面主要逻辑 |
| `c-DX3Ewe2z.js` | 707 KB | **Chat 页面**: AI 对话界面 |
| `c-B57oo86K.js` | 105 KB | **Vue 运行时**: Vue 3 核心库 |
| `c-r9gNuqcd.js` | 50 KB | **Ant Design**: Modal/Button 等组件 |
| `c-DRQrsXw0.js` | 38 KB | **Ant Design**: 更多组件 |
| `c-DikSrXhV.js` | 29 KB | **工具模块**: 邀请码、查询参数等 |
| `c-BYFbIAm8.js` | 13 KB | **辅助模块** |
| `c-BQfygBuG.js` | 11 KB | **InitLoading 页面**: 启动/链接 OpenClaw |
| `c-DOO5YwRQ.js` | 7.9 KB | **WXLogin 页面**: 微信扫码登录 |
| `c-Be3tAusk.js` | 7.6 KB | **ProcessDashboard**: OpenClaw 进程仪表板 |
| `c-iqhvNIZd.js` | 599 B | **网络区域**: fetchNetworkArea |

### CSS 文件
- `a-CNjlFs2C.css` (125 KB) - 主样式
- `a-ChxxDMYc.css` (53 KB) - Chat 页面样式
- `a-DwpcwrzL.css` (9 KB) - Dashboard 样式
- 其他 4 个 CSS 文件

### 媒体资源
- 6 个 MP4 视频 (引导动画)
- 多个 SVG/PNG 图标
- 1 个 WOFF2 字体 (744 KB)

---

## 10. 关键发现

### 10.1 安全相关
- 主进程字节码使用 bytenode 保护，但渲染器代码完全明文
- JWT Token 可通过 `safeStorage` 加密存储，也可能明文存储
- 邀请码验证可在客户端被绕过 (`security:isInviteVerified` / `security:clearInviteStatus`)
- 所有 API 通过 JPRX 网关转发，命令 ID 模式易于逆向
- `sandbox: false` + `webviewTag: true` → 潜在安全隐患
- `devTools: false` 仅在配置层面禁用，可被运行时修改

### 10.2 架构特点
- OpenClaw 支持两种运行模式 (shared/isolated)
- 使用 circuit breaker 模式管理后端进程
- 完善的错误上报和性能监控体系 (Beacon + Galileo + RUM + Jank)
- 使用 Galileo 分析平台进行用户行为追踪
- **Agent 系统**: 支持多 Agent 管理、记忆持久化、会话文件读写
- **技能系统**: 支持技能下载/安装/启用/移除，类似插件架构
- **定时任务**: 支持 CronJob 调度和执行历史查看
- **会话管理**: 支持 FakeMessages (模拟消息)、安全拦截对话删除、历史搜索
- **AI 沙箱**: `app:openAISandbox` 打开独立 AI 执行环境

### 10.3 微信集成
- 微信 SDK: `https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js`
- 使用 `snsapi_login` scope 进行微信登录
- 通过 `postMessage` 接收扫码回调
- 隐私协议: `privacy.qq.com/document/preview/4a7ba3f82ff042c1aafbec6e7341d713`
- 用户协议: `rule.tencent.com/rule/202603060002`

### 10.4 运行时逆向结果
- 使用 Electron 37.10.3 匹配 V8 版本成功加载字节码
- `Function.prototype.toString()` 返回 zero-width space 占位符，无法获取真实源码
- 通过 Mock Electron API + `app.ready` 触发，成功执行主进程初始化序列
- 完整捕获 79 个 IPC handler + 8 个 App Event + BrowserWindow 配置
- 确认 `electron-log` (`__electronLog`) 为全局依赖，需要在启动时注入

---

## 11. 文件结构 (提取后)

```
/Users/chenshangwei/qlaw_src/
├── Contents/                    # macOS app bundle
│   ├── Info.plist
│   ├── MacOS/QClaw             # Electron 主二进制
│   ├── Frameworks/             # Electron Framework
│   └── Resources/
│       └── app.asar            # 应用包 (已解压到 /tmp/qclaw_extracted/)
│
└── reversed/                   # 逆向提取结果
    ├── ARCHITECTURE.md         # 本文档
    ├── main/                   # (字节码，需匹配 V8 版本反编译)
    ├── preload/                # (字节码，需匹配 V8 版本反编译)
    └── renderer/               # 渲染器代码 (已提取)
        ├── assets/             # JS, CSS, 图片, 视频
        ├── css/
        └── media/

/tmp/qclaw_extracted/           # app.asar 解压目录
├── package.json
├── out/
│   ├── main/
│   │   ├── index.cjs           # 入口 (require bytecode-loader + index.cjsc)
│   │   ├── bytecode-loader.cjs # V8 字节码加载器
│   │   └── index.cjsc          # 主进程字节码 (1.76 MB)
│   ├── preload/
│   │   ├── index.cjs
│   │   ├── bytecode-loader.cjs
│   │   └── index.cjsc          # Preload 字节码 (34 KB)
│   └── renderer/
│       ├── index.html          # 渲染器入口
│       └── assets/             # 所有 JS/CSS/媒体文件
└── node_modules/               # 运行时依赖
```
