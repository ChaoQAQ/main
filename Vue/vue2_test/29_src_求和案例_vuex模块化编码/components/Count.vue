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
    // 借助 mapState 生成计算属性 从state中读取数据（模块写法）vuex的模块必须开启命名空间 默认false

    // 第一个参数为模块名字 第二个是模块里state里的数据  
    ...mapState('countOptions', ["sum", "school", "subject"]), 
    // 将模块的空间名称字符串作为第一个参数传递给 这样所有绑定都会自动将该模块作为上下文
    ...mapState('personOptions',['personList']), 

    // 借助 mapGetters 生成计算属性 从state中读取数据（模块写法）
    ...mapGetters('countOptions', ["bigSum"]),
  },
  methods: {
    // 借助 mapMutations生成对应方法 方法中会调用commit去联系mutations（模块写法) 
    ...mapMutations('countOptions', { increment: "JIA", decrement: "JIAN" }),

    // 借助 mapActions生成对应方法 方法中会调用dispatch去联系actions（模块写法）
    ...mapActions('countOptions', {incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 8px;
}
</style>

