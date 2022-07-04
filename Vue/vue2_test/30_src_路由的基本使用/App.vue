<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中借助 router-link 标签实现路由的切换 link 链接 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
          <!-- 使用 router-link 组件来导航. -->
          <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
          <!-- active-class 是该路由链接被激活时添加的类名 -->
          <!-- to 到path路径 -->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 view 视图 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "App",
    mounted() {
      console.log(this)
    },
}
</script>


