// 该文件用于创建 Vuex 中最为核心的 store

// 下载 Vuex npm i vuex@3 2.0Vue用vuex@3 3.0Vue用vuex@4

// 必须调用Vue 在创建存储实例之前使用 Vuex

// 1. 引入 Vue Vuex
import Vue from 'vue';
import Vuex from 'vuex';

// 2. 使用 Vuex 插件
Vue.use(Vuex);

// Action 提交给的目标是 mutation 而不是直接变更状态 Vuex开发工具监测的是mutations 所以Action 可以包含任意异步操作
// Action 通过 调用$store 里面的 dispatch 方法触发
// Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象 小型store 
// 所以action函数可以链式调用action函数处理复杂业务逻辑 提高代码复用率跟维护
// actions 里面也能改变state里面的状态 视图也会更新 但是不会被Vuex开发者工具监测到 所以一般都是用来访问 state状态不做修改 

// 准备 actions 用于响应组件中的动作
const actions = { // 注意是对象 里面都是 key value 形式
    // 当组件调用了 $store 里面的 dispatch方法 actions就应该有一个呼应名字的函数 
    jiaOdd(context, payload) { 
        // context 上下文的意思 里面也有dispatch commit state 所以可以在函数里继续调用dispa执行action处理复杂的业务逻辑 提升代码复用率 便于维护
        console.log('actions里面的jiaOdd被调用了', context, payload);
        if (context.state.sum % 2) { // context里面有state
            // context.commit('JIAODD', payload); 
            context.dispatch('JiaOdd', payload);
        }
    },
    JiaOdd(context, payload) {
        // actions里面能执行异步任务 所以业务逻辑在actions里面做
        setTimeout(() => {
            context.commit('JIAODD', payload); 
        })
    },
    jiaWait(context, payload) {  
        console.log('actions里面的jiaWait被调用了', context, payload);
        setTimeout(() => {
            context.commit('JIAWAIT', payload);
        }, 500)
    }

} // 行动 行为

// Vuex 中所有的状态更新的唯一途径都是 mutation | 异步操作通过 Action来提交mutation实现 这样使得我们可以方便地跟踪每一个状态的变化 
// 一条重要的原则就是要记住 mutation 必须是同步函数下 因为当mutation函数触发时 回调函数还没有被调用 
// devtools不知道什么时候回调函数实际上被调用 实质上任何在回调函数中进行的状态的改变都是不可追踪的
// 所以 mutation 必须是同步函数 从而让我们能够实现 Vuex开发工具 帮助我们更好地了解我们的应用 
// 每个mutation执行完成后都会对应到一个新的状态变更 这样devtools 就可以打个快照存下来 然后就可以实现 time-travel 了

// 每个 mutation 都有一个字符串的事件类型 type 相当于当前事件的唯一标识 需要用 store里面的 commit 触发它 
// 每个 mutation 都有一个回调函数 handler 这个回调函数就是我们实际进行状态更改的地方 并且它会接受 state 作为第一个参
// 同时他也支持额外参数的传入 额外参数的术语叫'载荷' 大多数情况下 载荷是一个对象形式

// 准备 mutations 用于操作数据（state）
const mutations = {
    JIA(state, payload) {
        console.log('mutations里面的JIA被调用了', state, payload);
        state.sum += payload;
    },
    JIAN(state, payload) {
        console.log('mutations里面的JIAN被调用了', state, payload);
        state.sum -= payload;
    },
    JIAODD(state, payload) {
        console.log('mutations里面的JIAODD被调用了', state, payload);
        state.sum += payload;
    },
    JIAWAIT(state, payload) {
        console.log('mutations里面的JIAWAIT被调用了', state, payload);
        state.sum += payload;
    }
} // 转变 改变

// Vuex 使用单一状态树 用一个对象就包含了全部的应用层级状态 是一个唯一数据源 每个应用将仅仅包含一个 store 实例
// 单一状态树让我们能够直接地定位任一特定的状态片段 在调试的过程中也能轻易地取得整个当前应用状态的快照
// 存储在 Vuex 中的数据和 Vue 实例中的 data 遵循相同的规则 状态对象必须是纯粹 明显清楚的(plain) 的
// Vuex 的状态存储是响应式的 被监视的 从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
// 计算属性所依赖的数据发生改变时就会重新计算 并且触发更新相关的 DOM
// Vue通过使用Vuex的store插件将 store 实例从根组件 “注入” 到所有的子组件里 且子组件能通过 this.$store 访问
// 使用Vuex后 组件仍然可以保存局部自己用的状态到自身


// 准备 state 用于存储数据
const state = {
    sum: 0
} // 状态 数据

// 3. 创建并暴露 store 仓库 百货商店
export default new Vuex.Store({ // Store 是Vuex里的严格构造函数
    // component.$store => dispatch => actions => commit => mutations => mutate => state => render => component
    // 可以跳过dispatch 直接commit 调用 mutations 对 state 修改 state 是跟 vm 里面的 data 一样被监视的 被修改后自动重新渲染模板
    actions,  // actions里面的行为 Vuex开发工具监测不到 可以执行异步
    mutations, // mutations 不能省略 因为Vue开发工具监测的就是 mutations里面对state的行为 当mutations一操作state 就会被监视到

    state
})


    