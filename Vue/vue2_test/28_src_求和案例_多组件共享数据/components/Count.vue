<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1 style="color: red">Person组件的总人数为：{{personList.length}}</h1>
    <h1>当前求和扩大10倍为：{{ bigSum }}</h1>
    <h1>我在{{ school }}学习{{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
// 引入vuex中的 mapState mapGetters mapActions mapMutations 他们采用分别暴露
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 借助 mapState 生成计算属性 从state中读取数据（数组写法）
    ...mapState(["sum", "school", "subject", "personList"]), // 每项简写成一个字符串就是生成的计算属性名跟state的数据名一样

    // 借助 mapGetters 生成计算属性 从state中读取数据（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 借助 mapMutations生成对应方法 方法中会调用commit去联系mutations（对象写法) 传参在绑定事件时传 否则传事件对象
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    // 借助 mapActions生成对应方法 方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
  },
  mounted() {
    // console.log(this);
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 8px;
}
</style>

