<template>
  <Demo msg="你好啊" school="尚硅谷" @hello="showHelloMsg">
    <!-- Vue3中废弃了slot="qwe" 使用的是v-slot:qwe -->
    <template v-slot:qwe>
      <span>你好啊</span>
    </template>
  </Demo>
  <!-- 给组件绑定原生事件需要用 native修饰符 -->
  <!-- <Demo @click.native/> -->
</template>

<script>
  import Demo from './components/Demo';
  export default {
    name: 'App',
    components: {Demo},
    setup() {
      function showHelloMsg(value) {
        alert(`你好啊，你触发了hello事件，我收到的参数是${value}`)
      }
      return {
        showHelloMsg
      }
    }
  }
</script>
