// 引入Vue运行版文件
import Vue from 'vue';

// 引入App.vue入口文件
import App from './App.vue';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 创建vm
new Vue({
  // 挂载节点
	el:'#app',
  // 注册组件App
	render: h => h(App)
})
/*
  消息订阅与发布（pubsub）
    1. 一种组件间通信的方式 适用于任意组件间通信；
    2. 使用步骤：
      (1) 安装pubsub：npm i pubsub-js
      (2) 引入：import pubsub from 'pubsub-js'
      (3) 接收数据：A组件想接收数据 则A组件中订阅消息 订阅的回调留在A组件自身；
          methods: {
            demo(messageName, data) {...}
          }
          mounted() {
            this.pubid = pubsub.subscribe('消息名', this.demo) // 订阅消息
          }
    4. 提供数据：pubsub.publish('消息名', 数据)
    5. 最好在beforeDestory钩子中 用pubsub.unsubscribe(pubid)去取消订阅
*/
