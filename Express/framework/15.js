// 引入 express 框架
const express = require('express');
// 引入 path 模块
const path = require('path');
// 创建网站服务器
const app = express();

// 模板配置
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.locals.users = [{
    name: '张三',
    age: 20
}, {
    name: '李四',
    age: 19
}]

app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页'
    });
})

app.get('/list', (req, res) => {
    res.render('list', {
        msg: '列表页'
    })
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');