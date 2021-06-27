console.log('代码开始执行');

setTimeout(() => { console.log('2秒后执行的代码'); }, 2000);

setTimeout(() => { console.log('0秒后执行的代码'); }, 0);

console.log('代码结束执行');

// 代码开始执行
// 代码结束执行
// 0秒后执行的代码
// 2秒后执行的代码