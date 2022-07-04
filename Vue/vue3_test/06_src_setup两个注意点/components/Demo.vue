<template>
<!-- 
    setup函数的两个注意点
        1. setup函数的执行时机
            在beforeCreate之前执行一次 且this是undefined
        2. setup函数收到的参数
            (1) props：值为对象 包含：组件外部传递过来 且组件内部声明接受了的属性
            (2) context：上下文对象
                attrs：值为对象 包含：组件外部传递过来 但没有在props配置中声明接受的属性 相当于Vue2中的this.$attrs
                slots：收到的插槽内容 相当于Vue2中的this.$slots
                emit：分发自定义事件的函数 相当于Vue2中的this.$emit
        3. 备注：
            Vue3里props接受过来的数据会变成一个Proxy的代理对象 
            在Vue3里父组件传递了信息 子组件不声明全部接受会发出警报
            Vue3需要用 emits配置对象 声明接受组件的自定义事件 否则会发出警报
 -->
  <h1>一个人的信息</h1>
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <slot name="qwe"></slot>
  <button @click="test">测试触发一下Demo组件的hello事件</button>
</template>

<script>
// 引入 Vue3中的reactive函数 reactive响应式
import { ref, reactive } from "vue";

export default {
    name: "Demo",
    emits: ['hello'], // Vue3需要声明接受组件的自定义事件 否则会发出警报
    // Vue3里props接受过来的数据会变成一个Proxy的代理对象
    props: ['msg', 'school'], // 在Vue3里父组件传递了信息 子组件不声明全部接受会发出警报
    setup(props, context) { // setup函数执行时机 在beforeCreate之前执行一次 this是undefined
        console.log(props, context);  
        console.log(context.attrs); // 相当于Vue2中的$attrs 接收props没有接受的数据
        console.log(context.emit); // 触发自定义事件
        console.log(context.slots); // 插槽

        // 将数据包装在一个对象里 在用reactive函数做响应式
        let person = reactive({
            name: "张三",
            age: 18,
        }); 

        // 方法
        function test() {
            context.emit('hello', 666); // 触发自定义事件 传递参数
        }

        // setup若返回值是一个对象 则该对象中的属性和方法在模板中均可以直接使用（重点关注）
        return {
            person,
            test
        };
    },
};
</script>
