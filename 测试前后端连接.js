// 测试前后端连接
const API_BASE_URL = 'http://localhost:5000';

// 测试函数
async function testAPI() {
  console.log('开始测试前后端连接...');
  
  try {
    // 测试问题定向API
    console.log('\n1. 测试问题定向API...');
    const problemData = {
      a: '测试情境描述',
      b: '测试利益相关者',
      c: '测试有利因素',
      d: '测试约束因素'
    };
    
    const problemResponse = await fetch(`${API_BASE_URL}/problem-orientation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(problemData)
    });
    
    const problemResult = await problemResponse.json();
    console.log('问题定向保存结果:', problemResult);
    
    // 测试获取问题定向数据
    const problemListResponse = await fetch(`${API_BASE_URL}/problem-orientation/list`);
    const problemListResult = await problemListResponse.json();
    console.log('问题定向数据列表:', problemListResult);
    
    // 测试原理探究API
    console.log('\n2. 测试原理探究API...');
    const principleData = {
      a: '测试学习目标',
      b: '测试材料准备',
      c: '测试实验步骤',
      d: '测试记录总结'
    };
    
    const principleResponse = await fetch(`${API_BASE_URL}/Principle-exploration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(principleData)
    });
    
    const principleResult = await principleResponse.json();
    console.log('原理探究保存结果:', principleResult);
    
    // 测试工程实践API
    console.log('\n3. 测试工程实践API...');
    const engineeringData = {
      a: '测试知识分析',
      b: '测试应用映射',
      c: '测试场景应用',
      d: '测试难点分析'
    };
    
    const engineeringResponse = await fetch(`${API_BASE_URL}/engineering-practice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(engineeringData)
    });
    
    const engineeringResult = await engineeringResponse.json();
    console.log('工程实践保存结果:', engineeringResult);
    
    // 测试产品展示API（不包含文件上传）
    console.log('\n4. 测试产品展示API...');
    const productData = new FormData();
    productData.append('a', '测试产品标题');
    productData.append('b', '测试产品介绍');
    
    const productResponse = await fetch(`${API_BASE_URL}/Product-Display`, {
      method: 'POST',
      body: productData
    });
    
    const productResult = await productResponse.json();
    console.log('产品展示保存结果:', productResult);
    
    console.log('\n✅ 所有API测试完成！');
    console.log('如果看到以上结果，说明前后端连接正常。');
    
  } catch (error) {
    console.error('❌ 测试失败:', error);
    console.log('请检查：');
    console.log('1. 后端服务是否在 http://localhost:5000 运行');
    console.log('2. 数据库是否正常连接');
    console.log('3. CORS是否已启用');
  }
}

// 运行测试
if (typeof window !== 'undefined') {
  // 在浏览器中运行
  window.testAPI = testAPI;
  console.log('测试脚本已加载，请在浏览器控制台运行 testAPI() 来测试连接');
} else {
  // 在Node.js中运行
  testAPI();
} 