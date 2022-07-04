<template>
  <li>
    <label>
      <!-- 用v-model绑定value也能实现功能 但不推荐 因为它本质修改了props传过来的对象里面的属性 只是Vue默认浅层次监测不到对象里面的属性修改 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
  // 声明接收 todo 对象
  props: ['todo', 'checkTodo', 'deleteTodo'],
  // mounted() {
  //   console.log(this.todo); // 打印了3次 每次循环挂载完毕都会打印一次
  // }
  methods: {
    // 勾选 or 取消勾选
    handleCheck(id) {
      // 通知App组件将对应id的todo对象的done值取反
      this.checkTodo(id);
    },
    // 删除todo
    handleDelete(id) {
      // Window.confirm() 方法显示一个具有一个可选消息和两个按钮 (确定和取消) 的模态对话框 
      if(confirm('你确定删除吗？')) {
      // 通知App组件将对应id的todo对象的删除
        this.deleteTodo(id);
      }
    }
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>