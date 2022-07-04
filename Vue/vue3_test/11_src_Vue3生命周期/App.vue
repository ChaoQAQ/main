<template>
  <Demo v-if="isShow"/>
  <button @click="isShow=!isShow">点击卸载/挂载Demo组件</button>
</template>

<script>
import { ref } from "vue";
import Demo from './components/Demo';
export default {
  name: "App",
  components: {Demo},
  // setup函数会在beforeCreate之前执行
  setup() {
    // 数据
    let isShow = ref(true);   
    // 返回一个对象（常用）
    return {
      isShow
    };
  },
  // 父组件的生命周期钩子会在子组件生命周期钩子之前执行
  /* beforeCreate() {
    console.log('---beforeCreate-App---');
  } */
};
</script>
