// 引入 mongoose 第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    // 连接成功
    .then(() => {
        console.log('数据库连接成功');
    })
    // 连接失败
    .catch(err => {
        console.log('数据库连接错误' + err);
    })

// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean,
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema) // courses

// 向集合中插入文档
// create 方法也返回 Promise 对象 支持异步函数
Course.create({
    name: 'javascript',
    author: '黑马讲师',
    isPublished: false
}, (err, result) => {
    // 错误对象
    console.log(err);
    // 当前插入的文档
    console.log(result);
});

Course.create({
        name: 'HTML5基础',
        author: 'Pink老师',
        isPublished: true
    })
    .then(doc => console.log(doc))
    .catch(err => conole.log(err))