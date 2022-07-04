<template>
  <div class="son">
    <h1>我是Son组件</h1>
    <Dialog/>
  </div>
</template>

<script>
  import Dialog from './Dialog';
  export default {
    name: 'Son',
    components: {Dialog}
  }
</script>

<style scoped>
  .son {
    background-color: hotpink;
    padding: 10px;
  }
</style>