// 引入Vue运行版文件
import Vue from 'vue';

// 引入App.vue入口文件
import App from './App';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

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