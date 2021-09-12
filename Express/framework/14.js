// 引入 express 框架
const express = require('express');
// 引入 path 模块
const path = require('path');
// 创建网站服务器
const app = express();

// 告诉express框架使用什么模板引擎渲染什么后缀的模板文件
// 1.模板的后缀
// 2.使用的模板引擎
app.engine('art', require('express-art-template'));

// 告诉express框架模板存放的位置是什么
// 1.固定的 express的配置项名字
// 2.文件夹的名字
app.set('views', path.join(__dirname, 'views'));

// 告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

app.get('/index', (req, res) => {
    // 1.拼接了模板路径
    // 2.拼接模板的后缀
    // 3.哪一个模板和哪一个数据进行拼接
    // 将拼接结果响应给了客户端
    res.render('index', {
        msg: 'message'
    });
})

app.get('/list', (req, res) => {
    res.render('list', {
        msg: 'list page'
    })
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');