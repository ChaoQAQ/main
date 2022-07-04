<template>
  <div class="container">
    <!-- 每次调用组件 传递不同信息 生成一个同名不同信息的组件 但属性名字是一样的 就重复利用组件了 props方便接收 -->
    <Category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="http://www.atguigu.com">点击跳转美食</a>
    </Category>

    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.atguigu.com">穿越火线</a>
        <a href="http://www.atguigu.com">英雄联盟</a>
      </div>
    </Category>

    <Category title="电影">
      <!-- slot="name" 具名插槽早期写法 -->
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- template最终不会出现在html结构里 所以给模板设置样式类名不奏效 -->
      <!-- v-slot:name 具名插槽新写法 名字不加冒号 但是该写法必须写在 template 模板里 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://www.atguigu.com">英雄</a>
          <a href="http://www.atguigu.com">英雄</a>
          <a href="http://www.atguigu.com">英雄</a>
        </div>
        <h3>欢迎观看</h3>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["教父", "拆弹专家", "你好，李焕英", "尚硅谷"],
    };
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
/* 组件标签体内的样式 写在父组件 子组件都可以 */
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>

