"use strict";

// 引入 router 模块
var getRouter = require('router'); // 获取路由对象


var router = getRouter(); // 导入学生信息集合构造函数

var Student = require('../model/user'); // 引入 template 模块


var template = require('art-template'); // 引入 querystring 模块


var querystring = require('querystring'); // 呈递学生档案信息页面


router.get('/add', function (req, res) {
  // 加载添加页面
  var html = template('index.art', {});
  res.end(html);
}); // 呈递学生信息列表页面

router.get('/list', function _callee(req, res) {
  var students, html;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Student.find());

        case 2:
          students = _context.sent;
          console.log(students); // 加载显示页面

          html = template('list.art', {
            students: students
          });
          res.end(html);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
}); // 实现学生信息添加功能路由

router.post('/add', function (req, res) {
  // 接收 post 请求参数
  var formData = '';
  req.on('data', function (param) {
    formData += param;
  });
  req.on('end', function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(Student.create(querystring.parse(formData)));

          case 2:
            res.writeHead(301, {
              location: '/list'
            });
            res.end();

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});
module.exports = router;