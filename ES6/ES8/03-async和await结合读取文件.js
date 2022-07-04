// 1. 引入 fs 模块
const fs = require("fs");

// 2. 读取 文件
function f1 () {
    // 必须返回一个 Promise 对象 来获取状态
    return new Promise((resolve, reject) => {
        fs.readFile("./01-async函数的介绍.html", (err, data) => {
            // 如果失败就执行失败回调
            if (err) reject(err);
            // 如果成功就执行成功回调
            resolve(data); 
        })
    })
}

function f2 () {
    // 必须返回一个 Promise 对象 来获取状态
    return new Promise((resolve, reject) => {
        fs.readFile("./02-await操作符表达式.html", (err, data) => {
            // 如果失败就执行失败回调
            if (err) reject(err);
            // 如果成功就执行成功回调
            resolve(data); 
        })
    })
}

// 3. 异步读取文件
async function main () {
    // 读取 f1 内容
    let fn1 = await f1(); // 如果 Promise 处理异常，则异常值被抛出
    // 读取 f2 内容
    let fn2 = await f2();
    console.log(fn1.toString());
    console.log(fn2.toString());
}
main();