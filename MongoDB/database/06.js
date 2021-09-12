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
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});

// 使用规则创建集合
const User = mongoose.model('User', userSchema);

// 更新集合中的文档
// updateOne() 更新一个文档 (第一个匹配条件的文档)
// updateMany() 更新多个文档 (匹配条件的所有文档)

// User.updateOne({ 查询条件 }, { 要修改的值 }).then(result => console.log(result));
// User.updateOne({ name: '李四' }, { name: '李狗蛋' }).then(result => console.log(result));

// User.updateMany({ 查询条件 }, { 要修改的值 }).then(result => console.log(result));
User.updateMany({}, { age: 50 }).then(result => console.log(result));