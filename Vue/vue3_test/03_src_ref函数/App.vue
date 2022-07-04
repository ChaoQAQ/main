<template>
<!-- 
  ref函数：
    1. 作用：定义一个响应式的数据
    2. 语法：const ref(initValue)
      (1) 创建一个包含响应式数据的 引用对象(reference对象 简称ref对象)
      (2) js中操作数据：xxx.value获取值
      (3) 模板中读取数据：不需要.value 直接{{xxx}}
    3. 备注： 
      (1) 接受的数据可以是：基本类型、也可以是对象类型
      (2) 基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的
      (3) 对象数据类型：内部“求助”了Vue3.0中的一个新函数——reactive函数（对Proxy的包装）
 -->
  <h1>一个人的信息</h1>
  <h2>名字：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>工作名称：{{job.type}}</h2>
  <h2>工作薪水：{{job.salary}}</h2>
  <button @click="changeInfo">点击修改一个人得1信息</button>
</template>

<script>
  // 引入 Vue3中的ref函数
  import {ref} from 'vue';

  export default {
    name: 'App',
    setup() { 
      // 数据
      let name = ref('张三');
      let age = ref(18);
      let job = ref({
        type: '前端工程师',
        salary: '30k' // salary薪水
      })

      // 方法
      function changeInfo() {
        name.value = '李四'; // 基本类型的数据：响应式依然是靠Object.defineProperty()的get与set完成的
        age.value = 48;
        job.value.type = 'UI设计师'; // 对象数据类型：内部“求助”了Vue3.0中的一个新函数——reactive函数（对Proxy的包装）
        job.value.salary = '60k';
        // console.log(name, age, job.value);
      }
      

      // setup若返回值是一个对象 则该1对象中的属性和方法在模板中均可以直接使用（重点关注）
      return {
        name,
        age,
        job,
        changeInfo
      }
    }
 
  }
</script>
