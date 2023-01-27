<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr/>
    <!-- 声明一个插槽区域 -->
    <!-- vue 官方规定：每一个 slot 插槽，都要有一个 name 名称 -->
    <!-- 如果省略了 slot 的 name 属性，则有一个默认名称叫做 default -->
    <slot name="default">
      <h6>这是 default 插槽的后备内容</h6>
    </slot>
    <slot name="scopeSlot" v-for="item in list" :user="item">
      <h6>这是 scope 插槽的后备内容</h6>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {id: 101, name: '张三', state: true},
        {id: 102, name: '李四', state: false},
        {id: 103, name: '王五', state: true},
      ]
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
