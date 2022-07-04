<template>
  <div>
    <Student/>
  </div>
</template>

<script>
  // 引入组件
  import Student from "./components/Student";
  
  export default {
    // 组件名配置
    name: "App",
    // 注册组件配置
    components: {Student}
  }
</script>
