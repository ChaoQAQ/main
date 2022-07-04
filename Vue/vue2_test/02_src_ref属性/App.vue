<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点击我输出DOM元素</button>
    <School ref="sch"/>
  </div>
</template>

<script>
/*
  ref属性：
    1. 被用来给元素或子组件注册引用信息（id的替代者）；
    2. 应用在html标签上获取的是真实DOM元素 应用在组件标签上获取的是组件实例对象（vc）；
    3. 使用方式：
      (1) 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
      (2) 获取：```this.$refs.xxx```
*/

    // 引入组件
    import School from "./components/School"

    export default {
        // 组件名配置
        name: 'App',
        // 注册组件配置
        components: {School},
        data() {
          return {
            msg: '欢迎学习Vue'
          }
        },
        methods: {
          showDOM() {
            console.log(this.$refs.title); // 真实DOM元素
            console.log(this.$refs.btn); // 真实DOM元素
            console.log(this.$refs.sch); // School的组件实例对象（vc）
          }
        },
    }
</script>

<style>

</style>