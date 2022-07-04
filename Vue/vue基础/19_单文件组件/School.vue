<template>
<!-- template必须有一个根元素 -->
  <div>
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
    export default { // 默认暴露
        name: 'School',
        data() {
            return {
                name: "尚硅谷",
                address: "北京",
            }
        }
}
</script>
