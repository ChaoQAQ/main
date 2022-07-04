<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 这样将数据传给了插槽的使用者 -->
    <slot :games="games">我是一些默认值 当使用者没有传递具体结构时 我会出现</slot>
    
    <!-- 作用域插槽也可以有name属性 -->
    <!-- <slot name="games" :games="games">我是一些默认值 当使用者没有传递具体结构时 我会出现</slot> -->
  </div>
</template>

<script>
export default {
  name: "Category", // 类别组件
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"]
    };
  },
};
</script>

<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  background-color: pink;
  text-align: center;
}
</style>