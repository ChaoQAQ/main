<template>
<!-- 
  shallowReactive函数与shallowRef函数：
    1. shallowReactive：只处理对象最外层属性的响应式（浅响应式）
    2. shallowRef：只处理基本数据类型的响应式 不进行对象的响应式处理
    3. 什么时候用：
      (1) 如果有一个对象数据 结构层次比较深 但变化时只是外层属性变化 ===> shallowReactive
      (2) 如果一个对象数据 后续功能不会修改该对象中的属性 而是生成新的对象来替换源对象 ===> shallowRef
 -->
  <h2>x里面的y值为：{{x.y}}</h2>
  <button @click="x.y++">点击y++</button>
  <button @click="x={y: 666}">点击替换x</button>
  <h2>{{person}}</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>涨薪：{{job.j1.salary}}k</h2>
  <button @click="name+='~'">点我修改名字</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    // let person = reactive({
    let person = shallowReactive({ // shallow浅的 shallowReactive只考虑对象中第一层数据的响应式
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    // let x = ref({
    let x = shallowRef({ // shallowRef只处理基本数据类型的响应式 不处理对象类型数据的响应式
      y: 1
    })
    console.log(x);

    // 返回一个对象（常用）
    return {
      person, // 将不常用的对象直接交出去
      ...toRefs(person), // toRefs返回的是一个对象 在对象中写对象要利用扩展运算符将对象展开
      x
    }
  }
}
</script>
