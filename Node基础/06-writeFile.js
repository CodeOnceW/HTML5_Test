// 1.通过模块的名字 fs 对模块进行引用
const fs = require('fs');

// 2.定义写入内容 str
const str = `
写字楼里写字间，写字间中程序员； 
程序人员写程序，又将程序换酒钱； 
酒醒只在屏前坐，酒醉还来屏下眠； 
酒醉酒醒日复日，屏前屏下年复年； 
但愿老死电脑间，不愿鞠躬老板前； 
奔驰宝马贵者趣，公交自行程序员； 
别人笑我太疯癫，我笑自己命太贱； 
但见满街漂亮妹，哪个归得程序员。
`;

// 3.通过模块内部的 writeFile 写入文件内容
fs.writeFile('./demo.txt', str, err => {
    if (err != null) {
        console.log(err);
        return;
    }

    console.log('文件内容写入成功!');
})