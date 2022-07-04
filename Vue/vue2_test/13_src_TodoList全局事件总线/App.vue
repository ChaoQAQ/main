<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 将一个方法中的函数传递给子组件 -->
        <!-- <MyHeader :addTodo="addTodo" /> -->
        
        <MyHeader @addTodo="addTodo" />
        <!-- 前面加 :号 让传递的数据是表达式 将数据传递给List组件 -->
        <MyList
          :todos="todos"
        />
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
// 引入组件
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  // 组件名配置
  name: "App",
  // 注册组件配置
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      // 读取本地存储里面todos数组数据 没有数据就为null Myfooter组件不能读取null.length 所以这里没有数据就返回一个空的数组
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    addTodo(todoObj) {
      // 收到子组件调用父组件的函数传递过来的参数
      // 这里用了Vue内置改变数组的包装方法unshift方法 让Vue能够监测到data中的数据发生了改变 然后重新解析模板给子组件传参
      this.todos.unshift(todoObj);
    },
    // 勾选 or 取消勾选一个todo
    checkTodo(id) {
      // 遍历todos 找到对应的id 取反todo的done值
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选 or 取消全选
    checkAllTodo(done) {
      // 遍历整个todos 让每一项的状态都跟随全选按钮的选中状态变化来决定
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 清除已完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        // 返回未完成的任务
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      // 开启深度监视 数组里面的对象里面的属性发生改变也能被发现
      deep: true,
      handler(value) {
        // 监视todos数组的改变 每次改变就存到本地存储里面 转换成字符串格式
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // 在$bus组件上定义自定义事件 接收数据执行回调函数
    this.$bus.$on('checkTodo', this.checkTodo);
    this.$bus.$on('deleteTodo', this.deleteTodo);
  },
  beforeDestroy() {
    // 在该组件销毁之前 解绑当前组件在$bus组件上定义的自定义事件
    this.$bus.$off(['checkTodo', 'deleteTodo']);
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>