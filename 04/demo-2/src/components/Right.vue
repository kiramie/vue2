<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <h4>count: {{ count }}</h4>
    <button @click="add">+1</button>
    <h3 style="color: darkred">receiveMsg: {{receiveMsg}}</h3>
  </div>
</template>

<script>
import EventBus from "@/components/EventBus";

export default {
  data() {
    return {
      count: 0,
      receiveMsg: ''
    }
  },
  methods: {
    add() {
      this.count++
      this.$emit('changeCount', this.count)
    }
  },
  created() {
    EventBus.$on('share', (val) => {
      this.receiveMsg = val
    })
  }
}
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
