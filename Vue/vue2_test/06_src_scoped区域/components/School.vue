<template>
    <div>
        <h2 class="pink">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '尚硅谷atguigu',
                address: '北京'
            }
        }
    }
</script>

<style lang="less" scoped>
// scoped 范围的意思 限制只限当前组件使用 没有写的话就会所有组件可以用 导致类名冲突
// 添加了scoped属性 里面的css类名后面会随机添加一个data-v-随机数的属性 该随机数是唯一的 然后根据类名的属性去匹配
// Vue在解析代码时先执行import语句 在执行new Vue 最后解析模板 css类名冲突以最后import引进的为主
/*scoped样式
    作用：让样式在局部生效 防止多个组件类名冲突
    写法：<style scoped>
*/

    .pink {
        background-color: pink;
    }
</style>    

