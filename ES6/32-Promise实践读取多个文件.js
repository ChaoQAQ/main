// 引入 fs 模块
const fs = require("fs");

// fs.readFile('./01-let关键字.html', (err, data1) => {
//     fs.readFile('./02-const关键字.html', (err, data2) => {
//         fs.readFile('./03-数组解构.html', (err, data3) => {
//             let result = data1 + data2 + data3;
//             console.log(result);
//         })
//     })
// })

// 使用 Promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile('./01-let关键字.html', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./02-const关键字.html', (err, data) => {
            resolve([value, data]);
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./03-数组解构.html', (err, data) => {
            value.push(data);
            resolve(value);
        })
    })
}).then(value => {
    console.log(value.toString());
})