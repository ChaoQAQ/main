<template>
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
import { ref, reactive, watch } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref('你好啊');
    let person = ref({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: 30
      }
    })

    // 监视ref函数所定义的响应式数据时 不能用.value 因为.value拿到的是值 而监视的应该是getter/effect函数、ref、被动对象或这些类型的数组
    /* watch(sum.value, (newValue, oldValue) => { // 相当于监视的 sum的值 0
      console.log('监视ref定义的sum数据变了', newValue, oldValue);
    }) */

    watch(sum, (newValue, oldValue) => {
      console.log('监视ref定义的sum数据变了', newValue, oldValue);
    })

    console.log(sum);
    console.log(person);
    // 监视ref函数所定义的person person是个对象 ref函数内部求助了reactive函数 
    // 监视ref函数定义的响应式数据默认是浅层次监听 监视reactive函数定义的响应式数据是强制深度监视
    // 所以需要 开启深度监视 deep: true
    // watch(person, (newValue, oldValue) => {
    //   console.log('监视ref定义的person数据变了', newValue, oldValue);
    // }, {deep: true})

    // 或者通过.value获取ref函数所定义的数据里面Proxy所代理的数据
    watch(person.value, (newValue, oldValue) => {
      console.log('监视ref定义的person数据变了', newValue, oldValue);
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
