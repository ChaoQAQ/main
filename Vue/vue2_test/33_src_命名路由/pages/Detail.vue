<template>
    <ul>
        <li>{{$route.query.id}}</li>
        <li>{{$route.query.title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail', // 局部
        mounted() {
            console.log(this.$route);
        },
    }
</script>
