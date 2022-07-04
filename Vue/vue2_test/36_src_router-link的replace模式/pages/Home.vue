<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <!-- 多级路由嵌套 to需要写完整路径 -->
                <!-- 开启replacemos 默认是push模式 让当前跳转的url替换掉前一个url 不留下浏览器历史记录从而无法后退到上个url -->
                <router-link :replace="true" class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- 路由组件显示的位置 占位标签 -->
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  // mounted() {
  //     console.log("Home组件挂载完毕", this);
  //     window.HomeRoute = this.$route;
  //     window.HomeRouter = this.$router;
  // },
  // beforeDestroy() {
  //     console.log("Home组件销毁了");
  // },
};
</script>
