<template>
<!-- 
  toRaw函数与markRaw函数：
    toRaw：
      1. 作用：将一个由reactive函数生成的响应式对象转为普通原始对象
      2. 使用场景：用于读取响应式对象对应的普通原始对象 对这个普通原始对象的所有操作 不会引起页面更新
    markRaw：
      1. 作用：标记一个对象 使其永远不会再成为响应式对象
      2. 应用场景：
        (1) 有些值不应该被设置为响应式的 例如复杂的第三方类库（axios）
        (2) 当渲染具有不可变数据源的大列表时 跳过响应式转换可以提高性能
 -->
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点击sum++</button>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>涨薪：{{job.j1.salary}}k</h2>
  <h2 v-show="person.car">汽车的信息：{{person.car}}</h2>
  <button @click="name+='~'">点我修改名字</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
  <button @click="showRawPerson">输出最原始的person</button>
  <button @click="addCar">点击给人添加一台车</button>
  <button @click="updateCarPrice">点击修改汽车的价格</button>
</template>

<script>
import { reactive, ref, toRefs, toRaw, markRaw } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({ 
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    function showRawPerson() {
      // toRaw函数将一个由reactive函数生成的响应式对象转为普通原始对象
      const p = toRaw(person);
      console.log(p);

      const s = toRaw(sum);
      console.log(s);
    }

    function addCar() {
      let car = {
        name: '奔驰',
        price: 50
      }
      // mark标记 Raw原始 markRaw函数标记一个对象 使其永远不会再成为响应式对象
      person.car = markRaw(car);
    }

    function updateCarPrice() {
      person.car.price++;
      console.log(person.car.price);
    }

    // 返回一个对象（常用）
    return {
      sum,
      person,
      ...toRefs(person), // toRefs返回的是一个对象 在对象中写对象要利用扩展运算符将对象展开
      showRawPerson,
      addCar,
      updateCarPrice
    }
  }
}
</script>
