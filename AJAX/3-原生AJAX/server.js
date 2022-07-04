// 1. 引入 express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    // 设置响应体
    response.send('hello AJAX');
});

// ie缓存
app.get('/ie', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    // 设置响应体
    response.send('hello IE 3');
});

// jquery
app.all('/jquery', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    response.setHeader('Access-Control-Allow-Headers', '*'); // * 表示可以接收所有类型的响应头
    const data = {name: 'atguigu'}
    // 设置响应体
    response.send(JSON.stringify(data));
});

// axios
app.all('/axios', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    response.setHeader('Access-Control-Allow-Headers', '*'); // * 表示可以接收所有类型的响应头
    const data = {name: 'atguigu'}
    // 设置响应体
    response.send(JSON.stringify(data));
});

// fetch
app.all('/fetch', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    response.setHeader('Access-Control-Allow-Headers', '*'); // * 表示可以接收所有类型的响应头
    const data = {name: 'atguigu'}
    // 设置响应体
    response.send(JSON.stringify(data));
});

// 延时响应
app.get('/delay', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    // 设置响应体
    setTimeout(function() {
        response.send('延时响应');
    }, 3000)
});

app.post('/server', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    // 设置响应体
    response.send('hello AJAX');
});

// all 是可以接收任何类型的请求 等等这个http类型的请求都可以接收
app.all('/server', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    response.setHeader('Access-Control-Allow-Headers', '*'); // * 表示可以接收所有类型的响应头
    // 设置响应体
    response.send('hello AJAX');
});

// jsonp服务
app.all('/jsonp', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: 'atguigu'
    };
    // 将数据转换为字符串
    const str = JSON.stringify(data);

    // 返回的是一个函数调用 这个函数的参数就是我们想给客户端的数据 但是前端必须先声明函数
    // end 不会加特殊响应头
    response.end(`handle(${str})`);
})

// 用户名检测是否存在
app.all('/check-username', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    // 将数据转换为字符串
    const str = JSON.stringify(data);

    // 返回的是一个函数调用 这个函数的参数就是我们想给客户端的数据 但是前端必须先声明函数
    // end 不会加特殊响应头
    response.end(`handle(${str})`);
})

// jquery-jsonp
app.all('/jquery-jsonp', (request, response) => {
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷',
        city: ['北京', '上海', '武汉']
    };
    // 将数据转换为字符串
    const str = JSON.stringify(data);
    // 接收 callback 参数 作为函数调用的函数去拼接字符串 就是有这个url参数我就返回数据
    let cb = request.query.callback;

    // 返回的是一个函数调用 这个函数的参数就是我们想给客户端的数据 但是前端必须先声明函数
    // end 不会加特殊响应头
    response.end(`${cb}(${str})`); // 返回的数据必须加小括号
})

// all 是可以接收任何类型的请求 等等这个http类型的请求都可以接收
app.all('/json-server', (requset, response) => { // 当发送请求 ulr的路径 请求行的第二段内容它的路径是 /server 就会执行中国回调函数里面的代码 并且response作出响应
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*'); // 头的名字 值是 * 
    response.setHeader('Access-Control-Allow-Headers', '*'); // * 表示可以接收所有类型的响应头

    // 响应一个数据
    const data = {
        name: 'atguigu'
    }
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体 send 只能接收字符串格式的参数
    response.send(str);
});

app.all('/cors', (request, response) => {
    // 设置响应头 
    // 设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 设置允许客户端发送各种请求头
    response.setHeader("Access-Control-Allow-Headers", "*");
    // 设置允许客服端发送所有请求方法
    response.setHeader("Access-Control-Allow-Method", "*");
    response.send('hello CORS');
})

// 4. 监听端口启动服务
app.listen(8080, () => {
    console.log('服务已经启动，8080 端口监听中...');
})