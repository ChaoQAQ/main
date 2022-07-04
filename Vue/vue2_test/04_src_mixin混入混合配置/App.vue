<template>
  <div>
    <Student/>
    <School/>
  </div>
</template>

<script>
  // 引入组件
  import Student from "./components/Student";
  import School from "./components/School";
  
  export default {
    // 组件名配置
    name: "App",
    // 注册组件配置
    components: {
      Student,
      School
    },
  };
</script>
