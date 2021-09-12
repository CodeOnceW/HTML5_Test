// f: file 文件   s:system 系统 文件操作系统
// fs.readFile('文件路径/文件名称'[,'文件编码'], callback);

// 1.通过模块的名字 fs 对模块进行引用
const fs = require('fs');

// 2.通过模块内部的 readFile 读取文件内容
fs.readFile('./demo.txt', 'utf8', (err, docs) => {
    // 如果文件读取出错 err 是一个对象 包含错误信息 
    // 如果文件读取正确 err 时 null
    // docs 时文件读取的结果
    console.log(err);
    console.log(docs);
});