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
  /* background-color: rgb(212, 238, 255); */
  background-color: #fff;
}

img {
  width: 100%;
  height: auto;
}

p {
  font-size: 1rem;
}

/*
  ::: H2
*/
.h2-motto {
  margin: 0.5rem 0 1.5rem 0;
  font-size: 2.625rem;
  font-weight: 900;
  line-height: 1.2;
}
.section-heading {
  font-family: 'Source Serif Pro', serif;
  font-size: 2.25rem;
  font-weight: 900;
  margin-top: 1.875rem;
}
.section-description {
  font-size: 1.125rem;
  margin: 1.125rem 0;
}

/*
  ::: Button Animation
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
