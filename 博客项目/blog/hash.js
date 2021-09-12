// 导入 bcrypt
var bcrypt = require('bcryptjs');

async function run() {
    // 生成随机字符串
    // genSalt 接收一个数字作为参数 
    // 数值越大 生成的随机字符串复杂度越高
    // 数值越小 生成的随机字符串复杂度越低
    // 默认值是 10
    // 返回生成的随机字符串
    const salt = await bcrypt.genSalt(10)
        // 对密码进行加密
        // 1.要进行加密的明文
        // 2.随机字符串
        // 返回值是加密之后的密码
    const result = await bcrypt.hash('123456', salt);
    console.log(salt);
    console.log(result);
}

run();