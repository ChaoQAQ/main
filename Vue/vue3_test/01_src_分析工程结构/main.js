// Vue3引入的不再是Vue构造函数了 引入的是一个名为 createApp 的工厂函数 采用分别暴露
import { createApp } from 'vue';
import App from './App.vue';

// 创建应用实例对象——app(类似于之前Vue2中的vm 但app比vm更“轻”)
const app = createApp(App);

// 挂载 Vue3是mount Vue2是$mount
app.mount('#app');

console.log(app);

setInterval(() => {
    // 卸载 unmount
    app.unmount('#app');
}, 3000)

// createApp(App).mount('#app');
