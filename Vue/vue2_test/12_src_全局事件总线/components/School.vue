<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendName">点击发送学校名称给学生</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京',
                number: 0
            }
        },
        methods: {
           sendName() {
               this.$bus.$emit('hello', this.name);
           } 
        },
    }
</script>

<style lang="less" scoped>
    .school {
        background-color: skyblue;
        margin-top: 5px;
        padding: 5px;
    }
</style>    

