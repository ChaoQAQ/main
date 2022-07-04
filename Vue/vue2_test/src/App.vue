<template>
  <div class="app">
    <h1>我是Vue2写的效果</h1>
    <Demo msg="你好啊" school="尚硅谷">
      <!-- slot="test1" 具名插槽旧写法 -->
      <template slot="test1">
        <span>你好啊</span>
      </template>
      <!-- v-slot:test2 具名插槽新写法 会被Vue监视(将界点包装成一个数组) 绑定get -->
      <template v-slot:test2>
        <span>尚硅谷</span>
      </template>
    </Demo>
  </div>
</template>

<script>
import Demo from './components/Demo';
export default {
  name: "App",
  components: {Demo}
}
</script>

<style scoped>
  .app {
    background-color: #ddd;
    padding: 10px;
  }
</style>


