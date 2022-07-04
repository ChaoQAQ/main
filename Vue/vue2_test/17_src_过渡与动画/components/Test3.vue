<template>
<!-- 
  Vue封装的过渡与动画
    1. 作用 在插入、更新、移除DOM元素时 在合适的时候给元素添加样式类名；
    2. 显示调用三个类名 结束调用三个类名 调用完毕后 立马移除类名；
    3. 写法：
      (1) 准备好样式类名：
        元素进入的样式：
          v-enter: 进入的起点 调用该类名；
          v-enter-active: 进入过程中激活该类名；
          v-enter-to: 进入的终点 调用该类名；
        元素离开的样式：
          v-leave: 离开的起点 调用该类名；
          v-leave-active: 离开的过程中 调用该类名；
          v-leave-to: 离开的终点 调用该类名；
      (2) 使用 <transition> 包裹要做过渡跟动画的元素 并配置name属性 appear属性 设置节点在初始渲染的过渡
      (3) 若多个元素需要做过渡与动画 则需要使用 <transition-group> 并且每个过渡与动画的元素都要指定唯一标识符 key值；
      (4) 使用第三方库 需要配置 enter-active-class 跟 leave-active-class 属性；
 -->
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>

    <!-- enter-active-class进入过程样式类名 -->
    <!-- leave-active-class离开过程样式类名 -->
    <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__jello"
    leave-active-class="animate__rotateOutUpRight">
      <h1 v-show="isShow">你好啊！！！</h1>
    </transition>
  </div>
</template>

<script>
// 引入animate.css库 引入css样式库不用 from
import 'animate.css';

export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: pink;
}
</style>