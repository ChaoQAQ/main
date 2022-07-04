<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <!-- getters 出现在$store身上 getter函数用于对state状态进行处理 所有组件都可以访问到 -->
    <h1>当前求和扩大10倍为：{{$store.getters.bigSum}}</h1>
    <select v-model.number="n">      
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count", // 计数组件
  data() {
    return {
      n: 1
    }
  },
  methods: {
      increment() {
        this.$store.commit('JIA', this.n); 
      },
      decrement() {
        this.$store.commit('JIAN', this.n);
      },
      incrementOdd() {
        this.$store.dispatch('jiaOdd', this.n);
      },
      incrementWait() {
        this.$store.dispatch('jiaWait', this.n); 
      }
  },
  mounted() {
    console.log(this);
  },
}
</script>

<style lang="css" scoped>
    button {
      margin-left: 8px;
    }
</style>

