#!/bin/bash

# 四阶段活动设计器 - GitHub部署脚本

echo "🚀 开始部署四阶段活动设计器到GitHub..."

# 检查Git是否安装
if ! command -v git &> /dev/null; then
    echo "❌ Git未安装，请先安装Git"
    exit 1
fi

# 检查是否在Git仓库中
if [ ! -d ".git" ]; then
    echo "📁 初始化Git仓库..."
    git init
fi

# 添加所有文件
echo "📦 添加文件到Git..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "feat: 四阶段活动设计器完整项目

- 前端：Vue 3 + Vite + Tailwind CSS
- 后端：Flask + 云数据库
- 云开发：腾讯云开发集成
- 测试：完整系统验证
- 文档：详细部署指南

功能特性：
✅ 四阶段活动设计器
✅ 前后端API集成
✅ 文件上传支持
✅ 响应式设计
✅ 云开发部署准备"

# 检查是否有远程仓库
if ! git remote get-url origin &> /dev/null; then
    echo "⚠️  未设置远程仓库，请手动添加："
    echo "git remote add origin https://github.com/your-username/four-stage-activity-designer.git"
    echo ""
    echo "然后运行："
    echo "git push -u origin main"
else
    echo "🚀 推送到GitHub..."
    git push origin main
fi

echo ""
echo "✅ 部署完成！"
echo ""
echo "📋 下一步操作："
echo "1. 在GitHub上创建仓库"
echo "2. 添加远程仓库：git remote add origin <your-repo-url>"
echo "3. 推送代码：git push -u origin main"
echo "4. 启用GitHub Pages（可选）"
echo "5. 配置GitHub Actions（可选）"
echo ""
echo "🌐 项目地址："
echo "- 本地运行：http://localhost:5174"
echo "- 测试页面：http://localhost:5174/#/test"
echo ""
echo "📚 文档："
echo "- README.md - 项目说明"
echo "- 部署指南.md - 详细部署说明"
echo "- 项目完成总结.md - 项目完成情况"
