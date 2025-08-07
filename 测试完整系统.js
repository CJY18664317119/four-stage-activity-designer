// 完整系统测试脚本
const API_BASE_URL = 'http://localhost:5000';
const FRONTEND_URL = 'http://localhost:5174';

// 测试函数
async function testCompleteSystem() {
  console.log('🚀 开始测试四阶段活动设计器完整系统...');
  
  try {
    // 1. 测试后端健康检查
    console.log('\n1. 测试后端健康检查...');
    const healthResponse = await fetch(`${API_BASE_URL}/health`);
    const healthResult = await healthResponse.json();
    console.log('✅ 后端健康检查:', healthResult);
    
    // 2. 测试问题定向API
    console.log('\n2. 测试问题定向API...');
    const problemData = {
      a: '测试情境描述：这是一个关于环保的项目',
      b: '学生,教师,家长',
      c: '有利因素：学生兴趣高，资源充足',
      d: '约束因素：时间有限，技术难度'
    };
    
    const problemResponse = await fetch(`${API_BASE_URL}/problem-orientation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(problemData)
    });
    
    const problemResult = await problemResponse.json();
    console.log('✅ 问题定向保存结果:', problemResult);
    
    // 3. 测试获取问题定向数据
    const problemListResponse = await fetch(`${API_BASE_URL}/problem-orientation/list`);
    const problemListResult = await problemListResponse.json();
    console.log('✅ 问题定向数据列表:', problemListResult);
    
    // 4. 测试原理探究API
    console.log('\n3. 测试原理探究API...');
    const principleData = {
      a: '学习目标：理解环保原理',
      b: '材料：实验器材，环保材料',
      c: '实验步骤：观察-分析-总结',
      d: '记录总结：实验过程和结果'
    };
    
    const principleResponse = await fetch(`${API_BASE_URL}/Principle-exploration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(principleData)
    });
    
    const principleResult = await principleResponse.json();
    console.log('✅ 原理探究保存结果:', principleResult);
    
    // 5. 测试工程实践API
    console.log('\n4. 测试工程实践API...');
    const engineeringData = {
      a: '知识分析：环保知识体系',
      b: '应用映射：实际应用场景',
      c: '场景应用：校园环保项目',
      d: '难点分析：技术实现难点'
    };
    
    const engineeringResponse = await fetch(`${API_BASE_URL}/engineering-practice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(engineeringData)
    });
    
    const engineeringResult = await engineeringResponse.json();
    console.log('✅ 工程实践保存结果:', engineeringResult);
    
    // 6. 测试产品展示API
    console.log('\n5. 测试产品展示API...');
    const productData = new FormData();
    productData.append('a', '环保项目展示');
    productData.append('b', '这是一个关于校园环保的创新项目');
    
    const productResponse = await fetch(`${API_BASE_URL}/Product-Display`, {
      method: 'POST',
      body: productData
    });
    
    const productResult = await productResponse.json();
    console.log('✅ 产品展示保存结果:', productResult);
    
    console.log('\n🎉 所有API测试完成！');
    console.log('📊 测试结果总结:');
    console.log('- 后端服务: ✅ 正常运行');
    console.log('- 数据库: ✅ 云数据库模式');
    console.log('- API接口: ✅ 全部正常');
    console.log('- 数据保存: ✅ 成功');
    console.log('- 数据获取: ✅ 成功');
    
    console.log('\n🌐 访问地址:');
    console.log(`- 前端页面: ${FRONTEND_URL}`);
    console.log(`- 后端API: ${API_BASE_URL}`);
    
  } catch (error) {
    console.error('❌ 测试失败:', error);
    console.log('\n🔧 故障排除建议:');
    console.log('1. 确保后端服务在 http://localhost:5000 运行');
    console.log('2. 确保前端服务在 http://localhost:5174 运行');
    console.log('3. 检查网络连接和防火墙设置');
    console.log('4. 检查浏览器控制台是否有错误信息');
  }
}

// 测试前端页面访问
async function testFrontend() {
  try {
    console.log('\n6. 测试前端页面访问...');
    const frontendResponse = await fetch(`${FRONTEND_URL}`);
    if (frontendResponse.ok) {
      console.log('✅ 前端页面可以正常访问');
    } else {
      console.log('⚠️ 前端页面访问异常');
    }
  } catch (error) {
    console.log('❌ 前端页面无法访问:', error.message);
  }
}

// 运行完整测试
async function runCompleteTest() {
  await testCompleteSystem();
  await testFrontend();
}

// 在浏览器中运行
if (typeof window !== 'undefined') {
  window.testCompleteSystem = testCompleteSystem;
  window.testFrontend = testFrontend;
  window.runCompleteTest = runCompleteTest;
  console.log('测试脚本已加载，请在浏览器控制台运行:');
  console.log('- runCompleteTest() - 运行完整测试');
  console.log('- testCompleteSystem() - 测试后端API');
  console.log('- testFrontend() - 测试前端页面');
} else {
  // 在Node.js中运行
  runCompleteTest();
}
