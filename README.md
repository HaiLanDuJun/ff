# 芳芳的测试之路 - Python详细教程网站

这是一个专注于Python编程和测试开发的教程网站，使用纯HTML、CSS和JavaScript构建，可以通过GitHub Pages免费托管。

## 📚 网站内容

网站包含以下Python教程模块：

1. **Python基础** - 变量、数据类型、运算符、控制流
2. **函数与模块** - 函数定义、参数、Lambda、模块导入
3. **面向对象编程** - 类、对象、继承、封装、多态
4. **数据结构** - 列表、字典、元组、集合、字符串操作
5. **文件操作** - 文件读写、异常处理、JSON/CSV操作
6. **测试开发** - 单元测试、pytest框架、Mock、测试最佳实践

## 🚀 快速部署到GitHub Pages

### 方法一：通过GitHub网页界面（最简单）

1. **创建GitHub仓库**
   - 登录GitHub
   - 点击右上角的 "+" 号，选择 "New repository"
   - 仓库名可以设置为 `python-tutorial` 或任何你喜欢的名字
   - 选择 Public（公开）
   - 点击 "Create repository"

2. **上传文件**
   - 在仓库页面，点击 "uploading an existing file"
   - 将本地的所有文件（index.html, styles.css, script.js, tutorials.js, README.md）拖拽上传
   - 点击 "Commit changes"

3. **启用GitHub Pages**
   - 在仓库页面，点击 "Settings"（设置）
   - 在左侧菜单找到 "Pages"
   - 在 "Source" 部分，选择 "main" 分支和 "/ (root)" 文件夹
   - 点击 "Save"
   - 等待几分钟，GitHub会提供一个网址，格式为：`https://你的用户名.github.io/仓库名/`

### 方法二：使用Git命令行

```bash
# 1. 初始化Git仓库
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: Python教程网站"

# 4. 在GitHub上创建仓库后，添加远程仓库
git remote add origin https://github.com/你的用户名/仓库名.git

# 5. 推送到GitHub
git branch -M main
git push -u origin main
```

然后按照方法一的第3步启用GitHub Pages。

## 📁 文件结构

```
.
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 主要JavaScript逻辑
├── tutorials.js        # 教程内容数据
└── README.md          # 说明文档
```

## 🎨 网站特性

- ✨ 现代化的响应式设计
- 📱 支持移动端访问
- 🎯 清晰的教程分类
- 💡 丰富的代码示例
- 🚀 快速加载，无需后端

## 🔧 本地预览

如果你想在本地预览网站：

1. 直接双击 `index.html` 文件在浏览器中打开
2. 或者使用Python的简单HTTP服务器：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # 然后在浏览器访问 http://localhost:8000
   ```

## 📝 自定义内容

你可以轻松修改教程内容：

- 编辑 `tutorials.js` 文件来添加或修改教程内容
- 修改 `styles.css` 来改变网站样式
- 编辑 `index.html` 来调整页面结构

## 🌟 贡献

欢迎提交Issue和Pull Request来改进这个教程网站！

## 📄 许可证

本项目采用 MIT 许可证。

---

**祝学习愉快！🐍**

