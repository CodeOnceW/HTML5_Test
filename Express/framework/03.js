// 引入 express 框架
const express = require('express');
// 创建网站服务器
const app = express();

app.use((req, res, next) => {
    console.log('请求走了 qpp.use 中间件');
    next();
})

app.use('/request', (req, res, next) => {
    console.log('请求走了 qpp.use/request 中间件');
    next();
})

app.get('/list', (req, res) => {
    res.send('/list')
})

app.get('/request', (req, res, next) => {
    req.name = '张三';
    next();
})

app.get('/request', (req, res) => {
    res.send(req.name);
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');