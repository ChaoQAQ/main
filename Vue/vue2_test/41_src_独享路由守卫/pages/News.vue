<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name: 'News',
        data() {
            return {
                opacity: 1
            }
        },
        // mounted() {
        //     this.timer = setInterval(() => {
        //         this.opacity -= 0.1;
        //         console.log('@');
        //         if (this.opacity <= 0) this.opacity = 1;
        //     }, 160)
        // },
        // beforeDestroy() {
        //     console.log('News组件即将被销毁');   
        //     clearInterval(this.timer);
        // }
        activated() { // 当前组件出现时调用这个钩子 
            console.log('News组件被激活了'); 
            this.timer = setInterval(() => {
                this.opacity -= 0.1;
                console.log('@');
                if (this.opacity <= 0) this.opacity = 1;
            }, 160)
        },
        deactivated() { // 当前组件切走时调用这个钩子
            console.log('News组件被失活了');
            clearInterval(this.timer);
        }
    }
</script>

