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

  /* background-color: #fff; */
}

img {
  width: 100%;
  height: auto;
}

p {
  margin: 1em 0;
  font-size: 0.875rem;
}

/*
  TITLE: Button Animation
*/
.animated-btn {
  position: relative;
  font-size: 1rem;
  font-weight: 900;
  color: #000;
  text-decoration: none;
  z-index: 10;
}
.animated-btn::after {
  position: absolute;
  top: 8px;
  right: 0;
  z-index: -1;
  width: 90%;
  height: 1em;
  content: '';
  background-color: #d1d3d4;
  transition: 0.1s ease-in-out all;
}
.animated-btn:hover::after {
  top: 0;
  width: 100%;
  height: 1.5em;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
