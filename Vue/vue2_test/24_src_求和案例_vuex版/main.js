import Vue from 'vue';
import App from './App';

/*
  Vuex
    1. 概念：
      (1) 在Vue中实现集中式状态（数据）管理的一个Vue插件；
      (2) 对Vue应用中多个组件共享状态进行集中式的管理（读/写）也是一种组件通信的方式 且适用于任意组件间通信；
    2. 何时使用？
      多个组件需要共享数据时；
    3. 搭建 Vuex 环境：
      (1) 创建文件夹：src/store/index.js；
      (2) 引入 Vue核心库 再引入 Vuex插件 然后使用 Vuex插件；
      (3) 使用方法：
        const actions = {} // 响应组件中的动作 行为
        const mutations = {} // 用于操作数据 state
        const state = {} // 存储数据

        new Vuex.Store({ // 注意 Vuex是一个构造函数
          actions,
          mutations,
          state,
        })
    4. import 语句在脚手架会有提升功能
    5. 必须在 new Vue之前 创建存储实例使用 Vuex
    6. 在main.js中创建vm时传入store配置项 传入store配置项过后 所有组件身上就会有一个 $store的方法
    7. 组件中读取 Vuex的状态数据：this.$store.state
    8. 组件中修改 Vuex中的数据：this.$store.dispatch('actions中的方法名'，载荷数据) 或 this.$store.commit('mutations中的方法名'，载荷数据)
    9. 若没有网络请求或其他业务逻辑 组件中也可以越过actions 即不写dispatch 直接编写commit
*/


// 引入 store文件
import store from './store'; // 默认选中store文件里面的index.js文件 

Vue.config.productionTip = false;

new Vue({
  // 挂载节点
	el:'#app',
  // 使用Vuex 注册store 才会有$store方法
  store,
	render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
})