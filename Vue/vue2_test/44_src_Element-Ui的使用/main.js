import Vue from 'vue';
import App from './App';

// 引入 ElementUI 插件库 
// import ElementUI from 'element-ui';
// 引入 element-ui 样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入 ElementUI
import {Row, Button} from 'element-ui';

Vue.config.productionTip = false;

// 应用 ElementUI 插件
// Vue.use(ElementUI);

// 按需使用插件 按需引入时 css会自动给我们引入
Vue.use(Button)
Vue.use(Row)

new Vue({
	el:'#app',
	render: h => h(App),
})