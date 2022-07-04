<template>
    <div class="school">
        <h1>学校名称：{{name}}</h1>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        }
    }
</script>

<style>
    .school {
        background-color: skyblue;
    }
</style>