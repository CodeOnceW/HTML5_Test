// 导入 fs 模块
const fs = require('fs');

// 改造现有异步函数 api 让其返回 promise 对象 从而支持异步函数语法
// const { promisify } = require('util');
const promisify = require('util').promisify;

// promisify 包装返回 promise 对象
const readFile = promisify(fs.readFile);

async function run() {
    let r1 = await readFile('./01.txt', 'utf8')
    let r2 = await readFile('./02.txt', 'utf8')
    let r3 = await readFile('./03.txt', 'utf8')
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

run();