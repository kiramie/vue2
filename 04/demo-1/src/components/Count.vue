<template>
  <div class="countStyle">
    <h5>Count 组件</h5>
    <p>count 的值是：{{ count }}</p>
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
export default {
  props:['init'],
  data() {
    return {
      count: this.init
    }
  }
}
</script>

<style scoped>
.countStyle {
  width: 300px;
  padding: 20px;
  border: black 1px solid;
}
</style>
