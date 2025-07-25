# 梦想清单 - 100个心愿网站

一个漂亮的梦想清单网站，帮助你记录和管理100个心愿，让梦想照进现实。

## ✨ 功能特性

### 🎯 核心功能
- **100个精选心愿**：涵盖旅行、学习、健康、事业、兴趣、家庭、生活、成长等8个类别
- **心愿卡片展示**：每个心愿都有精美的图片和描述
- **详情页查看**：点击卡片查看心愿的详细描述
- **心愿单管理**：可以勾选感兴趣的心愿加入清单
- **完成标记**：标记已完成的心愿，跟踪进度
- **打印功能**：支持打印心愿清单

### 🔍 搜索和筛选
- **实时搜索**：根据标题、描述或分类搜索心愿
- **分类筛选**：按不同类别筛选心愿
- **进度统计**：实时显示已完成、已选择和完成率

### 💾 数据持久化
- **本地存储**：使用localStorage保存用户的选择和进度
- **状态保持**：刷新页面后数据不会丢失

### 🎨 界面设计
- **响应式设计**：支持桌面端和移动端
- **现代化UI**：渐变背景、卡片效果、动画过渡
- **优雅交互**：悬停效果、点击反馈、键盘支持

## 🚀 使用方法

### 基本操作
1. **浏览心愿**：滚动查看所有100个心愿卡片
2. **查看详情**：点击任意卡片查看心愿的详细描述
3. **加入清单**：在详情页点击"加入心愿单"按钮
4. **标记完成**：在详情页点击"标记完成"按钮
5. **管理清单**：在底部使用全选/取消全选功能
6. **打印清单**：点击"打印清单"按钮

### 搜索和筛选
1. **搜索心愿**：在搜索框中输入关键词
2. **分类筛选**：点击分类按钮筛选特定类别的心愿
3. **查看进度**：在进度统计区域查看完成情况

### 键盘快捷键
- **ESC键**：关闭详情弹窗

## 📁 项目结构

```
梦想清单/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 功能脚本
├── README.md           # 项目说明
└── 需求/
    └── 100个心愿.txt   # 需求文档
```

## 🛠️ 技术栈

- **HTML5**：语义化标签，现代化结构
- **CSS3**：Flexbox/Grid布局，动画效果，响应式设计
- **JavaScript ES6+**：模块化代码，现代语法
- **LocalStorage**：本地数据存储
- **Font Awesome**：图标库
- **Google Fonts**：中文字体

## 🎨 设计特色

### 视觉设计
- **渐变背景**：紫色到蓝色的渐变，营造梦幻感
- **毛玻璃效果**：半透明背景，现代感十足
- **卡片设计**：圆角卡片，阴影效果，层次分明
- **动画效果**：悬停动画，过渡效果，提升用户体验

### 交互设计
- **直观操作**：点击、悬停、键盘操作
- **即时反馈**：按钮状态变化，进度实时更新
- **无障碍设计**：键盘导航，语义化标签

## 📱 响应式支持

- **桌面端**：大屏幕优化，多列布局
- **平板端**：中等屏幕适配，灵活布局
- **手机端**：小屏幕优化，单列布局

## 🖨️ 打印支持

- **打印样式**：专门优化的打印样式
- **清单格式**：清晰的心愿清单格式
- **隐藏元素**：自动隐藏不必要的界面元素

## 🔧 自定义配置

### 修改心愿内容
在 `script.js` 文件中修改 `wishes` 数组：

```javascript
const wishes = [
    {
        id: 1,
        title: "你的心愿标题",
        description: "简短描述",
        category: "分类",
        image: "图片URL",
        detail: "详细描述"
    }
    // ... 更多心愿
];
```

### 修改样式
在 `styles.css` 文件中自定义：
- 颜色主题
- 字体样式
- 布局尺寸
- 动画效果

## 🌟 未来计划

- [ ] 心愿编辑功能
- [ ] 心愿分享功能
- [ ] 云端同步
- [ ] 心愿提醒
- [ ] 成就系统
- [ ] 社交功能

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**让梦想照进现实，从记录心愿开始！** ✨ 