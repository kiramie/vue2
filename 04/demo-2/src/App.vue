<template>
  <div class="app-container">
    <h1 ref="h1Ref">App 根组件</h1>
    <button @click="showThis">打印 this</button>
    <h4>msg: {{msg}}</h4>
    <h4>info: {{info}}</h4>
    <h4>countFromRight: {{countFromRight}}</h4>
    <button @click="rightAdd">right add()</button>
    <input type="text" v-if="inputVisible" ref="iptRef" @blur="showButton">
    <button v-else @click="showInput">展示输入框</button>
    <hr/>

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left :lMsg="msg" :lInfo="info"></Left>
      <Right ref="rightRef" @changeCount="getNewCount"></Right>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left";
import Right from "@/components/Right";

export default {
  components: {
    Left,
    Right
  },
  data() {
    return {
      msg: 'msg from app.vue',
      info: {name: '张三', age: 18},
      countFromRight: 0,
      inputVisible: false,
    }
  },
  methods: {
    getNewCount(val) {
      console.log('changeCount 事件被触发了！', val)
      this.countFromRight = val
    },
    showThis() {
      console.log(this)
      this.$refs.h1Ref.style.color = 'red'
    },
    rightAdd() {
      this.$refs.rightRef.add()
    },
    showInput() {
      this.inputVisible = true
      // this.$refs.iptRef.focus()

      this.$nextTick(() => {
        this.$refs.iptRef.focus()
      })
    },
    showButton(){
      this.inputVisible = false
    }
  },
  /* updated() {
    this.$refs.iptRef.focus()
  }, */
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: honeydew;
}

.box {
  display: flex;
}
</style>
