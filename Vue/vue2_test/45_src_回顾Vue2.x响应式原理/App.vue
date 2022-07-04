<template>
<!-- 
  Vue2.x的响应式
    实现原理：
      1. 对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截(数据劫持)
      2. 数组类型：通过重写更新数组的一系列方法来实现拦截(对数组的变更方法进行了包裹)
        Object.defineProperty(data, 'count', {
          get() {},
          set() {}
        })
      3. 存在问题：
        (1) 新增属性、删除属性、界面不会更新
        (2) 直接通过下标修改数组 界面不会自动更新
 -->
  <div>
    <h1>我是Vue2写的效果</h1>
    <h2 v-show="person.name">姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2 v-show="person.sex">性别：{{person.sex}}</h2>
    <h2>爱好：{{person.hobby}}</h2>
    <button @click="addSex">点击添加一个sex属性</button>
    <br>
    <br>
    <button @click="deleteName">点击删除一个name属性</button>
    <br>
    <br>
    <button @click="updataHobby">点击修改爱好的第一个属性</button>
  </div>
</template>

<script>
import vue from 'vue';
export default {
    name: "App",
    data() {
      return {
        person: {
          name: '张三',
          age: 18,
          hobby: ['学习', '吃饭']
        }
      }
    },
    methods: {
      addSex() {
        console.log(this.person.sex);
        // this.person.sex = '男';
        // this.$set(this.person, 'sex', '男'); // 给对象添加一个属性
        vue.set(this.person, 'sex', '男'); // 给对象添加一个属性
        console.log(this.person.sex);
      },
      deleteName() {
        console.log(this.person.name);
        // delete this.person.name;
        // this.$delete(this.person, 'name'); // 删除对象中的一个属性
        vue.delete(this.person, 'name'); // 删除对象中的一个属性
        console.log(this.person.name);
      },
      updataHobby() {
        console.log(this.person.hobby);
        // this.person.hobby[0] = '逛街';
        // this.$set(this.person.hobby, 0, '逛街'); // 修改数组中的某个元素
        this.person.hobby.splice(0, 1, '逛街'); // 使用Vue包装的数组方法 splice更新数组
        console.log(this.person.hobby);
      }
    }
}
</script>


