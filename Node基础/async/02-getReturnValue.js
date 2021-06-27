// 同步
var sum = (n1, n2) => n1 + n2;
const result = sum(10, 20);

console.log(result); // 30

// 异步
function getMsg(callback) {
    setTimeout(function() {
        callback({
            msg: 'Hello Node.js'
        })
    }, 2000)
}
getMsg(function(data) {
    console.log(data); // { msg: 'Hello Node.js' }
});

// console.log(msg); // undefined