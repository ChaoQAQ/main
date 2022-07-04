<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name: "About",
        // mounted() {
        //     console.log('About组件挂载完毕', this);
        //     window.AbortRoute = this.$route; // 每个组件的 $route路由 都是唯一的
        //     window.AbortRouter = this.$router; // 每个组件的 $router路由器是相同的
        // },
        // beforeDestroy() {
        //     console.log('About组件销毁了');   
        // } 
        // 路由隐藏的组件最后都被销毁了 再次出现是重新挂载组件   
    }
</script>

