<template>
<!-- 
    Fragment碎片
        1. 在Vue2中：组件必须有一个根标签
        2. 在Vue3中：组件可以没有根标签 内部会将多个标签包含在一个Fragment（组件）虚拟元素中 不会被渲染
        3. 好处：减少标签层级 减小内存占用

    Teleport传送、瞬移
        什么是Teleport————Teleport是一种能够将我们的组件html结构移动到指定位置的技术组件标签
        <teleport to="移动位置"> // to的值可以是html元素 也可以是选择器
            <div class="mask" v-if="isShow">
                <div class="dialog">
                    <h1>我是弹窗</h1>
                    <h2>我是内容</h2>
                    <button @click="isShow = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
 -->
    <button @click="isShow = true">点击显示弹窗</button>
    <!-- teleport传送 to就是传送到某个位置 位置可以是html元素 也可以是选择器 一般body -->
    <teleport to="body">
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <h1>我是弹窗</h1>
                <h2>我是内容</h2>
                <h2>我是内容</h2>
                <h2>我是内容</h2>
                <button @click="isShow = false">关闭弹窗</button>
            </div>
        </div>
    </teleport>
</template>

<script>
    import {ref} from 'vue';
    export default {
        name: 'Dialog',
        setup() {
            let isShow = ref(false);

            return {isShow}
        }
    }
</script>

<style scoped>
    .mask {
        position: absolute;
        /* 设置四个位置为0 默认占满容器 */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .5);
    }
    .dialog {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 300px;
        height: 300px;
        background-color: green;
    }
</style>