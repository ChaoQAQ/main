import Vue from 'vue';
import App from './App';

// 引入 VueRouter库
import VueRouter from 'vue-router';

// 引入 路由器
import router from './router';

// 应用 vue-router 插件库
Vue.use(VueRouter);

Vue.config.productionTip = false;

const vm = new Vue({
	el:'#app',
	render: h => h(App),
  // 注册 router 路由器 
  router: router
  // 注入路由器后 可以在任何组件内通过 this.$router 访问路由器 也可以通过 this.$route 访问当前路由
})
console.log(vm);