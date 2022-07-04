<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    
    <!-- 单个元素过渡用 transition -->
    <!-- <transition appear name="atguigu">
      <h1 v-show="isShow">你好啊！！！</h1>
    </transition> -->

    <!-- 多个过渡元素用 transition-group group 组 -->
    <transition-group appear name="atguigu">
      <!-- 注意 多个过渡元素应该有唯一标识 key值 这里key没用表达式所以可以不加单向绑定 -->
      <h1 v-show="!isShow" key="1">你好啊！！！</h1>
      <h1 v-show="isShow" key="2">尚硅谷！！！</h1>
    </transition-group>
  </div>
</template>

<script>
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
  /* transition: .5s linear; */
}
/* 在执行过程中 类名调用执行完毕后立马去除类名 */
/* 进入的起点、离开的终点 */
.atguigu-enter,
.atguigu-leave-to {
  transform: translateX(-100%);
}

/* 进入离开的过程 做过渡效果 */
.atguigu-enter-active,
.atguigu-leave-active {
  transition: .5s linear;
}

/* 进入的终点、离开的起点 */
.atguigu-enter-to,
.atguigu-leave {
  transform: translateX(0);
}

</style>