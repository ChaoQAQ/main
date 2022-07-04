<template>
<!-- 
  readonly函数与shallowReadonly函数：
    1. readonly：让一个响应式数据变为只读的（深只读 不可被修改）
    2. shallowReadonly：让一个响应式数据变为只读的（浅只读 只对第一层数据进行只读）
    3. 应用场景：不希望数据被修改时（其他组件传递过来的数据不希望被我修改时）
 -->
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击sum++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>涨薪：{{job.j1.salary}}k</h2>
  <button @click="name+='~'">点我修改名字</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, toRefs, readonly, shallowReadonly } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({ 
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    // readonly只读的 让一个响应式数据变为只读的
    // person = readonly(person); 

    // shallowReadonly 让一个响应式数据变为只读的（浅只读 第一层对象中数据不能被修改）
    person = shallowReadonly(person);

    sum = readonly(sum);
    // sum = shallowReadonly(sum);
    console.log(sum, person);

    // 返回一个对象（常用）
    return {
      sum,
      ...toRefs(person), // toRefs返回的是一个对象 在对象中写对象要利用扩展运算符将对象展开
    }
  }
}
</script>
