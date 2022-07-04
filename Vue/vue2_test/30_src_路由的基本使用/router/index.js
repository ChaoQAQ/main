// 该文件专门用于创建整个应用（页面）的路由器
/*
    路由：
        1. 安装Vue路由器插件库 命令：vue-router@3 默认现在是4版本 4版本只能在vue3中使用
        2. 引入并应用插件： Vue.use(VueRouter) 
        3. 创建路由器 一个路由器router 里面管理多个路由route VueRouter 路由器 可以当构造函数来使用
        4. new VueRouter({
                routes: [ // 一堆路由
                    { // 单个路由
                        path: '/xxx', // 路由路径 key
                        component: xxx组件 // 路由匹配的组件 value
                    },
                ]
            })
        5. 每个路由是由一组 key value组成 路径是key 组件是value 路由器router会监视url路径的变化
        6. Vue中借助 router-link 标签实现路由的切换 link 链接 router-link标签解析时转换成了 a标签
                <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
           active-class 是该路由链接被激活时添加的类名 to 到path路径
        7. 指定组件的呈现位置是通过 <router-view></router-view> 标签 view 视图
            
*/
// 引入 vue-router 路由器
import VueRouter from 'vue-router';

// 引入组件
import About from '../components/About';
import Home from '../components/Home';

// 创建并暴露一个路由器 vue-router是一个构造函数
export default new VueRouter({
    // 路由是一个路由器管多个组件
    routes: [ 
        { // 一个路由 route 每个路由映射一个组件
            path: '/about', // url路径
            component: About // 需要跳转到的组件
        },
        {
            path: '/home',
            component: Home
        }
    ]
})