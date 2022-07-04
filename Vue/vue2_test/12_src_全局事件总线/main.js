// 引入Vue运行版文件
import Vue from 'vue';

// 引入App.vue入口文件
import App from './App.vue';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 第一种写法 
// const Demo = Vue.extend({}); // 定义一个组件 VueComponent
// const d = new Demo(); // new 这个构造函数VueComponent 生成一个组件实例
// Vue.prototype.x = d; // 往Vue的原型对象上添加了一个组件

// 创建vm
new Vue({
  // 挂载节点
	el:'#app',
  // 注册组件App
	render: h => h(App),
  // 第二种写法 在数据初始化之前 bus总线 公交车
  beforeCreate() {
    // 往Vue的原型对象上添加一个组件
    Vue.prototype.$bus = this; // this 指向vm
  }
})
/*
  全局事件总线（GlobalEventBus）
    1. 一种组件间通信的方式 适用于任意组件通信；
    2. 安装全局事件总线：
      new Vue({
        ...
        beforeCreate() {
          Vue.prototype.$bus = this // 安装全局事件总线 $bus就是当前应用的vm
        }
        ...
      })
    3. 使用全局事件总线：
      (1) 接收数据：A组件想接收数据 则在A组件中给$bus绑定自定义事件 事件的回调留在A组件自身；
          methods: {
            demo(data) {...}
          }
          ......
          mounted() {
            this.$bus.$on('自定义事件名', 回调函数数据)
          }
      (2) 提供数据：this.$bus.$emit('自定义事件名', 数据);
    4. 最好在beforeDestory钩子中 用$off去解绑当前组件所用到的事件；
    5. 全局事件总线实现思路：添加一个组件 让所有组件都可以访问到它 并且这个组件上有vm或者组件实例对象上的方法属性
       所以添加在Vue的原型对象上 这样vm跟组件实例对象都能访问到 但是必须在数据初始化之前添加 因为组件实例会用到这个傀儡组件 
*/