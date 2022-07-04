<template>
<!-- 
  watch函数：
    1. 与Vue2.x中watch配置功能一致
    2. 两个小坑：
      (1) 监视reactive函数定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视(deep配置失效)
      (2) 监视reactive函数定义的响应式数据中的某个属性时：deep配置有效 且监视的目标是函数的返回值
      (3) 监视多个目标时 应该写成数组形式 结果也会以数组形式呈现

    // 情况一：监视ref所定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue);
    }, {immediate: true}) 

    // 情况二：监视ref所定义的多个响应式数据  
    watch([sum, msg], (newValue, oldValue) => {
      console.log('监视的多个ref响应式数据变了', newValue, oldValue); // 以数组形式呈现 新旧数组
    }, {immediate: true}) 

    /* 
      情况三：监视reactive所定义的一个响应式数据的全部属性
        1. 注意：此处无法正确的获取 oldValue
        2. 注意：强制开启了深度监视（deep配置无效）
    */
    watch(person, (newValue, oldValue) => {
      console.log('监视的reactive响应式数据person变了', newValue, oldValue); // oldValue不准确
    }, {deep: false}) // 此处设置deep无效 

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    watch(() => person.name, (newValue, oldValue) => { // 监视一个对象或数组中的某个属性或元素需要将目标作为函数的返回值
      console.log('监视的reactive响应式数据person中的name属性变了', newValue, oldValue); 
    }) 

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch(() => [person.name, person.age], (newValue, oldValue) => { // 监视reactive所定义的响应式数据中的某些属性 函数的返回值是数组
      console.log('监视的reactive响应式数据person中的一些属性变了', newValue, oldValue); // 以数组形式呈现 新旧数组
    })

    // 特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('监视的reactive响应式数据person中的job对象变了', newValue, oldValue);
    }, {deep: true}) // 由于此处监视的是reactive所定义的对象中的某个属性 所以deep配置有效 oldValue还是不准确

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
import { ref, reactive, watch } from "vue";
export default {
  name: "App",
  // Vue2监视属性 简写
  /* watch: {
    sum(newValue, oldValue) {
      console.log('sum变了', newValue, oldValue);
    }
  }, */

  // Vue2监视属性 完整写法
  /* watch: {
    sum: {
      immediate: true, // 立即 一上来调用一次
      deep: true, // 监视程度 深度监视
      handler(newValue, oldValue) {
        console.log('sum变了', newValue, oldValue);
      }
    }
  }, */

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

    // 情况一：监视ref所定义的一个响应式数据
    /* watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue);
    }, {immediate: true}) */

    // 情况二：监视ref所定义的多个响应式数据  
    /* watch([sum, msg], (newValue, oldValue) => {
      console.log('监视的多个ref响应式数据变了', newValue, oldValue); // 以数组形式呈现 新旧数组
    }, {immediate: true}) */

    /* 
      情况三：监视reactive所定义的一个响应式数据的全部属性
        1. 注意：此处无法正确的获取 oldValue
        2. 注意：强制开启了深度监视（deep配置无效）
    */
    /* watch(person, (newValue, oldValue) => {
      console.log('监视的reactive响应式数据person变了', newValue, oldValue); // oldValue不准确
    }, {deep: false}) // 此处设置deep无效 */

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    /* watch(() => person.name, (newValue, oldValue) => { // 监视一个对象或数组中的某个属性或元素需要将目标作为函数的返回值
      console.log('监视的reactive响应式数据person中的name属性变了', newValue, oldValue); 
    }) */

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    /* watch(() => [person.name, person.age], (newValue, oldValue) => { // 监视reactive所定义的响应式数据中的某些属性 函数的返回值是数组
      console.log('监视的reactive响应式数据person中的一些属性变了', newValue, oldValue); // 以数组形式呈现 新旧数组
    }) */

    // 特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('监视的reactive响应式数据person中的job对象变了', newValue, oldValue);
    }, {deep: true}) // 由于此处监视的是reactive所定义的对象中的某个属性 所以deep配置有效 oldValue还是不准确

    // 返回一个对象（常用）
    return {
      sum,
      msg,
      person
    };
  },
};
</script>
