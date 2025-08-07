# 四阶段活动设计器

一个基于Vue 3 + Flask + 腾讯云开发的现代化教育管理平台，专为教师和教育工作者设计，提供课程创建、项目情境生成、活动设计等全方位教育管理功能。

## 🎯 项目特色

- **四阶段活动设计**：问题定向、原理探究、工程实践、产品展示
- **现代化技术栈**：Vue 3 + Flask + 腾讯云开发
- **响应式设计**：适配各种设备屏幕
- **实时数据同步**：云端数据持久化
- **文件上传支持**：支持图片和视频文件
- **云开发集成**：无服务器架构部署

## 🚀 快速开始

### 环境要求

- Node.js 16.0+
- Python 3.8+
- 现代浏览器（Chrome、Firefox、Safari、Edge）

### 安装和运行

#### 方法1：快速启动（推荐）

```bash
# 克隆项目
git clone https://github.com/your-username/four-stage-activity-designer.git
cd four-stage-activity-designer

# 双击运行快速启动脚本
快速启动.bat
```

#### 方法2：手动启动

```bash
# 1. 安装前端依赖
cd 前端
npm install

# 2. 安装后端依赖
cd ../后端
pip install -i https://pypi.org/simple/ flask flask-cors pymysql werkzeug

# 3. 启动后端服务
python app_cloudbase.py

# 4. 启动前端服务（新终端）
cd ../前端
npm run dev
```

### 访问地址

- **主页面**: http://localhost:5174
- **四阶段设计器**: http://localhost:5174/#/activity
- **测试页面**: http://localhost:5174/#/test
- **后端API**: http://localhost:5000

## 🎯 核心功能

### 四阶段活动设计器

1. **问题定向阶段**
   - 情境描述：分析项目背景和情境
   - 利益相关者：识别项目相关人员和机构
   - 有利因素：分析项目成功的有利条件
   - 约束因素：识别项目实施的限制条件

2. **原理探究阶段**
   - 学习目标：设定明确的学习目标
   - 材料准备：准备实验和活动所需材料
   - 实验步骤：设计详细的实验流程
   - 记录总结：记录实验过程和结果

3. **工程实践阶段**
   - 知识分析：构建相关知识体系
   - 应用映射：分析实际应用场景
   - 场景应用：设计具体应用方案
   - 难点分析：识别和解决技术难点

4. **产品展示阶段**
   - 产品标题：设计产品名称
   - 产品介绍：编写产品说明
   - 文件上传：上传产品相关文件
   - 展示内容：组织展示材料

## 🛠️ 技术架构

### 前端技术栈
- **Vue 3** - 渐进式JavaScript框架
- **Vite** - 下一代前端构建工具
- **Vue Router 4** - 官方路由管理器
- **Tailwind CSS** - 实用优先的CSS框架
- **DaisyUI** - Tailwind CSS组件库

### 后端技术栈
- **Flask** - Python Web框架
- **云数据库** - 腾讯云开发数据库
- **RESTful API** - 标准API设计
- **文件上传** - 支持多种文件格式

### 云开发架构
- **腾讯云开发** - 无服务器云开发平台
- **云函数** - 事件驱动的计算服务
- **云数据库** - 文档型数据库
- **静态网站托管** - 前端部署服务

## 📋 项目结构

```
four-stage-activity-designer/
├── 前端/                    # Vue 3前端项目
│   ├── src/
│   │   ├── components/     # 四阶段组件
│   │   ├── pages/         # 页面组件
│   │   ├── utils/         # 工具函数
│   │   └── main.js        # 应用入口
│   ├── package.json
│   └── vite.config.js
├── 后端/                    # Flask后端项目
│   ├── app_cloudbase.py   # 云开发模式后端
│   ├── app.py             # 本地数据库后端
│   └── requirements.txt
├── cloudfunctions/         # 云函数
│   └── activity-api/      # 活动API云函数
├── 文档/                    # 项目文档
│   ├── 部署指南.md
│   ├── 项目完成总结.md
│   └── 项目状态报告.md
├── 测试/                    # 测试工具
│   ├── 最终验证.js
│   └── 测试完整系统.js
├── 快速启动.bat            # Windows快速启动脚本
├── README.md              # 项目说明
└── .gitignore             # Git忽略文件
```

## 🧪 测试和验证

### 自动化测试

```javascript
// 在浏览器控制台运行完整验证
runFullValidation()
```

### 手动测试

1. 访问测试页面: http://localhost:5174/#/test
2. 点击各个测试按钮
3. 查看测试结果和系统状态

### 功能测试

- ✅ 后端API连接测试
- ✅ 四阶段数据保存测试
- ✅ 文件上传功能测试
- ✅ 数据获取功能测试
- ✅ 前端页面访问测试

## ☁️ 云端部署

### 腾讯云开发部署

1. **云函数部署**
   ```bash
   cd cloudfunctions/activity-api
   npm install
   tcb fn deploy activity-api
   ```

2. **前端部署**
   ```bash
   cd 前端
   npm run build
   tcb hosting deploy dist
   ```

3. **数据库配置**
   - 创建云数据库集合
   - 配置访问权限
   - 设置环境变量

## 📚 文档资源

- [部署指南](部署指南.md) - 详细部署说明
- [项目完成总结](项目完成总结.md) - 项目完成情况
- [项目状态报告](项目状态报告.md) - 项目状态详情
- [启动说明](启动说明.md) - 启动和配置指南

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- **项目文档**: 查看项目文档文件夹
- **问题反馈**: 提交 GitHub Issue
- **功能建议**: 欢迎提交 Pull Request

## 🎉 致谢

感谢所有为这个项目做出贡献的开发者和用户！

---

**四阶段活动设计器** - 让教育管理更智能、更高效！

*项目完成时间: 2024年8月7日*  
*技术栈: Vue 3 + Flask + 腾讯云开发*  
*部署状态: 本地开发完成，云端部署准备就绪*
