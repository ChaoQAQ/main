<template>
    <ul>
        <li>{{$route.params.id}}</li>
        <li>{{$route.params.title}}</li>
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
