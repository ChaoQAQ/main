<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
// import {mixin1, mixin2} from "../mixin"
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18,
                x: 100, // 跟 混入的属性名相同 组件属性优先
                y: 200
            }
        },
        mounted() {
            console.log('你好啊???');
        },
        // mixins: [mixin1, mixin2] // 先执行 混入的 mounted函数 在执行组件的mounted函数
    }
</script>

