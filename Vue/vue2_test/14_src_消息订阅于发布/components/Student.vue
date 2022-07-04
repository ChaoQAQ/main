<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age }}</h2>
  </div>
</template>

<script>
// 引入消息订阅与发布js文件 下载 npm i pubsub-js
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    getName(messageName, data) {
      console.log("有人发布了hello消息，hello消息的回调函数执行了", messageName, data);
    },
  },
  mounted() {
    // subscribe订阅 订阅一个hello消息 回调函数在收到发布hello消息时执行 接收第一个参数是消息名 第二个参数是消息内容数据
    // 类似于定时器 可以起个名 放到组件身上 方便其他配置项拿到
    this.pubid = pubsub.subscribe("hello", this.getName);
    // this.pubid = pubsub.subscribe("hello", (messageName, data) => {
    //   console.log("有人发布了hello消息，hello消息的回调函数执行了", messageName, data);
    //   console.log(this); // 箭头函数下指向组件实例对象VueComponent
    // });
  },
  beforeDestroy() {
    // 在组件销毁之前取消订阅一个事件 在订阅消息前面 +un 表示否定取消订阅
    pubsub.unsubscribe(this.pubid);
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 5px;
}
</style>

