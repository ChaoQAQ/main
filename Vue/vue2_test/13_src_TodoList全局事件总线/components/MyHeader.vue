<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 引入nanoid函数 生产id的函数 用的是分别暴露
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  // props: ["addTodo"],
  methods: {
    add(e) {
      // 校验数据 如果出去两边空格为空就为false取反执行
      if (!this.title.trim()) {
        // 清空输入框的空格
        this.title='';
        // return会退出循环函数体返回结果
        return;
      } 
      // 键盘回车事件添加一个任务 nanoid是一个函数 调用就是一个唯一的id
      // title是value 可以用v-model绑定value done初始肯定是未完成false
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // 将这个添加的todoObj当作父组件函数的参数传递给父组件
      // this.addTodo(todoObj);
      this.$emit('addTodo', todoObj);
      // 清空输入
      this.title = '';
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>