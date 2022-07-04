<template>
  <div class="demo">
    <h2>我是Demo组件</h2>
    <!-- 组件实例对象身上的 $slots有该组件插槽的相关信息  -->
    <slot name="test1"></slot>
    <slot name="test2"></slot>
  </div>
</template>

<script>
export default {
    name: 'Demo',
    // props: ['msg', 'school'], // 不声明接受父组件传递过来的数据 数据信息就会出现在组件实例对象的$attrs身上
    mounted() {
        console.log(this);
    }
}
</script>

<style scoped>
    .demo {
        background-color: orange;
        padding: 10px;
    }
</style>