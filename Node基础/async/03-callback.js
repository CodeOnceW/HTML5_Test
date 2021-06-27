function getData(callback) {
    callback('ABC');
}

getData(function(n) {
    console.log("callback函数被调用了");
    console.log(n);
});