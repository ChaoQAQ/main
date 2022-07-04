import axios from "axios";
import { nanoid } from "nanoid";

// 人员信息相关配置 默认暴露
export default {
    namespaced: 'true', // 开启命名空间
    actions: {
        addPersonWang(context, payload) {
            // indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
            // indexOf(目标元素，起始索引号（包括当前索引）) 没有找到返回-1 找到了返回索引号 默认从索引号0开始找
            if(payload.name.indexOf('王') === 0) { // 查找王 并且索引号等于0 
                context.commit('ADD_PERSON', payload);
            }else {
                alert('添加的人员以王子开头');
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON', {id: nanoid(), name: response.data});
                }, error => {
                    alert(error.message);
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, payload) {
            state.personList.unshift(payload);
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ]
    },
    getters: {
       firstPersonName(state) {
            return state.personList[0].name;
       }
    }
}