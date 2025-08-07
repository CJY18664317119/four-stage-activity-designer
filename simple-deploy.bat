@echo off
chcp 65001 >nul

echo ========================================
echo 四阶段活动设计器 - 简化GitHub部署脚本
echo ========================================
echo.

echo 🚀 开始部署四阶段活动设计器到GitHub...
echo.

REM 检查Git是否安装
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git未安装，请先安装Git
    echo 下载地址：https://git-scm.com/downloads
    pause
    exit /b 1
)

REM 添加所有文件
echo 📦 添加文件到Git...
git add .

REM 提交更改
echo 💾 提交更改...
git commit -m "初始化项目：四阶段活动设计器完整项目"

REM 推送到GitHub
echo 🚀 推送到GitHub...
git push -u origin master

echo.
echo ✅ 部署完成！
echo.
pause