// 引入 http 模块
const http = require('http');
// 引入 template 模块
const template = require('art-template');
// 引入 path 模块
const path = require('path');
// 引入 serve-staric 模块
const serveStatic = require('serve-static');
// 引入处理日期第三方处理模块
const dateformat = require('dateformat');
// 引入 router 模块
const router = require('./route/index');

// 启用静态资源服务
const serve = serveStatic(path.join(__dirname, 'public'));

// 配置模板的根目录
template.defaults.root = path.join(__dirname, 'views');

// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat;

// 导入mongoose模块
require('./model/connect');

// 创建网站服务器
const app = http.createServer();

// 当客户端访问服务器端的时候
app.on('request', (req, res) => {
    router(req, res, () => {});
    serve(req, res, () => {});
})

// 监听端口
app.listen(80)
console.log('服务器启动成功');