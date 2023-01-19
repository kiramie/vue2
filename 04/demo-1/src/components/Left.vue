<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <!--默认传入的是字符串9-->
    <MyCount init="9"></MyCount>
    <!--加:变v-bind绑定后其内容变为js,是数字9-->
    <MyCount :init="9"></MyCount>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
