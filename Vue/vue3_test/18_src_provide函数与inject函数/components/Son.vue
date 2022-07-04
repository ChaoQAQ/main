<template>
  <div class="son">
    <h1>我是Son组件</h1>
    <h2>汽车的信息：{{car.name}}---{{car.price}}</h2>
    <button @click="car.price+='!'">点击修改汽车的价格</button>
  </div>
</template>

<script>
  import {inject, ref, provide} from 'vue';
  export default {
    name: 'Son',
    setup() {
      let sum = ref(0);
      const car = inject('car'); // inject注入添加 接收provide传递过来的数据
      console.log(car); // 接收过来的数据是响应式的 修改时还会影响页面（包括用到该数据的组件）

      const person = inject('person');
      console.log(person);

      provide('sun', sum);

      return {
        car
      }
    }
  }
</script>

<style scoped>
  .son {
    background-color: hotpink;
    padding: 10px;
  }
</style>