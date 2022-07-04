<template>
<!-- 
  Suspense内置组件
    1. 等待异步组件时渲染一些额外内容 让应用有更好的用户体验
    2. 使用步骤
      (1) 异步引入组件
        import {defineAsyncComponent} from 'vue';
        const Child = defineAsyncComponent(() => import('./components/Child')); // 动态异步引入组件
      (2) 使用Suspense内置组件包裹组件 Suspense组件里面放置了两个插槽 并配置好default(默认) 与 fallback(退路、应急) 
        <template>
          <Suspense>
            <template v-slot:default>
              <Child/>
            </template>
            <template v-solt:fallback>
              <h2>Loding...</h2>
            </template>
          </Suspense>
        </template>
 -->
  <div class="app">
    <h1>我是App组件</h1>
    <!-- Suspense悬念 内置组件 底层放置了两个插槽 -->
    <Suspense>
      <!-- default默认 默认想要展示的组件 -->
      <template v-slot:default>
        <Child/>
      </template>
      <!-- fallback退路、应急 default插槽没内容时展示 -->
      <template v-slot:fallback>
        <h3>Loding...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // import Child from './components/Child'; // 静态引入 所有组件加载完毕一起显示

  import {defineAsyncComponent} from 'vue';
  const Child = defineAsyncComponent(() => import('./components/Child')); // 动态异步引入 先加载的组件先展示 异步加载好了自己展示
  
  export default {
    name: 'App',
    components: {Child}
  }
</script>

<style scoped>
  .app {
    background-color: pink;
    padding: 10px;
  }
</style>