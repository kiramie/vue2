<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/favicon.ico">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <Admin></Admin>-->
    <Test></Test>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Admin from './components/Admin.vue'
import Test from './components/Test.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    // Admin,
    Test,
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
