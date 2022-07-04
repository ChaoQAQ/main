/*
mixin(混入)
    功能：可以把多个组件共用的配置提取成一个混入对象；
    使用方式：
        第一步定义混合 例如：
            {
                data() {...},
                methods: {...},
                ...
            }
        第二步使用混入 例如：
            (1) 全局混入：Vue.mixin(xxx);
            (2) 局部混入： mixins: ['xxx];
        备注： 当组件和混入对象含有同名时 数据对象在内部会进行递归合并 发生冲突时以组件数据优先；
               同名钩子函数将合并为一个数组 都会被调用 混入对象的钩子将在组件自身钩子之前调用；
               值为对象 例如 methods、components 和 directives 将被合并为同一个对象 两个对象键名冲突时 取组件对象的键值对；
               全局混入对象会影响之后的每一个Vue实例 包括vm 组件实例；
 */

export const mixin1 = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    data() {
        return {
            x: 11,
            y: 22
        }
    },
    mounted() {
        console.log('你好啊hunhe1');
    }
}
export const mixin2 = {
    methods: {
        showName() {
            alert('哈哈哈'); // 多个混合中相同属性执行后面的属性
        }
    },
    data() {
        return {
            x: 110,
            y: 220
        }
    },
    mounted() {
        console.log('你好啊hunhe2');
    }
}