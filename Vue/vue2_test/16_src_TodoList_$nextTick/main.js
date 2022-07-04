// 引入Vue运行版文件
import Vue from 'vue';

// 引入App.vue入口文件
import App from './App.vue';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

/*
  $nextTick:
    1. 语法：this.$nextTick(回调函数);
    2. 作用：在下一次DDOM更新结束后执行其指定的回调函数；
    3. 什么时候用：当改变数据后 要基于更新后的新DOM进行某些操作时 要在nextTick所指定的回调函数中执行；
    备注：$nextTick方法回调函数中的this自动绑定在调用它的实例上 这里是this就是组件实例；
*/

// 创建vm
new Vue({
  // 挂载节点
	el:'#app',
  // 注册组件App
	render: h => h(App),
  // 在数据初始化之前
  beforeCreate() {
    // 安装全局事件总线专用组件$bus
    Vue.prototype.$bus = this;
  }
})