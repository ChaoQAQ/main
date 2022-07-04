// 引入Vue运行版文件
import Vue from 'vue';

// 引入App.vue入口文件
import App from './App.vue';

// 引入插件文件
import plugins from './plugins';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 注册全局插件
Vue.use(plugins, 1);

// 创建vm
new Vue({
  // 挂载节点
	el:'#app',
  // 注册组件App
	render: h => h(App)
})