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
  setup() {
    // 数据
    let isShow = ref(true);   
    // 返回一个对象（常用）
    return {
      isShow
    }
  }
}
</script>
