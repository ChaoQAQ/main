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
	render: h => h(App),
  mounted() {
    setTimeout(() => {
      this.$destroy(); // 销毁vm
    }, 3000)
  }
})