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