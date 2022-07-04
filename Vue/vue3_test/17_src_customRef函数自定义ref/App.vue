<template>
<!-- 
  customRef函数：
    1. 作用：创建一个自定义的ref 并对其依赖项跟踪和更新触发进行显式控制
    2. 实现防抖效果（多次触发改为一次触发）
 -->
  <input type="text" v-model="keyWord">
  <h2>{{keyWord}}</h2>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: "App",
  setup() {
    function myRef(value) {
      let timer; // 定义一个定时器名

      // customRef接收两个函数作为参数 track追踪值的变化 trigger触发解析模板
      return customRef((track, trigger) => { // custom行为习惯
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了，我把${value}给他了`);
            track(); // 通知Vue追踪value的变化（提前和get商量一下 让它认为这个value是有用的）
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中数据改为了${newValue}`);
            // 每次调用set函数之前先清除定时器
            clearTimeout(timer); 
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知Vue去重新解析模板
            }, 500)
          }
        }
      })
    }

    // 数据
    let keyWord = myRef('hellow');

    // 返回一个对象（常用）
    return {
      keyWord
    }
  }
}
</script>
