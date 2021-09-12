// 引入 express 框架
const express = require('express');

// 创建网站服务器
const app = express();

// 创建路由对象
const home = express.Router();

// 为路由对象匹配请求路径
app.use('/home', home);

// 创建二级路由
home.get('/index', (req, res) => {
    res.send('欢迎来到首页');
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');