<template>
  <div class="container">
    <Search/>
    <List/>
  </div>
</template>

<script>
  // import './assets/bootstrap.css'; // import引入css会有严格检查 bootstrap.css文件出现了第三方字体文件 
  import Search from './components/Search';
  import List from './components/List';
  export default {
    name: "App",
    components: {Search, List}
  }
</script>

