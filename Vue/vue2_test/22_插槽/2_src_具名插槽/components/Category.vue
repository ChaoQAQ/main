<template>
    <div class="category"> 
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽 挖个坑 等着别人往这里填东西 -->
        <slot name="center">我是一些默认值 当使用者没有传递具体结构时 我会出现</slot>
        <!-- 使用多个插槽 就相当于把组件标签体内容重复使用 此时就需要使用 具名插槽 就是给插槽添加 name属性 -->
        <!-- 添加了 name属性的插槽 值只会对相同名字的组件标签体内容生效 -->
        <slot name="footer">我是一些默认值 当使用者没有传递具体结构时 我会出现</slot>
    </div>
</template>

<script>
    export default {
        name: 'Category', // 类别组件
        props: ['title'], 

    }
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        background-color: pink;
        text-align: center;
    }
</style>