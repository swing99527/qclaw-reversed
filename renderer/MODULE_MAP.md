# QClaw 渲染器模块映射

> 来源: `out/renderer/assets/` (12 个 JS 文件, Vite 打包)

## 文件总览

| 文件 | 原始大小 | 格式化行数 | 功能 |
|------|---------|-----------|------|
| `e-Kf-uhv6n.js` | 663KB | 23,583 | **入口文件** - App 根组件、路由、Zod 验证库、数据上报 |
| `c-Gmkq65k9.js` | 5.58MB | 150,934 | **核心 chunk** - Ant Design Vue 组件库 + 像素办公室 |
| `c-DX3Ewe2z.js` | 707KB | 34,737 | **Chat 页面** - AI 对话界面、消息列表、输入框 |
| `c-B57oo86K.js` | 105KB | 5,922 | **Vue 核心** - Vue 3 runtime + reactivity |
| `c-r9gNuqcd.js` | 50KB | 3,065 | **共享模块** - 通用工具函数、API 调用封装 |
| `c-DRQrsXw0.js` | 38KB | 2,099 | **UI 组件库** - 自定义 UI 组件 |
| `c-DikSrXhV.js` | 29KB | 1,144 | **Markdown 渲染** - Markdown 解析与代码高亮 |
| `c-BYFbIAm8.js` | 13KB | 831 | **动画/过渡** - CSS 动画工具 |
| `c-BQfygBuG.js` | 11KB | 429 | **初始化页面** - InitLoading 启动加载组件 |
| `c-DOO5YwRQ.js` | 7.9KB | 363 | **微信登录** - WXLogin 扫码登录页面 |
| `c-Be3tAusk.js` | 7.6KB | 405 | **调试面板** - Debug Panel 组件 |
| `c-iqhvNIZd.js` | 599B | 45 | **小型工具** - 辅助函数 |

## 路由结构

```
/ → redirect → /init-loading
├── /init-loading   → InitLoading (初始化加载)     [c-BQfygBuG.js]
├── /wx-login       → WXLogin (微信扫码登录)        [c-DOO5YwRQ.js]  
├── /chat           → Chat (AI 助手对话)            [c-DX3Ewe2z.js]
└── /office         → Office (像素办公室)           [c-Gmkq65k9.js → export n]
```

## 依赖关系图

```
e-Kf-uhv6n.js (入口)
├── c-B57oo86K.js (Vue 核心)
├── c-Be3tAusk.js (调试面板)
│   └── c-B57oo86K.js
├── c-DOO5YwRQ.js (微信登录)
│   ├── c-B57oo86K.js
│   ├── c-r9gNuqcd.js (共享模块)
│   ├── c-BYFbIAm8.js (动画)
│   ├── c-DikSrXhV.js (Markdown)
│   └── c-DRQrsXw0.js (UI 组件)
├── c-DX3Ewe2z.js (Chat 页面)
│   ├── c-B57oo86K.js
│   ├── c-r9gNuqcd.js
│   ├── c-BYFbIAm8.js
│   ├── c-Gmkq65k9.js (Ant Design)
│   ├── c-DRQrsXw0.js
│   ├── c-DikSrXhV.js
│   └── c-iqhvNIZd.js
├── c-BQfygBuG.js (InitLoading)
│   ├── c-r9gNuqcd.js
│   ├── c-BYFbIAm8.js
│   ├── c-B57oo86K.js
│   └── c-iqhvNIZd.js
└── c-Gmkq65k9.js (核心 chunk / Office 页面)
    ├── c-B57oo86K.js
    ├── c-BYFbIAm8.js
    ├── c-DRQrsXw0.js
    └── c-Gmkq65k9.js (自身导出 .n)
```

## CSS 文件

