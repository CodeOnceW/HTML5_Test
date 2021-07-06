// 引入 express 框架
const express = require('express');

// 创建网站服务器
const app = express();

app.use(fn({ a: 1 }));

function fn(obj) {
    return function(req, res, next) {
        if (obj.a == 2) {
            // 输出请求地址
            console.log(req.url);
        } else {
            // 输出请求方法
            console.log(req.method);
        }
        next();
    }
}

app.get('/', (req, res) => {
    res.send('ok');
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');