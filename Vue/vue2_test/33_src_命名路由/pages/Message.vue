<template>
  <div>
        <ul>
        <li v-for="m in messageList" :key="m.id">
          <!-- 跳转路由并携带query参数 to的字符串写法 -->
          <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->

          <!-- 跳转路由并携带query参数 to的对象写法 -->
          <!-- <router-link :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title
            }
          }">
            {{m.title}}
          </router-link> -->
          <!-- 命名路由 用name代替path 但是to必须写成对象形式 配置路由时须配置name属性 -->
          <router-link :to="{
            name: 'detail',
            query: {
              id: m.id,
              title: m.title
            }
          }">
            {{m.title}}
          </router-link>
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
        }
    }
</script>

