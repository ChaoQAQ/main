<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // mounted() {
  //     console.log('About组件挂载完毕', this);
  //     window.AbortRoute = this.$route; // 每个组件的 $route路由 都是唯一的
  //     window.AbortRouter = this.$router; // 每个组件的 $router路由器是相同的
  // },
  // beforeDestroy() {
  //     console.log('About组件销毁了');
  // }
  // 路由隐藏的组件最后都被销毁了 再次出现是重新挂载组件

  // 通过路由规则 进入该组件时调用
  beforeRouteEnter(to, from, next) {
    console.log("About-beforeRouteEnter", to, from);
    // 判断用户携带的本地浏览器信息有没有school这个信息
    if (localStorage.getItem("school") === "atguigu") {
        next(); // 有就放行
    } else {
        alert("请携带准确信息");
    }
  },
  // 通过路由规则 离开该组件时调用
  beforeRouteLeave(to, from, next) {
    console.log("About-beforeRouteLeave", to, from);
    next(); // 放行
  },
};
</script>

