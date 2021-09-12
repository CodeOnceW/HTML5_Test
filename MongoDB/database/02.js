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

// 向集合插入数据
// (1) 创建集合实例
// (2) 调用实例对象下的 save 方法将数据保存在数据库中

// 创建集合实例 (创建文档)
const course = new Course({
    name: 'node.js基础',
    author: '讲师',
    isPublished: true
});

// 调用实例对象下的 save 方法将数据保存在数据库中
course.save();