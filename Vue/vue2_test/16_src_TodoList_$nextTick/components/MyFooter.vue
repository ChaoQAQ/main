<template>
  <!-- 没有任务时隐藏footer节点 -->
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="isAll" />
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {};
  },
  props: ["todos"],
  computed: {
    // Total 总计
    total() {
      return this.todos.length;
    },
    doneTotal() {
      // pre 是上一次的返回值 初始值是索引号为0的值 current是正在被迭代的每一项数据
      return this.todos.reduce((pre, current, index) => {
        // reduce 减少
        // console.log(pre, current ,index); // 上一次的返回值 这里指定为0 current为正在迭代的数组元素 index为正在迭代的数组元素的索引号
        // (current.done ? 1 : 0) 如果为真返回1 如果为假返回0
        return pre + (current.done ? 1 : 0);
      }, 0);
    },
    isAll: {
      get() {
        // 全部选中 并且全部任务数量大于0时 为选中状态
        return this.total === this.doneTotal && this.total > 0;
      },
      set(value) {
        // 修改时向App组件传递当前全选按钮的选中状态
        // this.checkAllTodo(value);
        this.$emit('checkAllTodo', value);
      }
    },
  },
  methods: {
    // checkAll(e) {
    //   // 向App组件传递当前全选按钮的选中状态
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll() {
      // 点击执行App的方法清除已完成任务
      // this.clearAllTodo();
      this.$emit('clearAllTodo');
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>