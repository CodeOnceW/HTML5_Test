const fs = require('fs');

// 回调地狱 不易维护
fs.readFile('./01.txt', 'utf8', (err, result1) => {
    console.log(result1);
    fs.readFile('./02.txt', 'utf8', (err, result2) => {
        console.log(result2);
        fs.readFile('./03.txt', 'utf8', (err, result3) => {
            console.log(result3);
        })
    })
});