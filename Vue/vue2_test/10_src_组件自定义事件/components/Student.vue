<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点击发送学生姓名</button>
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
        props: ['getStutendName'],
        methods: {
            sendStudentName() {
                this.getStutendName(this.name);
            }
        },
    }
</script>

<style scoped>
    .student {
        background-color: pink;
        padding: 5px;
    }
</style>

