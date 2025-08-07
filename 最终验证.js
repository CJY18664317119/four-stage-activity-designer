// 四阶段活动设计器 - 最终验证脚本
// 用于验证整个系统的完整功能

const API_BASE_URL = 'http://localhost:5000';
const FRONTEND_URL = 'http://localhost:5174';

class SystemValidator {
  constructor() {
    this.results = [];
    this.currentTest = '';
  }

  // 添加测试结果
  addResult(testName, success, message, data = null) {
    this.results.push({
      test: testName,
      success,
      message,
      data,
      timestamp: new Date().toISOString()
    });
    
    const status = success ? '✅' : '❌';
    console.log(`${status} ${testName}: ${message}`);
  }

  // 测试后端连接
  async testBackendConnection() {
    this.currentTest = '后端连接测试';
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      
      if (response.ok) {
        this.addResult(this.currentTest, true, '后端服务正常运行', data);
        return true;
      } else {
        this.addResult(this.currentTest, false, `后端服务异常: ${response.status}`, data);
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `连接失败: ${error.message}`);
      return false;
    }
  }

  // 测试问题定向API
  async testProblemOrientation() {
    this.currentTest = '问题定向API测试';
    try {
      const testData = {
        a: '测试情境：校园环保项目',
        b: '学生,教师,管理员',
        c: '有利因素：学生积极性高，学校支持',
        d: '约束因素：时间有限，预算紧张'
      };

      const response = await fetch(`${API_BASE_URL}/problem-orientation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const result = await response.json();
      
      if (response.ok) {
        this.addResult(this.currentTest, true, '数据保存成功', result);
        return true;
      } else {
        this.addResult(this.currentTest, false, `保存失败: ${result.msg || '未知错误'}`, result);
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `测试失败: ${error.message}`);
      return false;
    }
  }

  // 测试原理探究API
  async testPrincipleExploration() {
    this.currentTest = '原理探究API测试';
    try {
      const testData = {
        a: '学习目标：理解环保原理和可持续发展',
        b: '材料：实验器材，环保材料，记录本',
        c: '实验步骤：观察-分析-总结-应用',
        d: '记录总结：详细记录实验过程和发现'
      };

      const response = await fetch(`${API_BASE_URL}/Principle-exploration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const result = await response.json();
      
      if (response.ok) {
        this.addResult(this.currentTest, true, '数据保存成功', result);
        return true;
      } else {
        this.addResult(this.currentTest, false, `保存失败: ${result.msg || '未知错误'}`, result);
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `测试失败: ${error.message}`);
      return false;
    }
  }

  // 测试工程实践API
  async testEngineeringPractice() {
    this.currentTest = '工程实践API测试';
    try {
      const testData = {
        a: '知识分析：环保知识体系构建',
        b: '应用映射：实际应用场景分析',
        c: '场景应用：校园环保项目实施',
        d: '难点分析：技术实现难点和解决方案'
      };

      const response = await fetch(`${API_BASE_URL}/engineering-practice`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const result = await response.json();
      
      if (response.ok) {
        this.addResult(this.currentTest, true, '数据保存成功', result);
        return true;
      } else {
        this.addResult(this.currentTest, false, `保存失败: ${result.msg || '未知错误'}`, result);
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `测试失败: ${error.message}`);
      return false;
    }
  }

  // 测试产品展示API
  async testProductDisplay() {
    this.currentTest = '产品展示API测试';
    try {
      const formData = new FormData();
      formData.append('a', '校园环保项目展示');
      formData.append('b', '这是一个关于校园环保的创新项目，展示了学生的环保意识和实践能力');

      const response = await fetch(`${API_BASE_URL}/Product-Display`, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      
      if (response.ok) {
        this.addResult(this.currentTest, true, '数据保存成功', result);
        return true;
      } else {
        this.addResult(this.currentTest, false, `保存失败: ${result.msg || '未知错误'}`, result);
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `测试失败: ${error.message}`);
      return false;
    }
  }

  // 测试数据获取
  async testDataRetrieval() {
    this.currentTest = '数据获取测试';
    try {
      const apis = [
        '/problem-orientation/list',
        '/Principle-exploration/list',
        '/engineering-practice/list',
        '/Product-Display/list'
      ];

      let allSuccess = true;
      for (const api of apis) {
        try {
          const response = await fetch(`${API_BASE_URL}${api}`);
          const result = await response.json();
          
          if (!response.ok) {
            allSuccess = false;
            console.log(`❌ ${api} 获取失败: ${result.msg || '未知错误'}`);
          }
        } catch (error) {
          allSuccess = false;
          console.log(`❌ ${api} 连接失败: ${error.message}`);
        }
      }

      if (allSuccess) {
        this.addResult(this.currentTest, true, '所有数据获取成功');
        return true;
      } else {
        this.addResult(this.currentTest, false, '部分数据获取失败');
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `测试失败: ${error.message}`);
      return false;
    }
  }

  // 测试前端访问
  async testFrontendAccess() {
    this.currentTest = '前端访问测试';
    try {
      const response = await fetch(FRONTEND_URL);
      
      if (response.ok) {
        this.addResult(this.currentTest, true, '前端页面可以正常访问');
        return true;
      } else {
        this.addResult(this.currentTest, false, `前端页面访问异常: ${response.status}`);
        return false;
      }
    } catch (error) {
      this.addResult(this.currentTest, false, `前端访问失败: ${error.message}`);
      return false;
    }
  }

  // 运行完整验证
  async runFullValidation() {
    console.log('🚀 开始四阶段活动设计器完整系统验证...\n');
    
    // 1. 测试后端连接
    const backendOk = await this.testBackendConnection();
    if (!backendOk) {
      console.log('\n❌ 后端连接失败，停止后续测试');
      return this.generateReport();
    }

    // 2. 测试各个API
    await this.testProblemOrientation();
    await this.testPrincipleExploration();
    await this.testEngineeringPractice();
    await this.testProductDisplay();

    // 3. 测试数据获取
    await this.testDataRetrieval();

    // 4. 测试前端访问
    await this.testFrontendAccess();

    // 5. 生成报告
    return this.generateReport();
  }

  // 生成验证报告
  generateReport() {
    const successCount = this.results.filter(r => r.success).length;
    const totalCount = this.results.length;
    const successRate = ((successCount / totalCount) * 100).toFixed(1);

    console.log('\n📊 验证报告');
    console.log('='.repeat(50));
    console.log(`总测试数: ${totalCount}`);
    console.log(`成功数: ${successCount}`);
    console.log(`失败数: ${totalCount - successCount}`);
    console.log(`成功率: ${successRate}%`);
    console.log('='.repeat(50));

    if (successRate >= 90) {
      console.log('🎉 系统验证通过！可以正常使用。');
    } else if (successRate >= 70) {
      console.log('⚠️ 系统基本可用，但存在一些问题需要修复。');
    } else {
      console.log('❌ 系统存在严重问题，需要修复后才能使用。');
    }

    console.log('\n🌐 访问地址:');
    console.log(`- 前端页面: ${FRONTEND_URL}`);
    console.log(`- 后端API: ${API_BASE_URL}`);
    console.log(`- 测试页面: ${FRONTEND_URL}/#/test`);

    console.log('\n📋 详细测试结果:');
    this.results.forEach((result, index) => {
      const status = result.success ? '✅' : '❌';
      console.log(`${index + 1}. ${status} ${result.test}: ${result.message}`);
    });

    return {
      successRate,
      totalTests: totalCount,
      passedTests: successCount,
      results: this.results
    };
  }
}

// 在浏览器中运行
if (typeof window !== 'undefined') {
  window.SystemValidator = SystemValidator;
  window.runFullValidation = async () => {
    const validator = new SystemValidator();
    return await validator.runFullValidation();
  };
  console.log('验证脚本已加载，请在浏览器控制台运行:');
  console.log('- runFullValidation() - 运行完整验证');
} else {
  // 在Node.js中运行
  const validator = new SystemValidator();
  validator.runFullValidation();
}
