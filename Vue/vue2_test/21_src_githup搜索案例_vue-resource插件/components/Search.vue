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
        this.$bus.$emit("updateListDate", {isFirst: false, isLoading: true, errorMessage: '', users: []}); 

        // vue-resource 插件 引入使用了该插件 vm跟组件实例身上就多了个 $http方法 使用方法跟axios一样 resource资源
        this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            (response) => {
                this.$bus.$emit("updateListDate", {isFirst: false, isLoading: false, errorMessage: '', users: response.data.items}); 
            },
            (error) => {
                this.$bus.$emit("updateListDate", {isFirst: false, isLoading: false, errorMessage: error.message, users: []}); 
            }
        );
    },
  },
};
</script>

<style>
</style>