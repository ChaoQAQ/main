<template>
    <ul>
        <li>{{id}}</li>
        <li>{{title}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'Detail', // 局部
        props: ['id', 'title'],
        computed: {
            // id() {
            //     return this.$route.params.id;
            // },
            // title() {
            //     return this.$route.params.title;
            // }
        },
        mounted() {
            console.log(this.$route);
        },
    }
</script>