| 文件 | 对应 JS |
|------|---------|
| `a-DwpcwrzL.css` | c-Be3tAusk.js (调试面板) |
| `a-BES5z7EC.css` | c-DRQrsXw0.js (UI 组件) |
| `a-D7DqtxvX.css` | c-DRQrsXw0.js |
| `a-ChxxDMYc.css` | c-Gmkq65k9.js (Ant Design) |
| `a-CNjlFs2C.css` | c-iqhvNIZd.js |
| `a-D8wUcZ0p.css` | c-BQfygBuG.js (InitLoading) |

## 入口文件关键结构 (e-Kf-uhv6n.js)

### App 根组件 (行 188-234)
```javascript
// App.vue 编译结果
const App = defineComponent({
  __name: 'App',
  setup() {
    // 1. 异步加载调试面板 (c-Be3tAusk.js)
    // 2. 监听 electronAPI.debug.onTogglePanel()
    // 3. 防止拖拽事件
    // 4. 渲染 <router-view> + 可选调试面板
  },
});
```

### 路由定义 (行 267-303)
```javascript
const routes = [
  { path: '/', redirect: '/init-loading' },
  { path: '/wx-login', name: 'WXLogin', meta: { title: '微信登录 - QClaw' } },
  { path: '/init-loading', name: 'InitLoading', meta: { title: '初始化中 - QClaw' } },
  { path: '/chat', name: 'Chat', meta: { title: 'AI 助手 - QClaw' } },
  { path: '/office', name: 'Office', meta: { title: '像素办公室 - QClaw' } },
];
```

### 数据上报 ClientAction (行 318-391)
```javascript
class ClientAction {
  constructor({ baseUrl, appkey, guid }) {
    this.baseUrl = baseUrl;
    this.appkey = appkey || 'PC_Qclaw';
  }
  reportDirect(eventCode, params, extra) { /* POST 上报 */ }
  reportAsync(eventCode, params, extra) { /* async 上报 */ }
  reportConservation(eventCode, params) { /* sendBeacon 上报 */ }
}
```

### 事件类型常量 (行 309-317)
```javascript
const EventTypes = {
  CLICK_NEW: 'click_new',
  EXPO: 'expo',
  SUBMIT: 'submit',
  RESOURCE_MONITOR: 'resource_monitor',
  CRASH_EVENT: 'crash_event',
  INTERACTION_EVENT: 'interaction_event',
  JANK_EVENT: 'jank_event',
};
```

### 第三方库
- **Zod** (行 497-~15000): 数据验证库，用于 API 响应数据校验
- **Pinia**: Vue 状态管理
- **Vue Router**: 路由管理

## Chat 页面核心功能 (c-DX3Ewe2z.js, 34K行)

主要包含:
- AI 对话消息列表渲染
- 消息输入框 (支持 Markdown)
- SSE 流式响应处理
- Agent 选择和切换
- 会话管理 (创建/删除/搜索)
- 技能面板展示
- 文件上传处理
- 安全内容过滤

## 像素办公室页面 (c-Gmkq65k9.js, 150K行)

这是最大的文件，主要内容:
- **Ant Design Vue** 完整组件库 (占大部分体积)
  - Button, Input, Select, Modal, Drawer, Table, Form...
  - Popover, Tooltip, Dropdown, Menu
  - Icon 组件
- **Office 页面** (像素风格虚拟办公室)
  - Pixi.js / Canvas 渲染
  - 角色系统
  - 互动元素
- **通用 UI 组件**
  - 自定义 Trigger/Popup 系统
  - 动画系统 (transition)
  - Align 对齐组件

## 技术栈总结

| 层级 | 技术 |
|------|------|
| 框架 | Vue 3 (Composition API) |
| 构建 | Vite |
| UI 库 | Ant Design Vue |
| 状态管理 | Pinia |
| 路由 | Vue Router |
| 数据验证 | Zod |
| 数据上报 | ClientAction (自研) + Galileo |
| Markdown | 自定义渲染器 |
| 动画 | CSS Transitions + Canvas (Office) |
