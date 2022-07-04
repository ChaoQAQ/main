<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>

    <!-- 设置n 的默认值为 1 -->
    <!-- v-model修饰符number 自动将收集的value输入值转变为数值型 -->
    <select v-model.number="n">
      <!-- 收集的value是字符串类型 加单向绑定让value值为js表达式 就变成了数值型 -->
      <!-- <option :value="1">1</option> -->
      
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
      sum: 0,
      n: 1
    }
  },
  methods: {
      increment() {
        this.sum += this.n;
      },
      decrement() {
        this.sum -= this.n;
      },
      incrementOdd() {
        if(this.sum % 2) {
          this.sum += this.n;
        }
      },
      incrementWait() {
        setTimeout(() => {
          this.sum += this.n;
        }, 500)
      }
  }
}
</script>

<style lang="css" scoped>
    button {
      margin-left: 8px;
    }
</style>

