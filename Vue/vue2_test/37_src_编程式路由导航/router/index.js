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
        2. children里面的路由的path不用写 / children内部循环遍历时为我们加上了 /
        3. 路由跳转 to要写完整路径
    四、路由的query参数
        1. 传递参数
            (1) 跳转路由并携带query参数 to的字符串写法 
                <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> 
            (2) 跳转路由并携带query参数 to的对象写法 
                <router-link :to="{
                  path: '/home/message/detail',
                  query: {
                    id: m.id,
                    title: m.title
                  }
                }">
                  {{m.title}}
                </router-link>
        2. 接受参数
            通过组件身上的$route获取自身路由信息中的query参数 $route.query.id
    五、命名路由
        1. 使用命名路由 可以简化路由的跳转
        2. 配置路由时 传递name属性 跳转路由时 to写成对象形式 添加name属性取代path
    六、路由的params参数
        1. 使用 params传参时必须在配置路由时使用占位符声明接受 params参数
            path: 'detail/:id/:title', // 使用占位符声明接受 params参数
        2. params 传递参数 to的字符串写法
            <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->
        3. params 传递参数 to的对象写法
            <router-link :to="{
                name: 'detail',
                params: {
                    id: m.id,
                    title: m.title
                }
            }">
                {{m.title}}
            </router-link>
        5. 路由携带params参数时 若使用to的对象写法 则不能使用path配置项 必须使用name配置
    七、路由的props配置
        作用：让路由组件更方便的收到参数
            路由的props第一种写法 值为对象 该对象中所有key-value都会以props的形式传给Detail组件
                props: {a: 100, b: 100}

            路由的props第二种写法 值为布尔值 为true时 就会把该组件收到的所有params参数 以props的形式传给Detail组件
                props: true

            路由的props第三种写法 值为函数 返回结果以props的形式传给Detail组件 可以用于 params参数 与 query参数的传递 
                props($route) { // 接受当前组件自身的路由route为参数
                    return { // 返回值必须是一个对象
                        id: $route.params.id,
                        title: $route.params.title
                    }
                }
                props({query:{id, title}}) { // 对象解构赋值连续写法
                    return { // 返回值必须是一个对象
                        id,
                        title
                    }
                }
    八、<router-link>的 replace属性
        1. 作用：控制路由跳转时存在浏览器历史记录的模式
        2. 浏览器的历史记录有两种写入方式：分别是 push和 replace push是追加历史记录 replace是替换当前记录 路由跳转默认是push模式
        3. 如何开启 replace模式：<router-link replace></router-link> 或者 <router-link :replace="true"></router-link> 
    九、编程式路由导航
        1. 作用：不借助<router-link>实现路由跳转 而是使用路由器原型上的 push与replace方法 让路由跳转更加灵活
        2. 使用方法
            $router的两个api
            pushShow(m) {
                // console.log(this.$router); // 整个应用只有一个路由器
                this.$router.push({ // 路由器的原型上的方法 可以控制路由的跳转
                    name: 'detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                })
            },
            replaceShow(m) {
                this.$router.replace({
                    name: 'detail',
                    params: {
                        id: m.id,
                        title: m.title
                    }
                })
            } 
        3. 浏览器历史记录控制$router的三个api
            this.$router.back(); // 后退
            this.$router.forward(); // 前进
            this.$router.go(2); // 路由器中的go方法传递参数进行前进后退 正数前进 负数后退

*/

// 引入 vue-router 路由器
import VueRouter from 'vue-router';

// 引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

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
                    path: 'news', // 所有 children里面的 path路径都不用 +/ 内部循环遍历时为children 里面的路径添加了 /
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail', // 命名路由 简化路由跳转
                            // path: 'detail',
                            path: 'detail/:id/:title', // 使用占位符声明接受 params参数
                            component: Detail,

                            // 路由的props第一种写法 值为对象 该对象中所有key-value都会以props的形式传给Detail组件
                            // props: {a: 100, b: 100}

                            // 路由的props第二种写法 值为布尔值 为true时 就会把该组件收到的所有params参数 以props的形式传给Detail组件
                            // props: true

                            // 路由的props第三种写法 值为函数 返回结果以props的形式传给Detail组件 可以用于 params参数 与 query参数的传递 
                            props($route) { // 接受当前组件自身的路由route为参数
                                return { // 返回值必须是一个对象
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            }
                            // props({query:{id, title}}) { // 对象解构赋值连续写法
                            //     return { // 返回值必须是一个对象
                            //         id,
                            //         title
                            //     }
                            // }
                        }
                    ]
                }
            ]
        }
    ]
})