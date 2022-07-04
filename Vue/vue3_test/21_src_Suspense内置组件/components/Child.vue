<template>
  <div class="child">
    <h1>我是Child组件</h1>
    {{sum}}
  </div>
</template>

<script>
  import {ref} from 'vue';
  export default {
    name: 'Child',
    setup() {
      let sum = ref(0);

      // 返回Promise结果之前 该组件拿不到返回的数据 所以使用该组件没有显示 
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({sum}) // 返回成功的对象
        }, 1000)
      })
    }
  }
</script>

<style scoped>
  .child {
    background-color: skyblue;
    padding: 10px;
  }
</style>