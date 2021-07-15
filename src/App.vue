<template>
  <Header />
  <router-view />

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

// export default {
//   name: 'App',
//   components: {
//     Header,
//     HelloWorld
//   }
// }
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
