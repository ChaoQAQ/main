// 1. 引入 express
const express = require('express');

// 2. 创建应用对象
const app = express(); // 当callback为外部文件时，用req.app访问express的实例

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/', (requset, response) => { // get 获取指定 http请求头 以 / 开头
    // 设置相应
    response.send('hello express'); // 请求成功 响应报文传递数据 字符串格式 hello express 仅用于 POST 请求
});

// 4. 监听端口启动服务
app.listen(8001, () => {
    console.log('服务已经启动，访问地址为 http://127.0.0.1:8001');
})