// onreadystatechange 事件
// on when 当...时候
// readystate 是 xhr 对象中的属性 表示状态 0表示未初始化 1表示open方法调用完毕 2表示send方法调用完毕 3服务端返回了部分的结果 4服务端返回了所有的结果
// change 改变 一共触发4次

// 当请求被发送到服务器时 就会执行服务端响应的任务 每当 readyState 的状态改变时 就会触发 onreadystatechange 事件

// readyState 属性有 XMLHttpRequest 的状态信息

// 下面是 XMLHttpRequest 对象的三个重要的属性

// onreadystatechange	该事件每当 readyState 属性的状态信息改变时 就会调用该函数

// readyState 有 XMLHttpRequest 的状态信息 从 0 到 4 发生变化

// 0: 请求未初始化

// 1: 服务器连接已建立

// 2: 请求已接收

// 3: 请求处理中

// 4: 请求已完成，且响应已就绪

// status 表示状态信息 200: "OK" 404: 未找到页面