// 引入 express 框架
const express = require('express');

// 创建网站服务器
const app = express();

app.get('/index/:id/:name/:age', (req, res) => {
    res.send(req.params);
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');