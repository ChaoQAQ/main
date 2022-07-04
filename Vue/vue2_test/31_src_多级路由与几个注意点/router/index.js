// 该文件专门用于创建整个应用（页面）的路由器
/*
    一、路由的基本使用：
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
    二、几个注意点：
        1. 路由组件通常存放在pages文件夹 一般组件通常存放在components文件夹
        2. 通过切换 隐藏了的路由组件 默认是被销毁的 需要的时候在去挂载
        3. 每个组件都有自己的 $route属性 里面存储着自己的路由信息
        4. 整个应用只有一个 router 可以通过组件的 $router属性获取到
    三、多级路由（嵌套路由）
        1. 多级路由 通过 children配置子路由
        2. 以 / 开头的嵌套路径会被当作根路径 所以使用嵌套组件而无须设置嵌套的路径 
        3. 路由跳转 to要写完整路径
*/
// 引入 vue-router 路由器
import VueRouter from 'vue-router';

// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';

// 创建并暴露一个路由器 vue-router是一个构造函数
export default new VueRouter({
    // 路由是一个路由器管多个组件
    routes: [ // 一级路由 routes
        { // 一个路由 route
            path: '/about', // url路径
            component: About // 需要跳转到的组件
        },
        {
            path: '/home',
            component: Home,
            children: [ // 通过 children配置子级路由
                {
                    path: 'news', // 以 / 开头的嵌套路径会被当作根路径 所以使用嵌套组件而无须设置嵌套的路径
                    component: News
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        }
    ]
})