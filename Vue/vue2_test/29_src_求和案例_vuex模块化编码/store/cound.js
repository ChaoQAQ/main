// 求和相关配置 默认暴露
export default {
    // 模块开启命名空间 默认false
    namespaced: 'true',
    actions: {
        // 对于模块内部的 action 局部状态通过 context.state 暴露出来 
        jiaOdd(context, payload) { 
            console.log('actions里面的jiaOdd被调用了', context, payload);

            // context.rootState读取（全局）跟节点状态
            // console.log(context.rootState.personOptions.personList);

            // context.rootGetters读取（全局）跟节点getter函数
            // console.log(context.rootGetters['personOptions/firstPersonName']);

            if (context.state.sum % 2) { 
                context.dispatch('JiaOdd', payload);
            }
        },
        JiaOdd(context, payload) {
            setTimeout(() => {
                context.commit('JIAODD', payload); 
            }, 500)
        },
        jiaWait(context, payload) {  
            console.log('actions里面的jiaWait被调用了', context, payload);
            setTimeout(() => {
                context.commit('JIAWAIT', payload);
            }, 500)
        }
    },
    mutations: {
        // 模块内部的 mutation 接收的第一个参数 state 是该模块的局部状态对象
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
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端'
    },
    getters: {
        // 模块内部的 getter接收的第一个参数 state是该模块的局部状态对象 
        bigSum(state, getters, rootState, rootGetters) {

            // 第三个参数 rootState为根节点（全局）状态state
            // 第四个参数 rootGetters为根节点（全局）的Getter
            console.log(state, getters, rootState, rootGetters);

            return state.sum * 10;
        }
    }
}