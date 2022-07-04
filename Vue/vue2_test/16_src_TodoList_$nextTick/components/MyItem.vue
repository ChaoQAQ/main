<template>
  <li>
    <label>
      <!-- 用v-model绑定value也能实现功能 但不推荐 因为它本质修改了props传过来的对象里面的属性 只是Vue默认浅层次监测不到对象里面的属性修改 -->
      <!-- <input type="checkbox" v-model="todo.done" /> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 展示状态跟编辑状态只能展示一个 -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        ref="inputTitle"
        :value="todo.title"
        v-show="todo.isEdit"
        @blur="handleBlur(todo, $event)"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      编辑
    </button>
  </li>
</template>

<script>
// 引入第三方库 消息订阅于发布
import pubsub from "pubsub-js";

export default {
  name: "MyFooter",
  data() {
    return {};
  },
  // 声明接收 todo 对象
  props: ["todo"],
  // mounted() {
  //   console.log(this.todo); // 打印了3次 每次循环挂载完毕都会打印一次
  // }
  methods: {
    // 勾选 or 取消勾选
    handleCheck(id) {
      // 通知App组件将对应id的todo对象的done值取反
      // this.checkTodo(id);
      // 在当前组件里调用$bus组件上自定义的事件 传递参数id
      this.$bus.$emit("checkTodo", id);
    },
    // 删除todo
    handleDelete(id) {
      // Window.confirm() 方法显示一个具有一个可选消息和两个按钮 (确定和取消) 的模态对话框
      if (confirm("你确定删除吗？")) {
        // 通知App组件将对应id的todo对象的删除
        // this.deleteTodo(id);
        // this.$bus.$emit('deleteTodo', id);

        pubsub.publish("deleteTodo", id); // 发布消息 传递数据
      }
    },
    // 编辑todo
    handleEdit(todo) {
      // 如果todo对象上有isEdit这个属性就修改值进行了 没必要在添加这个属性了
      // Object.hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        // Vue默认不监视对象中在new Vue之后添加的属性 使用$set给todo对象添加一个属性isEdit 值为true
        this.$set(todo, "isEdit", true);
      }
      // setTimeout(() => {
      //  this.$refs.inputTitle.focus();
      // });

      // $nextTick 在下一次DOM更新结束后执行其指定的回调函数 next下一次 Tick一会儿
      this.$nextTick(function() {
        this.$refs.inputTitle.focus();
        console.log(this); // 指向当前组件实例对象
      });
    },
    // 失去焦点
    handleBlur(todo, e) {
      // 失去焦点隐藏输入框 显示展示状态 就是控制todo.isEdit的值
      todo.isEdit = false;
      // 调用全局事件总线上的 updataTodo 方法传递当前编辑的 id 跟编辑过后的 value
      if (!e.target.value.trim()) return alert("输入不能为空"); // 如果修改红的内容去除两边空格后为空就退出函数
      this.$bus.$emit("updataTodo", todo.id, e.target.value);
    },
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