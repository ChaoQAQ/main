<template>
  <div>
    <h1>当前求和为：{{$store.state.sum}}</h1>

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
        // 在组件中使用 $store 需要在根节点注入 store
        this.$store.commit('JIA', this.n); // 没有业务逻辑时可以直接调用 commit 跳过actions 但mutations不能省略 这里会被Vuex开发工具监视
      },
      decrement() {
        this.$store.commit('JIAN', this.n);
      },
      incrementOdd() {
        this.$store.dispatch('jiaOdd', this.n); // dispatch 派遣 第一个参数是事件名 第二个参数是 载荷payload 就是数据
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

