<template>
  <div>
    <!-- Vue入口文件 -->
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// 引入子组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    // 注册子组件
    School,
    Student,
  },
};
</script>

<style>
</style>
