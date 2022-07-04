<template>
<!-- 
  自定义hook函数：
    1. 什么是hook？————本质是一个函数 把setup函数中使用的Composition API进行了封装
    2. 类似于Vue2中的mixin
    3. 自定义hook函数的优势：复用代码 让setup中的逻辑更清楚易懂
 -->
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>鼠标点击的坐标x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
import { ref } from "vue";
// 引入自定义的hook钩子函数 实现代码复用
import usePoint from '../hooks/usePoint'; 
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    
    // 接收 usePoint函数的返回值
    const point = usePoint();

    // 返回一个对象（常用）
    return {
      sum,
      point
    }
  }
}
</script>
