<template>
  <header>
    <div class="container">
      <nav>
        <Logo />
        <input type="checkbox" name="hamburger-toggle" id="hamburger-toggle" />
        <label class="hamburger" for="hamburger-toggle">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </label>
        <div class="menu">
          <h2>Our work</h2>
          <h2>About</h2>
          <ul>
            <li>Insights</li>
            <li>News and events</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from './images/Logo.vue';

export default {
  components: {
    Logo,
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 1.125em;
}

header {
}

nav {
  padding: 1.125em;
  background-color: #fff;
  height: 85px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  .menu {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    overflow: hidden;
    transition: all cubic-bezier(0.07, 0.26, 0.27, 1.55) 0.3s;
    height: 0;
    background: #fff;
  }
}

svg {
  width: 70px;
  height: auto;
}

input[type='checkbox'] {
  display: none;
  visibility: hidden;
}

.hamburger {
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 22px;
  height: 22px;

  .line {
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: #000;
    border-radius: 8px;
    transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.2s;
  }

  .top {
    top: 16%;
  }
  .middle {
    top: 46%;
  }
  .bottom {
    top: 78%;
  }
}

input[type='checkbox']:checked ~ .hamburger .top {
  transform: rotate(-45deg);
  top: 46%;
}

input[type='checkbox']:checked ~ .hamburger .bottom {
  transform: rotate(45deg);
  top: 46%;
}

input[type='checkbox']:checked ~ .hamburger .middle {
  transition: opacity;
  opacity: 0;
}

input[type='checkbox']:checked ~ .menu {
  height: 100vh;
  // transition: opacity;
  // opacity: 1;
}
</style>
