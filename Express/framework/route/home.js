// home.js
const express = require('express');

const home = express.Router();
home.get('/index', (req, res) => {
    res.send('欢迎来到博客展示页面');
})

// 导出 home 路由对象
module.exports = home;