// 所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）

// XMLHttpRequest 用于在后台与服务器交换数据 这意味着可以在不重新加载整个网页的情况下 对网页的某部分进行更新

// 1. 创建 XMLHttpRequest 对象 该对象是浏览器的对象 是构造函数调用需要前面 ＋ new
const xhr = new XMLHttpRequest();

// 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
// new ActiveXObject("Microsoft.XMLHTTP");

// 2. AJAX 向服务器发送请求 使用 XMLHttpRequest 对象的 open() 和 send()方法

//  (1) open(method,url,async); 规定请求的类型 URL 以及是否异步处理请求
//      method：请求的类型 GET 或 POST
//      url：文件在服务器上的位置 该文件可以是任何类型的文件 在传回响应之前，能够在服务器上执行任务
//      async：true（异步）或 false（同步）XMLHttpRequest 对象如果要用于 AJAX 的话 其 open() 方法的 async 参数必须设置为 true
//      通过 AJAX JavaScript 无需等待服务器的响应，而是在等待服务器响应时执行其他脚本 当响应就绪后对响应进行处理 就实现了异步执行
//      不推荐 async=false 但是对于一些小型的请求 也是可以的 JavaScript 会等到服务器响应就绪才继续执行 如果服务器繁忙或缓慢 应用程序会挂起或停止

//  (2) send(string) 将请求发送到服务器
//      string：仅用于 POST 请求

// 3. GET 还是 POST？ 与 POST 相比 GET 更简单也更快 并且在大部分情况下都能用  然而 在以下情况中 请使用 POST 请求

//  (1) 不愿使用缓存文件（更新服务器上的文件或数据库）
//  (2) 向服务器发送大量数据（POST 没有数据量限制）
//  (3) 发送包含未知字符的用户输入时 POST 比 GET 更稳定也更可靠

// 4. GET 请求
//  (1) 为了避免重复请求得到缓存的结果 向 URL 添加一个随机数唯一的 ID
//  (2) 如果想通过 GET 方法发送信息 就在 URL 添加信息 以 ？ 后面 采用键值对形式 a=1 多个信息以 & 符分隔开 
xhr.open("GET", "http://127.0.0.1:8001/server?t="+ Math.random()+'&fname=Henry&lname=Ford', true); 
xhr.send();

// 5. POST 请求
//  (1) 一个简单的 POST 请求
// xhr.open("POST", "http://127.0.0.1:8001/server", true);
// xhr.send();

//  (2) 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据 
xhr.open("POST", "http://127.0.0.1:8001/server", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send("fname=Henry&lname=Ford");

// 6. setRequestHeader(header, value) 方法 向请求添加 HTTP 头
// header: 规定头的名称 Content-type
// value: 规定头的值 application/x-www-form-urlencoded