<template>
  <div class="container">
    <!-- 每次调用组件 传递不同信息 生成一个同名不同信息的组件 但属性名字是一样的 就重复利用组件了 props方便接收 -->
    <Category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <!-- 组件标签写成双标签形式 组件标签体内就可以写我们向想要的代码 组件那边放置一个插槽slot -->
    <Category title="电影">
      <!-- controls 控制 加了这个属性就有播放按钮了 -->
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category';

  export default {
    name: "App",
    components: {Category},
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        films: ['教父', '拆弹专家', '你好，李焕英', '尚硅谷']
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-around;
  }
  /* 组件的样式 写在父组件 子组件都可以 */
  img {
		width: 100%;
	}
  video {
    width: 100%;
  }
</style>

