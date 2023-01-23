<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr />

    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left></Left>
      <!--<Mid></Mid>-->
      <Right></Right>
    </div>
    <button @click="flag = !flag">Toggle Flag</button>
    <Test info="你好" v-if="flag"></Test>
  </div>
</template>

<script>
import Left from "@/components/Left";
import Mid from "@/components/Mid";
import Right from "@/components/Right";
import Test from "@/components/Test";

export default {
  components: {
    Left,
    Mid,
    Right,
    Test,
  },
  data() {
    return {
      flag: true
    }
  }
}
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
