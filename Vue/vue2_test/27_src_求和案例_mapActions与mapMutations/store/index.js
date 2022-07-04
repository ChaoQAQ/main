import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 准备 actions 用于响应组件中的动作
const actions = { 
    jiaOdd(context, payload) { 
        console.log('actions里面的jiaOdd被调用了', context, payload);
        if (context.state.sum % 2) { 
            context.dispatch('JiaOdd', payload);
        }
    },
    JiaOdd(context, payload) {
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

} 

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
}

// 准备 getters 用于将 state中的数据进行加工
const getters = {
    // 当多个组件 需要对state进行加工时用到此属性
    // getter函数类似于计算属性 调用该函数 该函数就返回值 需要return Vue2.0的getter具有缓存特点 3.0不再像计算属性那样缓存起来了
    // getters里面的函数接受两个参数 第一个是state状态 第二个是getters里面的函数 
    bigSum(state, getters) {
        console.log(state, getters);
        return state.sum * 10;
    }
} 
/* 
  getters的使用：
    1. 概念：当多个组件需要对state中的数据进行加工后在使用时 可以使用getters加工
    2. 在store.js 中追加 getters配置
        准备 getters配置
        const getters = {
            bigSum(state, getters) {
                return state.sum * 10;
            }
        }
        创建并暴露 store
        export default new Vuex.Store({
            ......
            getters 
        })
    3. 组件中读取数据：this.$store.getters.bigSum
*/

// 准备 state 用于存储数据
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
} 

// 3. 创建并暴露 store 
export default new Vuex.Store({ 
    actions,  
    mutations, 
    state,
    // 配置getters
    getters
})


