<template>
    <!-- Vue入口文件 -->
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
    // 引入子组件
    import School from "./School.vue";
    import Student from "./Student.vue";

    export default {
        name: 'App',
        components: {
            // 注册子组件
            School,
            Student
        }
    }
</script>