<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <div class="row">
    <!-- type -->
    <s-button>默认按钮</s-button>
    <s-button type="primary">主要按钮</s-button>
    <s-button type="success">成功按钮</s-button>
    <s-button type="info">信息按钮</s-button>
    <s-button type="warning">警告按钮</s-button>
    <s-button type="danger">危险按钮</s-button>
  </div>
  <div class="row">
    <s-button type="primary" icon="s-icon-search">搜索</s-button>
    <s-button type="primary" icon="ss s-icon-search">测试icon后面加属性</s-button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
