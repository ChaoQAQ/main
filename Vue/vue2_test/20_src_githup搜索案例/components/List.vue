<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！！！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中......</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errorMessage">{{info.errorMessage}}</h1>
  </div>
</template>

<script>
export default {
    name: "List",
    data() {
      return {
        info: {
          isFirst: true, // 页面初次显示欢迎你
          isLoading: false, // 页面加载中
          errorMessage: '', // 请求失败
          users: []
        }
      }
    },
    mounted() {
      // 在全局事件总线上绑定自定义事件 收到数据指向回调函数
      this.$bus.$on('updateListDate', (dataObj) => {
        this.info = {...this.info, ...dataObj} // 将两个对象分开合并成一个对象 相同属性后面的值会覆盖前面的值
        // Object.assign() 方法将所有可枚举和自有属性从一个或多个对象复制到目标对象 返回修改后的对象

        // 采用合并对象修改data中的对象数据 更方便 将每次接收的数据跟原有的数据合并 让接收的覆盖原来的数据
        // Object.assign(this.info, dataObj) // 将两个对象分开合并成一个对象 相同属性后面的值会覆盖前面的值
      }) 
    },
    beforeDestroy() {
      // 在该组件销毁前 解绑该组件在全局事件总线上定义的自定义事件
      this.$bus.$off('updateListDate');
    }
  }
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}
.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}
.card-text {
  font-size: 85%;
}
</style>