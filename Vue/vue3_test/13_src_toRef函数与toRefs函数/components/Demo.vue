<template>
<!-- 
  toRef函数：
    1. 作用：创建一个ref对象 其value值指向另一个对象中的某个属性
    2. 语法：const name = toRef(person, 'name')
    3. 应用：要将响应式对象中的某个属性单独提供给外部使用时 且不丢失响应式
    4. 扩展：toRefs与toRef功能一致 但可以批量浅层次的创建多个ref对象组成的对象 语法：toRefs(person)
    5. 备注：ref函数是新定义一个基本类型的响应式数据
 -->
  <h2>{{person}}</h2>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>涨薪：{{job.j1.salary}}k</h2>
  <button @click="name+='~'">点我修改名字</button>
  <button @click="age++">点我修改年龄</button>
  <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 30
        }
      }
    })

    // const name1 = person.name;
    // console.log(name1); // 打印的是普通的字符串张三 这是定义常量 把person.name赋值给这个常量

    // toRef函数
    // const name2 = toRef(person, 'name');
    // console.log(name2); // 打印的是ref引用对象

    // toRefs函数
    const x = toRefs(person);
    console.log(x); // 打印的是一个对象 里面有多个ref引用对象（浅层次）

    // 返回一个对象（常用）
    return {
      person, // 将不常用的对象直接交出去

      // name: person.name, // 相当于name: '张三' 修改的是返回的新name属性 而这个新name属性就是一个普通的数 并不是响应式的

      // 利用toRef函数创建一个ref对象 其value值指向另一个对象中的某个属性
      /* name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary'), */

      // 利用toRefs函数将对象中的一层属性转换为ref引用对象 内部悄悄的把值利用get指向了对象里面的属性 所以是响应式数据
      ...toRefs(person) // toRefs返回的是一个对象 在对象中写对象要利用扩展运算符将对象展开

      // ref函数是新定义一个响应式数据 不存在引用源对象里面的响应式数据
      /* name: ref(person.name),
      age: ref(person.age),
      salary: ref(person.job.j1.salary) */
    }
  }
}
</script>
