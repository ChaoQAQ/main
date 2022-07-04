<template>
<!-- 
  provide函数与inject函数：
    1. 作用：实现祖级组件与后代组件间通信
    2. 套路：父组件有一个provide函数来提供数据 后代组件有一个inject函数来接收（添加注入）使用这些数据
    3. 具体写法：
      (1) 祖级组件中
        setup() {
          ...
          let car = reactive({name: '奔驰', price: '50k'})
          provide('car', car);
          ...
        }
      (2) 后代组件中
        setup(props, context) {
          ...
          const car = inject('car');
          return {car}
        }
 -->
  <div class="app">
    <h1>我是App组件</h1>
    <h2>汽车的信息：{{name}}---{{price}}</h2>
    <Child/>
  </div>
</template>

<script>
  import {reactive, toRefs, provide, inject} from 'vue';
  import Child from './components/Child';
  export default {
    name: 'App',
    components: {Child},
    setup() {
      let car = reactive({
        name: '奔驰',
        price: '50w'
      })

      const sum = inject('sum');
      console.log(sum);

      // provide提供 向后代组件传递数据
      provide('car', car); // 数据名car 数据源car

      return {
        ...toRefs(car)
      }
    }
  }
</script>

<style scoped>
  .app {
    background-color: pink;
    padding: 10px;
  }
</style>