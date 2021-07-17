<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
  setup() {
    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: rgb(212, 238, 255);
}

img {
  width: 100%;
  height: auto;
}

#app {
  font-size: 16px;
  color: #000;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
