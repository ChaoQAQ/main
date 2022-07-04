<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
            <h2>Vue Router Demo</h2>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="go">测试go</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Banner',
        methods: {
            back() {
                console.log(this.$router);
                this.$router.back(); // 路由器中的back方法进行后退
            },
            forward() {
                this.$router.forward(); // 路由器中的forward方法进行前进
            },
            go() {
                this.$router.go(2); // 路由器中的go方法传递参数进行前进后退 正数前进 负数后退
            }
        }
    }
</script>
