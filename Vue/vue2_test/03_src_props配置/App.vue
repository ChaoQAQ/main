<template>
  <div>
    <!-- 利用v-bind绑定age属性 让引号里面的值变成动态的数据 18 就不再是字符串18了 -->
    <Student name="张三" :age="18" sex="男" />
  </div>
</template>

<script>
  // 引入组件
  import Student from "./components/Student";
  
  export default {
    // 组件名配置
    name: "App",
    // 注册组件配置
    components: {
      Student,
    },
  };
</script>
