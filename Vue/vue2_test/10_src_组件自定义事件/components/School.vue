<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h1 @click="add">{{number}}</h1>
        <button @click="sendSchoolName">点击发送学校名称</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前School组件的实例对象</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京',
                number: 0
            }
        },
        methods: {
            sendSchoolName() {
                // 调用组件实例对象上的$emit方法 $emit调用自定义事件 可以进行传参
                // vm.$emit(自定义事件名, 传递的参数) emit 发出 射出
                // vm.$emit( eventName, […args] )
                // 触发当前实例上的事件 附加参数都会传给监听器回调
                this.$emit('atguigu', this.name, 666, 888,);
                // this.$emit('demo');
                // this.$emit('click');
            },
            unbind() {
                // vm.$off( [event, callback] ) off关 移除自定义事件监听器
                this.$off('atguigu'); // 解绑单个事件 移除单个事件的监听器
                // this.$off('atguigu', this.getSchoolName); // 移除该事件的回调函数
                // this.$off(['atguigu', 'demo']); // 解绑多个事件 移除多个事件的监听器
                // this.$off(); // 解绑所有事件 移除所有事件的监听器
            },
            death() {
                this.$destroy(); // 销毁了当前School组件的实例对象 销毁后所有的School组件实例的自定义事件全都不奏效
            },
            add() {
                this.number++
                console.log('add触发了');
            }
        },
    }
</script>

<style lang="less" scoped>
    .school {
        background-color: skyblue;
        margin-top: 5px;
        padding: 5px;
    }
</style>    

