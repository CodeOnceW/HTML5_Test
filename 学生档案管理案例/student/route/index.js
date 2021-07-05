// 引入 router 模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
// 导入学生信息集合构造函数
const Student = require('../model/user');
// 引入 template 模块
const template = require('art-template');
// 引入 querystring 模块
const querystring = require('querystring');

// 呈递学生档案信息页面
router.get('/add', (req, res) => {
    // 加载添加页面
    let html = template('index.art', {})
    res.end(html);
})

// 呈递学生信息列表页面
router.get('/list', async(req, res) => {
    // 查询学生信息
    let students = await Student.find();
    console.log(students);
    // 加载显示页面
    let html = template('list.art', {
        students: students
    });
    res.end(html);
})

// 实现学生信息添加功能路由
router.post('/add', (req, res) => {
    // 接收 post 请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async() => {
        // 数据添加到数据库后跳转到列表页面
        await Student.create(querystring.parse(formData));
        res.writeHead(301, {
            location: '/list'
        });
        res.end();
    })
})

module.exports = router;