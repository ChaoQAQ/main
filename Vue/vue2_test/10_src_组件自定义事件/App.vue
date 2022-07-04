/*
  组件的自定义事件：
    1. 一种组件间通信的方式 适用于：子组件 ==> 父组件；
    2. 使用场景：A是父组件 B是子组件 B想给A传数据 那么就要在A中给B绑定自定义事件（事件的回调在A中）；
    3. 绑定自定义事件：
      (1) 第一种方式 在父组件中：<Demo @atguigu="test" /> 或 <Demo v-on:atguigu="test" />
      (2) 第二种方式 在父组件中：
        <Demo ref="demo" />
        mounted() {
          this.$refs.demo.$on('atguigu', this.test)
        }
      (3) 若想让自定义事件只能触发一次 可以使用once修饰符 或$once方法绑定事件；
    4. 触发自定义事件：this.$emit('atguigu', 传递数据)；
    5. 解绑自定义事件：this.$off('atguigu');
    6. 组件上也可以绑定原生DOM事件 需要使用 native 修饰符；
    7. 注意：通过 this.$refs.xxx.$on('atguigu', 回调函数)绑定自定义事件时 回调要么配置在methods中 要么用箭头函数 否则this指向会出问题；
 */
<template>
  <div class="app">
    <h1>{{ msg }}，学校名称：{{ schoolName }}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <Student :getStutendName="getStutendName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用@或v-on:） -->
    <!-- <School v-on:atguigu='getSchoolName' @demo="m1"/> -->

    <!-- 事件修饰符一样可以用在自定义事件上 -->
    <!-- <School v-on:atguigu.once='getSchoolName' /> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法：使用ref） -->
    <!-- <School ref="school" /> -->

    <!-- 组件实例对象上的click事件被解析成了自定义事件 -->
    <!-- <School ref="school" @click="show" /> -->

    <!-- 加上事件修饰符 native 原生的 不来就有的 -->
    <School ref="school" @click.native="show" />
  </div>
</template>

<script>
// 引入组件
import Student from "./components/Student";
import School from "./components/School";

export default {
  // 组件名配置
  name: "App",
  // 注册组件配置
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊！！！",
      schoolName: "",
    };
  },
  methods: {
    getStutendName(name) {
      console.log("app收到了学生名", name);
    },
    getSchoolName(name, ...args) {
      // 接收剩余参数组成一个数据
      console.log("app收到了学校名", name, args);
      this.schoolName = name;
    },
    m1() {
      console.log("m1事件触发了");
    },
    show() {
      console.log('组件实例对象上的事件click触发了');
    }
  },
  mounted() {
    // vm.$on(event, callback) 监听当前实例上的自定义事件 事件可以由 vm.$emit 触发 回调函数会接收所有传入事件触发函数的额外参数
    // setTimeout(() => {
    //   // 利用$refs属性拿到当前组件实例对象 绑定自定义事件 然后监听绑定的事件 事件被调用就执行回调函数
    // this.$refs.school.$on('atguigu', this.getSchoolName);
    // }, 3000);

    // this.$refs.school.$on('atguigu', this.getSchoolName);
    // this.$refs.school.$on('atguigu', function(name) {
    //   this.schoolName = name;
    //   console.log(this); // VueComponent School组件实例对象
    // });

    // 用箭头函数让this指向当前作用域App组件
    this.$refs.school.$on("atguigu", (name) => {
      this.schoolName = name;
      console.log(this); // VueComponent App组件实例对象
    });

    // vm.$once(event, callback) 监听一个自定义事件 但是只触发一次 一旦触发之后 监听器就会被移除
    // this.$refs.school.$once('atguigu', this.getSchoolName)
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
