// 引入 mongoose 模块
const mongoose = require('mongoose');

// 创建学生集合规则
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 10
    },
    age: {
        type: Number,
        min: 10,
        max: 25
    },
    sex: {
        type: String,
    },
    email: String,
    hobbies: [String],
    collage: String,
    enterDate: {
        type: Date,
        default: Date.now
    }
});

// 使用 mongoose 创建学生集合
const Student = mongoose.model('Student', studentsSchema);

// 将集合构造函数开放
module.exports = Student;