<template>
<!-- 
    Vue3.x生命周期
        1. Vue3中可以继续使用Vue2中的生命周期钩子 但有两个钩子被更名：
            (1) beforeDestroy 改名为 beforeUnmount
            (2) destroyed 改名为 unmounted
        2. Vue3也提供了Composition API形式的生命周期钩子 与Vue2中钩子对应关系如下：
            (1) beforeCreate  ====>  setup()
            (2) created       ====>  setup()
            (3) beforeMount   ====>  onBeforeMount
            (4) mounted       ====>  onMounted
            (5) beforeUpdate  ====>  onBeforeUpdate
            (6) updated       ====>  onUpdated
            (7) beforeUnmount ====>  onBeforeUnmount
            (8) unmounted     ====>  onUnmounted
        3. setup函数会在beforeCreate钩子之前调用
        4. 组合式API生命周期钩子会在 生命周期钩子之前调用
        5. 父组件的生命周期钩子会在子组件生命周期钩子之前调用
 -->
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
   
    // 通过组合式API的形式去使用生命周期钩子 他们都是生命周期函数 参数接收应该回调函数
    // 组合式API生命周期钩子会在 生命周期钩子之前调用
        onBeforeMount(() => {
            console.log('---onBeforeMount---');
        })
        onMounted(() => {
            console.log('---onMounted---');
        })
        onBeforeUpdate(() => {
            console.log('---onBeforeUpdate---');
        })
        onUpdated(() => {
            console.log('---onUpdated---');
        })
        onBeforeUnmount(() => {
            console.log('---onBeforeUnmount---');
        })
        onUnmounted(() => {
            console.log('---onUnmounted---');
        })

    // 返回一个对象（常用）
    return {
      sum
    };
  },
 /*  beforeCreate() {
    console.log('---beforeCreate---', this);
  },
  created() {
    console.log('---created---', this);
  },
  beforeMount() {
    console.log('---beforeMount---', this);
  },
  mounted() {
    console.log('---mounted---', this);
  },
  beforeUpdate() {
    console.log('---beforeUpdate---', this);
  },    
  updated() {
    console.log('---updated---', this);
  },
  // Vue3.x将beforeDestroy销毁之前 改为 beforeUnmount卸载之前
  beforeUnmount() {
    console.log('---beforeUnmount---', this);
  },
  // Vue3.x将destroyed销毁 改为 unmounted卸载
  unmounted() {
    console.log('---unmounted---', this);
  } */
};
</script>
