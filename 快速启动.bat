@echo off
chcp 65001 >nul
echo ========================================
echo 四阶段活动设计器 - 快速启动脚本
echo ========================================
echo.

echo 🚀 正在启动四阶段活动设计器...
echo.

echo 📋 检查服务状态...
echo.

REM 检查后端服务
echo 检查后端服务 (端口 5000)...
netstat -an | findstr :5000 >nul
if %errorlevel% equ 0 (
    echo ✅ 后端服务已在运行
) else (
    echo ⏳ 启动后端服务...
    start "后端服务" cmd /k "cd /d %~dp0后端 && python app_cloudbase.py"
    timeout /t 3 /nobreak >nul
)

REM 检查前端服务
echo 检查前端服务 (端口 5174)...
netstat -an | findstr :5174 >nul
if %errorlevel% equ 0 (
    echo ✅ 前端服务已在运行
) else (
    echo ⏳ 启动前端服务...
    start "前端服务" cmd /k "cd /d %~dp0前端 && npm run dev"
    timeout /t 5 /nobreak >nul
)

echo.
echo ========================================
echo 🎉 服务启动完成！
echo ========================================
echo.
echo 🌐 访问地址:
echo - 前端页面: http://localhost:5174
echo - 测试页面: http://localhost:5174/#/test
echo - 四阶段设计器: http://localhost:5174/#/activity
echo - 后端API: http://localhost:5000
echo.
echo 📋 测试工具:
echo - 浏览器控制台运行: runFullValidation()
echo - 测试脚本: 5/最终验证.js
echo.
echo 💡 提示:
echo - 按 Ctrl+C 停止服务
echo - 查看控制台输出了解服务状态
echo - 访问测试页面进行功能验证
echo.
pause
