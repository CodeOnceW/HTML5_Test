// 假设存储目录为 public/uploads/avatar

// 导入 path 模块
const path = require("path");

// 路径拼接语法
// path.join('路径1', '路径2', ...);

// 路径拼接
let finialPath = path.join('public', 'uploads', 'avatar');

// 打印拼接字符串
console.log(finialPath);