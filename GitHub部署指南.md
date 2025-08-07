# GitHub部署指南

## 🚀 快速部署到GitHub

### 方法1：使用部署脚本（推荐）

#### Windows用户
```bash
# 双击运行部署脚本
deploy-to-github.bat
```

#### Linux/Mac用户
```bash
# 运行部署脚本
chmod +x deploy-to-github.sh
./deploy-to-github.sh
```

### 方法2：手动部署

#### 1. 在GitHub上创建仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `four-stage-activity-designer`
   - **Description**: 四阶段活动设计器 - 现代化教育管理平台
   - **Visibility**: Public（推荐）或 Private
   - **Initialize this repository with**: 不要勾选任何选项
4. 点击 "Create repository"

#### 2. 添加远程仓库

```bash
# 替换为您的GitHub用户名和仓库名
git remote add origin https://github.com/your-username/four-stage-activity-designer.git
```

#### 3. 推送代码

```bash
# 推送到main分支
git push -u origin main

# 或者推送到master分支（如果您的默认分支是master）
git push -u origin master
```

## 📋 项目文件说明

### 核心文件
- `README.md` - 项目主要说明文档
- `LICENSE` - MIT许可证
- `.gitignore` - Git忽略文件配置
- `快速启动.bat` - Windows快速启动脚本

### 前端项目
- `前端/` - Vue 3前端项目
  - `src/components/` - 四阶段组件
  - `src/pages/` - 页面组件
  - `src/utils/` - 工具函数
  - `package.json` - 前端依赖配置

### 后端项目
- `后端/` - Flask后端项目
  - `app_cloudbase.py` - 云开发模式后端
  - `app.py` - 本地数据库后端
  - `requirements.txt` - Python依赖

### 云开发
- `cloudfunctions/` - 云函数
  - `activity-api/` - 活动API云函数

### 文档和测试
- `部署指南.md` - 详细部署说明
- `项目完成总结.md` - 项目完成情况
- `项目状态报告.md` - 项目状态详情
- `最终验证.js` - 完整系统验证脚本
- `测试完整系统.js` - API测试脚本

## 🔧 GitHub功能配置

### 1. GitHub Pages（可选）

启用GitHub Pages来托管前端：

1. 进入仓库设置：Settings > Pages
2. Source选择：Deploy from a branch
3. Branch选择：gh-pages
4. 点击 "Save"

### 2. GitHub Actions（可选）

项目已包含CI/CD配置：

1. 进入仓库设置：Settings > Actions > General
2. 确保 "Actions permissions" 设置为 "Allow all actions and reusable workflows"
3. 保存设置

### 3. 仓库描述和标签

在仓库主页添加：

**描述**：
```
四阶段活动设计器 - 基于Vue 3 + Flask + 腾讯云开发的现代化教育管理平台
```

**标签**：
- `vue3`
- `flask`
- `education`
- `cloudbase`
- `activity-designer`

## 🌐 访问地址

### 本地开发
- **主页面**: http://localhost:5174
- **四阶段设计器**: http://localhost:5174/#/activity
- **测试页面**: http://localhost:5174/#/test
- **后端API**: http://localhost:5000

### GitHub Pages（如果启用）
- **在线演示**: https://your-username.github.io/four-stage-activity-designer

## 📚 项目文档

### 主要文档
- [README.md](README.md) - 项目主要说明
- [部署指南.md](部署指南.md) - 详细部署说明
- [项目完成总结.md](项目完成总结.md) - 项目完成情况
- [项目状态报告.md](项目状态报告.md) - 项目状态详情

### 技术文档
- [启动说明.md](启动说明.md) - 启动和配置指南
- [GitHub部署指南.md](GitHub部署指南.md) - GitHub部署说明

## 🧪 测试验证

### 本地测试
```bash
# 运行完整系统验证
node 最终验证.js
```

### 在线测试
1. 访问测试页面：http://localhost:5174/#/test
2. 点击各个测试按钮
3. 查看测试结果

## 🔄 更新和维护

### 推送更新
```bash
# 添加更改
git add .

# 提交更改
git commit -m "feat: 更新说明"

# 推送到GitHub
git push origin main
```

### 拉取更新
```bash
# 拉取最新代码
git pull origin main
```

## 📞 技术支持

### 常见问题

1. **推送失败**
   - 检查网络连接
   - 验证GitHub账号权限
   - 确认仓库地址正确

2. **文件编码问题**
   - 确保使用UTF-8编码
   - 检查.gitignore配置

3. **依赖安装失败**
   - 检查Node.js和Python版本
   - 使用官方镜像源

### 获取帮助

- **GitHub Issues**: 提交问题反馈
- **项目文档**: 查看详细文档
- **测试工具**: 使用内置测试脚本

## 🎉 部署完成

恭喜！您的四阶段活动设计器项目已成功部署到GitHub。

### 下一步建议

1. **分享项目**: 在GitHub上分享您的项目
2. **收集反馈**: 邀请用户测试和反馈
3. **持续改进**: 根据反馈优化功能
4. **文档完善**: 持续更新项目文档

---

**四阶段活动设计器** - 让教育管理更智能、更高效！

*部署时间: 2024年8月7日*  
*技术栈: Vue 3 + Flask + 腾讯云开发*  
*部署状态: GitHub仓库创建完成，代码推送成功*
