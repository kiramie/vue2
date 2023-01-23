<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <h4>msg: {{msg}}</h4>
    <h4>info: {{info}}</h4>
    <p><input v-model="sendMsg" type="text"><button @click="sendRight">发送Right</button></p>
  </div>
</template>

<script>
import eventBus from "@/components/EventBus";

export default {
  props: ['lMsg', 'lInfo'],
  data() {
    return {
      msg: this.lMsg,
      info: this.lInfo,
      sendMsg:''
    }
  },
  methods: {
    sendRight() {
      if (this.sendMsg.trim() === '') {
        alert('sendMsg不能为空')
      }
      eventBus.$emit('share', this.sendMsg.trim())
    }
  }
}
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
