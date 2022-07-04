<template>
  <!-- 
    Vue脚手架配置开发代理服务器：
        方法一：
            在vue.config.js中添加如下配置：
                devServer: {
                    proxy: 'http://localhost:5000' // 设置开发代理服务器向另一台服务器发送请求的地址
                }
            声明：
                1. 优点：配置简单 请求资源时直接发给前端（8080）即可；
                2. 缺点：不能配置多个代理 不能灵活的控制请求是否走代理；
                3. 工作方式：若按照上述配置代理 当请求了前端不存在的资源时 那么请求会转发给服务器（优先匹配前端资源）；
                备注：vue脚手架前端资源在public文件夹下 里面所有的内容都是vue脚手架代理服务器的内容；
        方法二：
            编写vue.config.js配置具体代理规则：
                module.exports = {
                    devServer: {
                        proxy: {
                            '/api1': { // 匹配所有以 '/api1'开头的请求路径
                                target: 'http://localhost:5000',// 代理目标的基础路径
                                ws: true, // 用于是否支持 websocket 默认 true
                                changeOrigin: true, // 是否改变代理服务器发送请求的端口号 true为目标1服务器的端口号 false为代理服务器端口号
                                pathRewrite: {'^/api1': ''}, // 路径重写 将以/api1开头的重写成空字符串 以方便请求地址准确
                                secure: true // 接收对方是https的接口
                            },
                            '/api2': {// 匹配所有以 '/api2'开头的请求路径
                                target: 'http://localhost:5001',// 代理目标的基础路径
                                changeOrigin: true,
                                pathRewrite: {'^/api2': ''}
                            }
                        }
                    }
                }
                ws 默认值 true
                changeOrigin 默认值为 true   
            说明：
                1. 优点：可以配置多个代理 且可以灵活的控制请求是否走代理；
                2. 缺点：配置略微繁琐 请求资源时必须加前缀；    
 -->
  <div>
    <button @click="getStudents">点击获取学生消息</button>
    <button @click="getCars">点击获取汽车消息</button>
  </div>
</template>

<script>
// 引入axios文件 npm i axios
import axios from "axios";

export default {
  name: "Student",
  methods: {
    getStudents() {
      // public文件夹下所有内容都是开发代理服务器的内容 先在开发代理服务器上找资源 没有找到就向另一台服务找
      // 同源策略 协议 主机域名 端口号 一致 这里向开发代理服务器 发送 请求 服务器与服务器之间通信不存在跨域问题
      // 本机端口默认8080
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log(response.data); // 拿到响应成功的数据
        },
        (error) => {
          console.log(error.message); // 拿到响应失败的信息
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/atguigu/cars").then(
        (response) => {
          console.log(response.data); // 拿到响应成功的数据
        },
        (error) => {
          console.log(error.message); // 拿到响应失败的信息
        }
      );
    },
  },
};
</script>

