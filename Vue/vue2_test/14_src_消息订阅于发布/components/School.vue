<template>
  <div class="school">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendName">点击发送学校名称给学生</button>
  </div>
</template>

<script>
// 引入消息订阅与发布js文件 下载 npm i pubsub-js
import pubsub from "pubsub-js"; 

export default {
  name: "Student",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
      number: 0,
    };
  },
  methods: {
    sendName() {
        // pubsub是一个对象有属性跟方法 publish发布 发行一个消息
        pubsub.publish('hello', this.name); // 发布hello消息 传递参数
    }
  },
};
</script>

<style lang="less" scoped>
.school {
  background-color: skyblue;
  margin-top: 5px;
  padding: 5px;
}
</style>    

