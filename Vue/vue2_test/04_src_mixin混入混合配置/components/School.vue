<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
// import {mixin1, mixin2} from "../mixin"
    export default {
        name: 'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        // mixins: [mixin1, mixin2]
    }
</script>

