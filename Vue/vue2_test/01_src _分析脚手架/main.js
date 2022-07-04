//	该文件是整个项目的入口文件

// 引入Vue 这里用的是ES6语法引入的 是一个残缺版Vue.js 名为vue.runtime.esm.js 里面没有模板解析器
import Vue from 'vue'

/*
  关于不同版本的Vue：

    1. Vue.js与Vue.runtime.esm.js的区别：
      (1) Vue.js是完整版的Vue 包含：核心功能+模板解析器；
      (2) Vue.runtime.esm.js是运行版的Vue 只包含：核心功能 没有模板解析器；

    2. 因为Vue.runtime.esm.js没有模板解析器 所有不能使用template配置项 
       需要使用render函数接受到的createElement函数去指定具体内容；
       
*/

// 引入App组件 它是所有组件的父组件
import App from './App'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象------vm
new Vue({
  // render 提供 接受一个createElement函数 调用这个函数传入App组件
  render: h => h(App), // 调用createElement函数渲染App组件

    // render函数 字符串模板的代替方案 该渲染函数接收一个 createElement 方法作为第一个参数用来创建 VNode

    // 如果组件是一个函数组件 渲染函数还会接收一个额外的 context 参数 为没有实例的函数组件提供上下文信息

    // template: `<App></App>` // 引入的运行版Vue.js没有模板解析器功能所以不能使用template配置项

    // 1. render的作用：会return一个虚拟DOM return什么该组件就渲染什么
    // 2. 第一个参数返回一个函数
    // 2. 第二个参数 context 可以拿到外部组件传进来的数据，如 prop、slots等

    // render: function(createElement, context) {
    // return console.log(typeof createElement); // function
    // return console.log(typeof context); // undefined
    // return createElement('h2', '你好') // 调用这个函数

    // createElement 三个参数
    // 1. 第一个参数可以是一个HTML标签字符串 组件选项对象或者是解析标签或者组件的一个 async 异步函数 必须参数
    // 2. 第二个参数 虚拟DOM标签体内的内容 可选参数
    // 3. 第三个参数 是子虚拟节点 支持字符串与数组 可选参数 
    // }

}).$mount('#app')
