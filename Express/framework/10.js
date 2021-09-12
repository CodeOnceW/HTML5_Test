// 引入 express 框架
const express = require('express');

// 引入 bodyParser 模块
const bodyParser = require('body-parser');

// 创建网站服务器
const app = express();

// 配置 body-parser 模块 拦截所有请求
// extended: false 方法内部使用 querystring 模块处理请求参数的格式
// extended: true 方法内部使用第三方模块 qs 处理请求参数的格式
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/app', (req, res) => {
    res.send(req.body);
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');