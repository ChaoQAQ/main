<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
/*
  4个map辅助函数方法的使用：
    1. mapState方法：用于帮助我们映射state中的数据为计算属性
      computed: {
      // 借助 mapState 生成计算属性 从state中读取数据（对象写法）
      ...mapState({sum: 'sum', school: 'school', subject: 'subject'}) 
    
      // 借助 mapState 生成计算属性 从state中读取数据（数组写法）
      // 当映射的计算属性的名称与 state 的子节点名称相同时 我们也可以给 mapState 传一个字符串数组 
      ...mapState(['sum', 'school', 'subject'])
      }

    2. mapGetters方法：用于帮助我们映射getters中的数据为计算属性
      computed: {
        // 借助 mapGetters 生成计算属性 从state中读取数据（对象写法）
        ...mapGetters({bigSum: 'bigSum'})

        // 借助 mapGetters 生成计算属性 从state中读取数据（数组写法）
        ...mapGetters(['bigSum'])
      }

    3. mapActions方法：用于帮助我们生成与actions对话的方法 即包含$store.dispatch(xxx)的函数
      // mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
      methods: {
        // 借助 mapMutations生成对应方法 方法中会调用commit去联系mutations（对象写法) 传参在绑定事件时传 否则传事件对象
        ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

        // 借助 mapMutations生成对应方法 方法中会调用commit去联系mutations（数组写法)
        ...mapMutations(['JIA', 'JIAN']),
      }
    
    4. mapMutations方法：用于帮助我们生成与mutations对话的方法 即包含$store.commit(xxx)的函数
      // mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
      methods: {
        // 借助 mapActions生成对应方法 方法中会调用dispatch去联系actions（对象写法）
        ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),

        // 借助 mapActions生成对应方法 方法中会调用dispatch去联系actions（数组写法）
        ...mapActions(['jiaOdd', 'jiaWait'])
      }
    
    5. mapActions与mapMutations使用时 若需要传递参数 需要提前在模板绑定事件时传递好参数 否则参数是事件对象
    6. 注意这4个map方法都只接受 对象 或 数组 为参数 
    7. 4个map函数返回的是一个对象 利用对象展开运算符 将其对象展开

*/
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // 程序员自己写的计算属性 让模板代码更简洁
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 注意对象原本就是 key:value形式 key的引号可以省略 value的引号省略了就会查找value的变量 这里的value指的是state里面的数据 不是该组件的变量
    // mapState生成的是对象 里面有方法 而计算属性里面用需要运用对象解构 将对象解构成key：value形式

    // 借助 mapState 生成计算属性 从state中读取数据（对象写法）
    // ...mapState({sum: 'sum', school: 'school', subject: 'subject'})

    // 借助 mapState 生成计算属性 从state中读取数据（数组写法）
    ...mapState(["sum", "school", "subject"]), // 每项简写成一个字符串就是生成的计算属性名跟state的数据名一样

    // 借助 mapGetters 生成计算属性 从state中读取数据（对象写法）
    // ...mapGetters({bigSum: 'bigSum'})

    // 借助 mapGetters 生成计算属性 从state中读取数据（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 程序员亲自写方法
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // 借助 mapMutations生成对应方法 方法中会调用commit去联系mutations（对象写法) 传参在绑定事件时传 否则传事件对象
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),

    // 借助 mapMutations生成对应方法 方法中会调用commit去联系mutations（数组写法)
    // ...mapMutations(['JIA', 'JIAN']),

    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    // 借助 mapActions生成对应方法 方法中会调用dispatch去联系actions（对象写法）
    ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'}),

    // 借助 mapActions生成对应方法 方法中会调用dispatch去联系actions（数组写法）
    // ...mapActions(['jiaOdd', 'jiaWait'])
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 8px;
}
</style>

