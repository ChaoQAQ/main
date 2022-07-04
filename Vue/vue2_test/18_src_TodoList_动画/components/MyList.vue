<template>
  <ul class="todo-main">
    <!-- 有多个组件 item要做过渡与动画 使用group组 每个组件里面已经有了唯一的标识符key值 -->
    <transition-group name="todo" appear>
      <!-- 在前面写了:号后面引号的内容才能是表达式 -->
      <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    </transition-group>
  </ul>
</template>

<script>
// 引入子组件
import MyItem from "./MyItem";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  // 接收App组件传递的数据
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

.todo-enter-active {
  animation: atguigu 0.5s linear;
}

.todo-leave-active {
  animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>