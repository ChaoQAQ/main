<template>
<!-- 
  拉开序幕的setup函数
    1. 理解：Vue3.0中一个新的配置项 值为一个函数
    2. setup是所有Composition API(组合API) “表演的舞台”
    3. 组件中所用到的：数据、方法等等 均要配置在setup中
    4. setup函数的两种返回值：
      (1) 若返回一个对象 则对象中的属性、方法 在模板中均可以直接使用（重点关注！）
      (2) 若返回一个渲染函数：则可以自定义渲染内容（了解）
    5. 注意点：
      (1) 尽量不要与Vue2.x配置混用
        Vue2.x配置(data、methods、computed...)中可以访问到setup中的属性、方法 
        但在setup中不能访问到Vue2.x配置(data、methods、computed...) 因为setup中的this指向undefined
        如果混用有重名 后写的值优先
      (2) setup不能是一个async函数 因为返回值不再是return的对象 而是promise 模板看不到return对象中的属性
      (3) 后期也可以返回一个Promise实例 但需要Suspense内置组件和动态引入异步组件的配合
 -->
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <h1>一个人的信息</h1>
  <h2>名字：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <h1>a：{{a}}</h1>
  <button @click="sayHello">点击说话(vue3所配置的——sayHello)</button>
  <br>
  <br>
  <button @click="sayWelcome">点击说话(vue2所配置的——sayWelcome)</button>
  <br>
  <br>
  <button @click="test1">测试一下在vue2的配置中去读取vue3中的数据、方法</button>
  <br>
  <br>
  <button @click="test2">测试一下在vue3的setup配置中去读取vue2中的数据、方法</button>
</template>

<script>
  // 引入渲染函数 h 采用分别暴露
  // import {h} from 'vue';

  export default {
    name: 'App',
    data() {
      return {
        sex: '男',
        a: 100
      }
    },
    methods: {
      sayWelcome() {
        alert('欢迎来到尚硅谷')
      },
      test1() {
        console.log(this.sex);
        console.log(this.name);
        console.log(this.age);
        console.log(this.sayHello());
      }
    },

    // 此处只是测试一下setup 暂时不考虑响应式的问题
    setup() { // setup是所有Composition API（组合API）表演的舞台 组件中所用到的：数据、方法等等 均要配置在setup中
      console.log(this); // setup中的this指向undefined
      // 数据
      let name = '张三';
      let age = 18;
      let a = 200;

      // 方法
      function sayHello() {
        alert(`我叫${name}，今年${age}岁了，你好啊！`)
      }
      function test2() {
        console.log(name);
        console.log(age);
        console.log(this.sex);
        console.log(this.sayWelcome());
      }

      // setup若返回值是一个对象 则该1对象中的属性和方法在模板中均可以直接使用（重点关注）
      return {
        name,
        age,
        a,
        sayHello,
        test2
      }

      // setup若返回一个渲染函数 则可以自定义渲染内容（了解）
      // return () => {
      //   // 但是要把渲染函数的结果返回出去
      //   return h('h1', '尚硅谷');
      // }
    }
 
  }
</script>
