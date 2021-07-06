// 引入 express 框架
const express = require('express');

// 创建网站服务器
const app = express();

app.get('/', (req, res) => {
    // 获取get请求参数
    // req.query
    res.send(req.query);
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');