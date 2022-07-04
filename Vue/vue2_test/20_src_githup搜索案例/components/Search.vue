<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <!-- 双向绑定存储输入框的值到data -->
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
// 引入axios
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
        // 采用对象传参 让代码易读性变高
        // 搜索按钮按下时传递数据 显示加载中 将欢迎词隐藏 搜索按下后立即更新数据
        this.$bus.$emit("updateListDate", {isFirst: false, isLoading: true, errorMessage: '', users: []}); 

        // axios.get('https://api.github.com/search/users?q=我们搜索的内容') 该服务器设置了允许跨域之类的
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            (response) => {
                // console.log('数据请求成功' + response.data.items); // 拿到成功回调数据的回应数据
                // console.log(this); // 指向当前组件实例

                // 成功的传递数据 决定显示列表
                this.$bus.$emit("updateListDate", {isFirst: false, isLoading: false, errorMessage: '', users: response.data.items}); 
            },
            (error) => {
                // 失败的传递数据 决定显示错误信息
                this.$bus.$emit("updateListDate", {isFirst: false, isLoading: false, errorMessage: error.message, users: []}); 
            }
        );
    },
  },
};
</script>

<style>
</style>