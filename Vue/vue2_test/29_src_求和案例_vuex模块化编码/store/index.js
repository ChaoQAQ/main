import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 引入count相关配置信息
import countOptions from './cound';
// 引入person相关配置信息
import personOptions from './person';

// 默认情况下 模块内部的 action 和 mutation 是注册在全局命名空间的 使得多个模块能够对同一个 action 或 mutation 作出响应
// Getter 同样也默认注册在全局命名空间
// 添加 namespaced:true 使其成为带命名空间的模块 当模块被注册后 它的所有 getter、action、mutation、state 都会自动根据模块注册的路径调整命名
// 开启用了命名空间的 getter、action、mutation、state会收到局部化的 getter、dispatch、commit、state

/*
    模块化+命名空间：
        1. 目的：让代码更好维护 让多种数据分类更加明确
        2. 修改store.js:
            const countOptions = {
                namespaced: true, // 开启命名空间 默认false
                state: {...}, 
                actions: {...},
                mutations: {...},
                getters: {...},
            }

            const personOptions = {
                namespaced: true, // 开启命名空间 默认false
                state: {...}, 
                actions: {...},
                mutations: {...},
                getters: {...},
            }

            const store = new Vuex.Store({
                modules: { 
                    countOptions, // 模块空间注册
                    personOptions
                }
            })

        3. 开启命名空间后 组件中读取 state 数据：
            // 方式一：自己读取
            this.$store.state.personOptions.personList
            // 方式一：借助 mapState 读取：
            ...mapState('countOptions', ['sum', 'school', 'subject']) // 计算属性名与state状态里面的数据名相同才用数组

        4. 开启命名空间后 组件读取 getters 数据：
            // 方式一：自己读取
            this.$store.getters['personOptions/personList'] // 采用读取对象属性的第二种写法 因为使用了/ obj['xxx']
            // 方式一：借助 mapGetters 读取：
            ...mapGetters('countOptions', ['bigSum']) 

        5. 开启命名空间后 组件中调用 dispatch：
            // 方式一：自己直接调用dispatch
            this.$store.dispatch('personOptions/addPersonWang', person)
            // 方式一：借助 actions 读取：
            ...mapActions('countOptions', {incrementOdd: 'jiaOdd', incrementWite: 'jiaWait'})

        6. 开启命名空间后 组件中调用 commit：
            // 方式一：自己直接调用dispatch
            this.$store.commit('personOptions/ADD_PERSON', person)
            // 方式一：借助 actions 读取：
            ...mapActions('countOptions', {incrementOdd: 'JIA', incrementWite: 'JIAN'})
*/

// 创建并暴露 store 
export default new Vuex.Store({ 
    // modules 模块
    modules: {
        // 模块名字 与 对应的 配置对象
        countOptions, // 注册模块
        personOptions
    }
})


