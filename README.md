# QClaw 逆向工程

> 腾讯 QClaw (AI 助手) Electron 桌面应用的完整逆向分析

## 概览

QClaw 是腾讯基于 Electron 构建的 AI 桌面助手，集成了 AI 对话、Agent 系统、技能市场、定时任务、像素办公室等功能。本项目通过多种逆向手段重建了完整代码。

| 部分 | 保护方式 | 逆向方法 | 代码量 |
|------|---------|---------|--------|
| 渲染器 (Renderer) | Vite 压缩 | js-beautify 格式化 | 223K 行 |
| 主进程 (Main) | bytenode V8 字节码 | 运行时 Hook + 字符串提取 | ~600 行重建 |
| Preload | bytenode V8 字节码 | contextBridge 捕获 | ~200 行重建 |

## 目录结构

```
├── docs/                        # 文档
│   └── ARCHITECTURE.md          # 架构分析文档 (500+ 行)
├── renderer/                    # 渲染器源码 (格式化后)
│   ├── index.html               # 入口 HTML
│   ├── MODULE_MAP.md            # 模块映射说明
│   └── assets/                  # JS + CSS 资源
│       ├── e-Kf-uhv6n.js        # 入口 (23K 行) - App/路由/Zod
│       ├── c-Gmkq65k9.js        # 核心 (150K 行) - Ant Design + Office
│       ├── c-DX3Ewe2z.js        # Chat (34K 行) - AI 对话页面
│       └── ...                  # 其他 chunk
├── main/                        # 主进程重建代码
│   └── index.reconstructed.js   # 14 模块类, 93 IPC handlers
├── preload/                     # Preload 重建代码
│   └── index.reconstructed.js   # 16 命名空间 contextBridge API
├── data/                        # 原始分析数据
│   ├── qclaw_main_strings.json  # 字节码字符串提取 (主进程)
│   ├── qclaw_preload_strings.json
│   └── qclaw_hook_v2_result.json
└── tools/                       # 逆向工具脚本
    ├── extract_strings.js       # 字节码字符串提取器
    ├── deep_hook_main.js        # 深度运行时 Hook
    └── runtime_hook_v2.js       # 运行时 Hook v2
```

## 技术栈

- **框架**: Electron 37.10.3 + Vue 3 (Composition API)
- **构建**: Vite
- **UI**: Ant Design Vue
- **状态管理**: Pinia
- **路由**: Vue Router (4 页面)
- **数据验证**: Zod
- **代码保护**: bytenode (V8 字节码编译)
- **后端服务**: OpenClaw (本地 Node.js 服务, 端口 28789)

## 关键发现

### 页面路由
- `/init-loading` — 初始化加载页
- `/wx-login` — 微信扫码登录
- `/chat` — AI 助手对话 (核心页面)
- `/office` — 像素办公室

### IPC 通信 (93 通道)
窗口管理 (7) | 应用信息 (16) | 配置 (2) | 安全存储 (9) | 安全验证 (3) | 进程管理 (13) | QClaw 数据 (14) | 会话 (7) | 遥测 (2) | 调试 (2) | 更新 (9) | 性能 (1)

### API 端点
- JPRX 网关 (5 环境): prod / beta / woa / qq / 本地
- AuthGateway: 本地 HTTP 反向代理，自动注入 JWT
- OpenClaw 服务: `http://127.0.0.1:28789`
- 遥测: Galileo + Aegis + pcmgrmonitor

## 许可声明

本项目仅用于安全研究和学习目的。所有代码版权归腾讯所有。
