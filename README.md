# M2H - Markdown 转 HTML 转换器

一个现代化的 Markdown 转 HTML 转换工具，具有实时预览和导出功能。

![m2h截图](https://github.com/lc708/m2h/blob/main/public/screenshot.jpg)

## ✨ 特性

- 🚀 **实时预览** - 实时查看 Markdown 渲染效果
- 📝 **完整 Markdown 支持** - 支持所有标准 Markdown 语法
- 💾 **多种导出选项** - 支持 HTML 文件下载和剪贴板复制
- 📱 **响应式设计** - 完美适配所有设备
- 🎨 **现代化 UI** - 使用 shadcn/ui 组件库和 Tailwind CSS
- ⚡ **性能优化** - 基于 React 和 Vite 构建
- 🎪 **动画效果** - 使用 Framer Motion 提供流畅动画
- 📋 **快速模板** - 内置4种常用模板（博客、文档、README等）

## 🛠️ 技术栈

- **React 18** - 现代化的用户界面框架
- **Vite** - 快速的构建工具
- **pnpm** - 快速、节省磁盘空间的包管理器
- **Tailwind CSS** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量的 React 组件库
- **React Markdown** - Markdown 渲染引擎
- **Framer Motion** - 动画库
- **Lucide React** - 美观的图标库

## 📁 项目结构

```
m2h/
├── public/                 # 静态资源
│   └── vite.svg           # 应用图标
├── src/                   # 源代码
│   ├── components/        # React 组件
│   │   ├── converter/     # 转换器相关组件
│   │   │   ├── PreviewPanel.jsx      # 预览面板
│   │   │   ├── TemplateSelector.jsx  # 模板选择器
│   │   │   └── ToolbarActions.jsx    # 工具栏操作
│   │   └── ui/           # UI 基础组件
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── textarea.jsx
│   │       ├── separator.jsx
│   │       └── badge.jsx
│   ├── lib/              # 工具函数
│   │   └── utils.js      # 通用工具函数
│   ├── App.jsx           # 主应用组件
│   ├── Converter.jsx     # 转换器主组件
│   ├── main.jsx          # 应用入口
│   └── index.css         # 全局样式
├── package.json          # 项目配置和依赖
├── pnpm-lock.yaml        # pnpm 依赖锁定文件
├── .npmrc               # pnpm 配置文件
├── vite.config.js        # Vite 配置
├── tailwind.config.js    # Tailwind CSS 配置
├── postcss.config.js     # PostCSS 配置
└── README.md            # 项目说明
```

## 🚀 快速开始

### 前置要求

确保您已安装 [pnpm](https://pnpm.io/zh/)：

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看应用。

### 构建生产版本

```bash
pnpm build
```

### 预览生产版本

```bash
pnpm preview
```

## 📖 使用说明

1. **编写 Markdown** - 在左侧编辑器中输入或粘贴 Markdown 内容
2. **实时预览** - 右侧面板会实时显示渲染效果
3. **选择模板** - 使用快速模板功能快速开始
4. **切换视图** - 支持分屏、纯编辑器、纯预览三种视图模式
5. **导出内容** - 可复制 HTML 到剪贴板或下载为 HTML 文件

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件


## 🆘 支持

如果遇到问题，请：
1. 查看 [Issues](https://github.com/lc708/m2h/issues)
2. 提交新的 Issue
3. 发送邮件至：albarino708@gmail.com
