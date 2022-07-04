<template>
  <ul class="todo-main">
    <!-- 在前面写了:号后面引号的内容才能是表达式 -->
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
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
  props: ['todos', 'checkTodo', 'deleteTodo']
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
</style>