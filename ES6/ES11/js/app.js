// 静态引入 import 
// import * as m1 from "./hello.js";

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    // m1.hello();
    // import() 方法动态引入文件 异步任务执行时引入 可以提升页面资源加载效率 返回一个 promise 对象 调用 then 方法
    import('./hello.js').then(module => {
        module.hello();
    })

})