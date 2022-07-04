<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- <transition :appear="true"> -->
    <!-- transition标签最终不会显示在页面 在vue中动画过渡用transition标签进行包裹  -->
    <!-- appear 显示 值为true就是 设置节点在初始渲染的过渡 要加单向绑定 否则表示该标签有个属性叫appear值为true -->
    <!-- 加单向绑定让值变成表达式 appear 可以直接简写 appear -->
    <!-- name表示调用动画类名的开头名字 不写就默认v开头 -->
    <transition appear name="atguigu">
      <h1 v-show="isShow">你好啊！！！</h1>
    </transition>
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
}

/* 默认是.v-enter-active v表示vue */
/* 进入过程true时激活调用该类名 */
.atguigu-enter-active {
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  /* animation: 名字 持续时间 动画速度 延迟时间 重复次数 方向 动画结束后是否停留在 */
  animation: atguigu 1s linear;
}
/* 离开过程false时激活调用该类名 */
.atguigu-leave-active {
  animation: atguigu 1s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>