// 引入 express 框架
const express = require('express');

// 引入 path 模块
const path = require('path');

// 创建网站服务器
const app = express();

// 实现静态资源访问功能
app.use('/static', express.static(path.join(__dirname, 'public')));

// 监听端口
app.listen(3000);
console.log('服务器启动成功');