<template>
  <div>
        <ul>
        <li v-for="m in messageList" :key="m.id">
          <!-- 跳转路由并携带 params参数 to的字符串写法 -->
          <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

          <!-- 跳转路由并携带 params参数 to对象写法时 不能使用path配置 只能使用name配置 -->
          <router-link :to="{
            name: 'detail',
            params: {
              id: m.id,
              title: m.title
            }
          }">
            {{m.title}}
          </router-link>
          <button @click="pushShow(m)">push模式</button>
          <button @click="replaceShow(m)">replace模式</button>
        </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Message',
        data() {
          return {
            messageList: [
              {id: '001', title: '信息1'},
              {id: '002', title: '信息2'},
              {id: '003', title: '信息3'}
            ]
          }
        },
        methods: {
          pushShow(m) {
            // console.log(this.$router); // 整个应用只有一个路由器
            this.$router.push({ // 路由器的原型上的方法 可以控制路由的跳转
              name: 'detail',
              params: {
                id: m.id,
                title: m.title
              }
            })
          },
          replaceShow(m) {
            this.$router.replace({
              name: 'detail',
              params: {
                id: m.id,
                title: m.title
              }
            })
          } 
        }
    }
</script>

