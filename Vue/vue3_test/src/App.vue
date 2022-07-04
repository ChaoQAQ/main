<template>
<!-- 
  Vue3其他：
    1. Composition API 的优势 我们可以更加优雅的组织我们的代码 函数 让相关功能的代码更加有序的组织在一起
    2. data选项应始终被声明为一个函数
    3. 过度类名的更改:
      Vue2.x写法
        .v-enter,
        .v-leave-to {
          opacity: 0;
        }
        .v-leave,
        .v-enter-to {
          opacity: 1;
        }
      Vue3.x写法
        .v-enter-from,
        .v-leave-to {
          opacity: 0;
        }  
        .v-leave-from,
        .v-enter-to {
          opacity: 1;
        }
    4. 移除keyCode作为 v-on 的修饰符 同时也不再支持config.keyCodes 移除 v-on.native 修饰符
      父组件中绑定事件
        <my-component
          v-on:close="handleComponentEvent"
          v-on:click="handleNativeClickEvent"
        />
      子组件中声明自定义事件
        <script>
          export default {
            emits: ['close'] // click原生事件不用声明 自动当成原生事件
          }
        </script>
    5. 移除 过滤器
      过滤器虽然这看起来很方便 但它需要一个自定义语法 打破大括号内表达式是 “只是 JavaScript” 的假设 
      这不仅有学习成本 而且有实现成本！建议用方法调用或计算属性去替换过滤器
 -->
  <div class="app">
    <div>
      <h1 style="color: hotpink; margin-top: -100px">尚硅谷让天下没有难学的技术</h1>
      <h2 style="color: red">愿所有的汗水都有收获，愿所有的努力不被辜负</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 10px;
    text-align: center;
    background-color: skyblue;
  }
</style>