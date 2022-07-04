import Vue from 'vue';
import App from './App';

// 引入 store文件
import store from './store'; // 默认选中store文件里面的index.js文件 

Vue.config.productionTip = false;

new Vue({
	el:'#app',
  // 使用Vuex 注册store 才会有$store方法 
  store,
	render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})