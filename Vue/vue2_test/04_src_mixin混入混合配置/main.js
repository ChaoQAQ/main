// 引入Vue运行版文件
import Vue from 'vue';

// 引入App.vue入口文件
import App from './App.vue';
// 引入混入文件 mixin
import {mixin1, mixin2} from './mixin';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 注册全局混合 混入 mixin配置
Vue.mixin(mixin1);
Vue.mixin(mixin2);

// 创建vm
new Vue({
  // 挂载节点
	el:'#app',
  // 注册组件App
	render: h => h(App)
})