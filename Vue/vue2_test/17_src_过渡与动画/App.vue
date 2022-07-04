<template>
  <div>
    <Test/>
    <Test2/>
    <Test3/>
  </div>
</template>

<script>
// 引入组件
import Test from './components/Test';
import Test2 from './components/Test2';
import Test3 from './components/Test3';

export default {
  // 组件名配置
  name: "App",
  // 注册组件配置
  components: {Test, Test2, Test3}
}
</script>