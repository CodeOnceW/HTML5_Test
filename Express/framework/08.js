// 引入 express 框架
const express = require('express');

// 创建网站服务器
const app = express();

// 导入路由模块
const home = require('./route/home');
const admin = require('./route/admin');

// 处理路由
app.use('/home', home);
app.use('/admin', admin);

// 监听端口
app.listen(3000);
console.log('服务器启动成功');