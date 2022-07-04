<template>
<!-- 
  watchEffect函数：
    1. watch的套路：既要指明监视的属性 也要指明监视的回调函数
    2. watchEffect的套路：不用指明监视哪个属性 监视的回调函数中用到哪个属性 就监视哪个属性
    3. watchEffect有点像computed：
      (1) computed注重的计算出来的值（回调函数的返回值）所以必须写返回值
      (2) watchEffect更注重的是过程（回调函数的函数体）所以不用写返回值
      (3) computed一上来调用一次 所依赖的数据发生改变再次调用
      (4) watchEffect一上来也会调用一次 回调函数里所用到的数据发生改变时重新调用回调函数
    // watchEffect所指定回调函数中用到的数据只要发生变化 则重新执行回调函数
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.salary;
      console.log('watchEffect所指定的回调执行了');
    })
 -->
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg+='!'">点我修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <button @click="person.name+='~'">点我修改名字</button>
  <hr>
  <h2>年龄：{{person.age}}</h2>
  <button @click="person.age++">点我修改年龄</button>
  <h2>工作：{{person.job.type}}</h2>
  <button @click="person.job.type+='~'">点我修改工作</button>
  <hr>
  <h2>涨薪：{{person.job.salary}}k</h2>
  <button @click="person.job.salary++">点我修改年龄</button>
</template>

<script>
import { ref, reactive, watch, watchEffect } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref('你好啊');
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: 30
      }
    })

    // watch监视 Effect效应、引起
    // watchEffect监视的是回调函数里面所用到的数据 watchEffect一上来就会执行一次 
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.job.salary;
      console.log('watchEffect所指定的回调执行了');
    })

    // 返回一个对象（常用）
    return {
      sum,
      msg,
      person
    };
  },
};
</script>
