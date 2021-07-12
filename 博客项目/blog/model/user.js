// 创建用户集合
// 引入 mongoose 第三方模块
const mongoose = require('mongoose');
// 导入 bcrypt
var bcrypt = require('bcryptjs');

// 设定集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true
    },
    // 0 启用状态 
    // 1 禁用状态
    state: {
        type: Number,
        default: 0
    }
})

// 创建集合
const User = mongoose.model('User', userSchema);

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
        username: 'iteheima',
        email: 'itheima@itcast.cn',
        password: pass,
        role: 'admin',
        state: 0
    });
}

// 将用户集合作为模块成员进行导出
module.exports = {
    User
}