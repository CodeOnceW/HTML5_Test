const greeting = uname => `Hello ${uname}`;
const x = 100;

exports.x = x;

module.exports.greeting = greeting;

// 当 exports对象和moudle.exports对象指向的不是同一个对象时 以moudle.exports为准
module.exports = {
    name: 'zhangsan'
}

exports = {
    age: 20
}