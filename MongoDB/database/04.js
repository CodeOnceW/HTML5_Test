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

// 查询用户集合中的所有文档
// User.find().then(result => console.log(result)); // 现在返回的是一个文档(所有的)

// 通过 _id 字段查找文档
// 通过 find() 方法查找文档 无论结果是多少条 返回的都是数组
// findOne() 方法返回一条文档默认返回当前集合中的第一条文档 
// $gt 大于  
// $lt 小于  
// $in 包含
// select() 选择要查询的字段 字段前面加 - 表示不想查询该字段
// sort() 将数据进行升序排序 字段前面加 - 表示降序
// skip 跳过多少条数据
// limit 限制查询数量

// User.find().then(result => console.log(result)); // 现在返回的是文档中的一条数据
// User.find({ _id: '5c09f267aeb04b22f8460968' }).then(result => console.log(result));

// User.findOne().then(result => console.log(result)); // 现在返回的是文档中的一条数据
// User.findOne({ name: '王五' }).then(result => console.log(result));

// 查询用户集合中 年龄字段 大于 20 并且小于 40 的文档
// User.find({ age: { $gt: 20, $lt: 40 } }).then(result => console.log(result));

// 查询用户爱好字段里面包含 敲代码 字段的文档
// User.find({ hobbies: { $in: ['敲代码'] } }).then(result => console.log(result));

// 查询所有用户的 姓名 和 邮件 不包含 _id
// User.find().select('name email -_id').then(result => console.log(result));

// 查询用户所有信息根据 年龄字段 进行 升序 排序
// User.find().sort('age').then(result => console.log(result));
// 查询用户所有信息根据 年龄字段 进行 降序 排序
// User.find().sort('-age').then(result => console.log(result));

// 跳过 前两个文档 显示三条文档
// User.find().skip(2).limit(3).then(result => console.log(result));