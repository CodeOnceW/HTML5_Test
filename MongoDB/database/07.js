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
const postSchema = new mongoose.Schema({
    title: {
        type: String,

        // required: true // required 必填字段
        required: [true, '请传入文章标题'], // 设置必填 提示信息

        minLength: [2, '标题长度不能小于2'], // minLength 字段最小长度
        maxLength: [5, '标题长度不能大于5'], // maxLength 字段最大长度

        // trim 去除字段两边的空格        
        trim: true
    },
    age: {
        type: Number,
        // min 数字的最小范围
        min: [18, '年龄不能小于18'],
        // max 数字的最大范围
        max: [100, '年龄最大不能超过100']
    },
    publishDate: {
        type: Date,
        // default 代表默认值
        default: Date.now
    },
    category: {
        type: String,
        // 枚举：列举出当前字段可以拥有的值
        enum: {
            values: ['html', 'css', 'javascript', 'node.js'],
            message: '分类名称要在一定的范围内才可以'
        }
    },
    author: {
        type: String,
        // validate
        validate: {
            validator: v => {
                // 返回布尔值
                // true 验证成功
                // false 验证失败
                // v 要验证的值
                return v && v.length > 4
            },
            // 自定义错误信息
            message: '传入的值不符合验证规则'
        }
    }
});

const Post = mongoose.model('Post', postSchema);

Post.create({
        title: 'aa ',
        age: 20,
        category: 'html',
        author: 'hello'
    })
    .then(result => console.log(result))
    // .catch(err => console.log(err))
    .catch(error => {
        // 获取错误信息对象
        const err = error.errors;
        // 循环错误信息对象
        for (var attr in err) {
            // 将错误信息打印大控制台中
            console.log(err[attr]['message']);
        }
    })