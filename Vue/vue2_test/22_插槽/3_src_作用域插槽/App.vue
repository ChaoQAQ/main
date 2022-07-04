<template>
<!-- 
  插槽：
    1. 作用：让父组件可以向子组件指定位置插入html结构 也是一种组件间通信的方式 适用于 父组件===>子组件结构跟数据 子组件===>父组件数据
    2. 分类：默认插槽、具名插槽、作用域插槽；
    3. 使用方式：
      (1) 默认插槽：
          子组件在指定位置放入插槽 <slot>没有数据默认显示的信息</slot>
          父组件在子组件标签体内写html内容
      (2) 具名插槽：
          子组件在插槽中添加 name="名字"
          父组件在子组件标签体内容里面添加 旧的slot="名字" 或者 新的v-slot:名字 但是这个新的必须写在template模板标签里
          v-slot:header 可以简写为 #header
      (3) 作用域插槽：
          理解：数据在定义插槽的组件自身 但跟据数据生成的结构需要定义插槽组件的使用者来决定 实现了定义插槽的组件把数据传递给了使用组件的父组件
          使用方法 插槽组件利用自定义属性单向绑定传递数据给使用者 使用者利用两个属性进行接收数据
            旧的scope="插槽组件传过来的数据" 必须写在template模板标签里
            新的slot-scope="插槽组件传过来的数据" 可以不写在template模板标签里 直接写在html标签里
          备注：scope 跟 slot-scope 接收的数据都是对象形式 slot传过来的数据变成了对象中的属性 
                作用域插槽的内部工作原理是将你的插槽内容包裹在一个拥有单个参数的函数里 返回值是一个对象
                scope 跟 slot-scope 他们的值都支持js表达式 所以可以使用对象解构赋值 但属性名必须一样
                <slot> 元素上的 attribute 被称为插槽 prop
 -->
  <div class="container">
    <!-- 每次调用组件 传递不同信息 生成一个同名不同信息的组件 但属性名字是一样的 就重复利用组件了 props方便接收 -->
    <Category title="游戏">
      <!-- scope 范围 旧写法 必须写在template模板标签里 是接收插槽传过来的数据 是一个对象 里面有games属性 -->
      <template scope="{games}">
        <!-- 插槽的使用者用 scope 属性收到插槽传递过来的数据 名字无限制 -->
        <ul>
          <li v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 作用域插槽 数据在插槽定义的那个组件 用这个数据生成的HTML结构是插槽的使用者决定的 需要插槽传递数据 作用域插槽也可以有 name属性 -->
      <!-- 作用域插槽主要体现在 数据在插槽定义的那个组件 而父组件使用了插槽所在的组件的插槽 把数据传递给了父组件 父组件把结构传递给了子组件 -->

      <!-- slot-scope 新写法 可以不写在template模板标签里 直接写在html标签里 是接收插槽传过来的数据 是一个对象 里面有games属性 -->
      <div slot-scope="atguigu">
        <ol>
          <li v-for="(g, index) in atguigu.games" :key="index" style="color: red">{{ g }}</li>
        </ol>
      </div>
    </Category>

    <Category title="游戏">
      <!-- slot-scope 新写法 对象可以采用对象解构赋值 对象解构赋值 键名要求一模一样 -->
      <template slot-scope="{games}">
        <h4 v-for="(g, index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>

    <!-- slot="name" 具名插槽早期写法 -->
    <!-- v-slot:name 具名插槽新写法 名字不加冒号 但是该写法必须写在 template 模板里 -->
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: { Category },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
/* 组件标签体内的样式 写在父组件 子组件都可以 */
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>

