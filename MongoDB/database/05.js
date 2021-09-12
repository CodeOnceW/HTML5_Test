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

// 删除数据
// findOneAndDelete() 查找到一条文档并且删除 返回删除的文档
// 如果查询条件匹配了多个文档 那么将会删除第一个匹配的文档
// deleteMany() 删除多条文档


// User.findOneAndDelete({
//     _id: '5c09f267aeb04b22f8460968'
// }).then(result => console.log(result));

// User.deleteMany({
//     // 如果参数为空 或者 传入的是一个空的对象 则删除所有文档
// }).then(result => console.log(result));