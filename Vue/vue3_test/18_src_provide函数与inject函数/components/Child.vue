<template>
  <div class="child">
    <h1>我是Child组件</h1>
    <h2>汽车的信息：{{name}}---{{price}}</h2>
    <button @click="price+='!'">点击修改汽车的价格</button>
    <Son/>
  </div>
</template>

<script>
  import {inject, toRefs, readonly, provide, ref} from 'vue';
  import Son from './Son';
  export default {
    name: 'Child',
    components: {Son},
    setup() {
      let person = ref('张三');
      provide('person', person);
      let car = inject('car');
      car = readonly(car); // 将该响应式对象变为只读的 限制当前组件不能修改
      return {
        ...toRefs(car)
      }
    }    
  }
</script>

<style scoped>
  .child {
    background-color: skyblue;
    padding: 10px;
  }
</style>