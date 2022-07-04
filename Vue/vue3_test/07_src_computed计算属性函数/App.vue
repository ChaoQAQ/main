<template>
<!-- 
  computed函数
    与Vue2.x中computed配置功能一致
    写法：
      import {computed} from 'vue';
      setup() {
        ...
        // 计算属性简写 只有get
        let fullName = computed(() => {
          return person.firstName + '-' + person.lastName;
        })
        // 计算属性完整写法 有get 也有set
        let fullName = computed({
          get() {
            return person.firstName + '-' + person.lastName;
          },
          set(value) {
            const nameArr = value.split('-');
            person.firstName = nameArr[0];
            person.lastName = nameArr[1];
          }
        })
      }
 -->
  <h1>一个人的信息</h1>
  姓：<input type="text" v-model="person.firstName" />
  <br />
  <br />
  名：<input type="text" v-model="person.lastName" />
  <br />
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "App",
  // Vue2的计算属性实现
  // computed: {
  //   fullName() {
  //     return this.person.firstName + '-' + this.person.lastName;
  //   }
  // },

  setup() {
    // 数据
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // Vue3计算属性 简写(没有考虑计算属性被修改的情况)
    // person.fullName = computed(() => {
    //   return person.firstName + "-" + person.lastName;
    // });

    // Vue3计算属性 完整写法(考虑计算属性的读与写)
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value) {
        // split(分隔符号, 分隔元素的数量默认全部) 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组 以一个指定的分割字串来决定每个拆分的位置
        const nameArr = value.split('-');
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      }
    });

    // 返回一个对象（常用）
    return {
      person,
    };
  },
};
</script>
