// 入口js文件
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
    el: '#root',
    template: `<App></App>`,
    components: {
        App
    }
})