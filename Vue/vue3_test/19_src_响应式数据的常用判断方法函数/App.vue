<template>
<!-- 
  响应式数据的常用判断函数：
    1. isRef：检测一个值是否为ref对象
    2. isReactive：检测一个数据是由reactive函数创建的响应式代理
    3. isReadonly：检测一个对象是否由readonly或shallowReadonly创建的只读代理
    4. isProxy：检测一个对象是否由reactive、readonly或shallowReadonly方法创建的代理
 -->
    <h1>我是App组件</h1>
</template>

<script>
  import {ref, reactive, readonly, shallowReadonly, isRef, isReactive, isReadonly, isProxy} from 'vue';
  export default {
    name: 'App',
    setup() {
      let sum = ref(0);
      let car = reactive({
        name: '奔驰',
        price: '50w',
        type: {
          color: '黑色'
        }
      })
      let car2 = readonly(car);
      let car3 = shallowReadonly(car);

      // isRef函数检测一个值是否为ref对象
      console.log(isRef(sum)); // true

      // isReactive函数检测一个数据是由reactive函数创建的响应式代理
      console.log(isReactive(car)); // true

      // isReadonly函数检测一个对象是否由readonly或shallowReadonly创建的只读代理
      console.log(isReadonly(car2)); // true
      console.log(isReadonly(car3)); // true

      // isProxy函数检测一个对象是否由reactive、readonly或shallowReadonly方法创建的代理
      console.log(isProxy(car)); // true
      console.log(isProxy(car2)); // true
      console.log(isProxy(car3)); // true

      return {
      }
    }
  }
</script>
