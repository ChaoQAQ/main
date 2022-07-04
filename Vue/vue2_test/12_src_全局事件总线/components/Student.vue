<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '张三',
                age: 18,
            }
        },
        methods: {
            getName(schoolName) {
                console.log('student收到了学校名称：', schoolName);
            }
        },
        mounted() {
            this.$bus.$on('hello', this.getName);
        },
        beforeDestroy() {
            this.$bus.$off('hello'); // 在该组件销毁之前解绑$bus组件在该组件上添加的事件
        },
    }
</script>

<style scoped>
    .student {
        background-color: pink;
        padding: 5px;
    }
</style>

