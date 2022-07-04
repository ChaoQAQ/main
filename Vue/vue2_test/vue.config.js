const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭语法检查
  // 配置开发代理服务器（方式一）
  // devServer: {
  //   // 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到 'http://localhost:5000'
  //   proxy: 'http://localhost:5000' // proxy 代理
  // }

  // 配置开发代理服务器（方式二）
  devServer: {
    proxy: {
      '/api': { // 设置请求头前缀 是以/api开头就直接将请求信息发送到目标服务器 没有就先在代理服务器上找 没有找到才到目标服务器上找
        target: 'http://127.0.0.1:5000', // 设置目标服务器地址
        pathRewrite: {'^/api': ''}, // path路径 re重新 write写 将以/api开头的替换为空字符串 这样才能准确请求到目标服务器上指定的资源
        ws: true, // 用于是否支持 websocket 默认 true
        changeOrigin: true, // 用于决定该代理服务器发送请求头的host 端口号 Origin 起源 源头
        // true为目标服务器端口号 false时为该代理服务器端口号 默认true 为了避免目标服务器设置端口号限制
        secure: true // 接收对方是https的接口
      },
      '/atguigu': { 
        target: 'http://localhost:5001',
        pathRewrite: {'^/atguigu': ''}, 
        ws: true, 
        changeOrigin: true 
      },
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }
})
