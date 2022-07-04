<template>
<!-- 
  reactive函数
    1. 作用：定义一个对象类型的响应式数据(基本类型不要用它 要用ref函数)
    2. 语法：const 代理对象 = reactive(源对象) 接受一个对象或数组 返回一个代理对象(Proxy的实例对象 简称proxy对象)
    3. reactive定义的响应式数据是“深层次的”
    4. 内部基于ES6的 Proxy实现 通过代理对象操作源对象内部数据进行操作
    5. 没有做响应式的数据 在更新其他响应式数据时同时更新没有做响应式的数据也能更新 但不推荐这样做
    6. 一堆数据包括基本类型要想全部用reactive函数做响应式 可以将它们包裹在一个对象里再用reactive函数做响应式

  reactive函数对比ref函数：
    从定义数据的角度对比：
      1. ref函数用来定义：基本数据类型
      2. reactive函数用来定义：对象（或数组）类型数据
      3. 备注：ref函数也可以用来定义对象（或数组） 它内部会通过 reactive转为 代理对象
    从原理角度对比：
      1. ref函数通过Object.defineProperty()的 get与 set来实现响应式（数据劫持）
      2. reactive函数通过使用 Proxy（构造函数）来实现响应式（数据劫持）并通过window下的Reflect内置对象操作 源对象内部的数据
    从使用角度对比：
      1. ref函数定义数据：操作数据需要.value 读取数据时模板中直接读取不需要.value
      2. reactive函数定义的数据：操作数据与读取数据：均不需要.value
 -->
  <h1>一个人的信息</h1>
  <h2>名字：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>工作名称：{{person.job.type}}</h2>
  <h2>工作薪水：{{person.job.salary}}</h2>
  <h2>爱好：{{person.hobby}}</h2>
  <h2>测试的c：{{person.job.a.b.c}}</h2>
  <button @click="changeInfo">点击修改一个人得信息</button>
</template>

<script>
  // 引入 Vue3中的reactive函数 reactive响应式
  import {ref, reactive} from 'vue';

  export default {
    name: 'App',
    setup() { 
      // 数据
      // let name = ref('张三');
      // let age = ref(18);
      // let job = reactive({ // reactive的监视是深层次的
      //   type: '前端工程师',
      //   salary: '30k', // salary薪水
      //   a: {
      //     b: {
      //       c: 1
      //     }
      //   }
      // })
      // let hobby = reactive(['抽烟', '喝酒', '烫头']); // 不写reactive做响应式最后也被修改了是因为更新其他数据时发现了

      // 将数据包装在一个对象里 在用reactive函数做响应式
      let person = reactive({
        name: '张三',
        age: 18,
        job: {
          type: '前端工程师',
          salary: '30k', // salary薪水
          a: {
            b: {
              c: 1
            }
          }
        },
        hobby: ['抽烟', '喝酒', '烫头']
      })

      // 方法
      function changeInfo() {
        person.name = '李四'; 
        person.age = 48;
        person.job.type = 'UI设计师'; 
        person.job.salary = '60k';
        person.job.a.b.c = 999;
        person.hobby[0] = '学习';
      }
      

      // setup若返回值是一个对象 则该对象中的属性和方法在模板中均可以直接使用（重点关注）
      return {
        // name,
        // age,
        // job,
        // hobby,
        person,
        changeInfo
      }
    }
 
  }
</script>
