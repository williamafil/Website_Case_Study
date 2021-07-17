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
          <div class="wrapper">
            <ul>
              <li>
                <router-link to="/our-work">Our work</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/insights">Insights</router-link>
              </li>
              <li>
                <router-link to="/news-and-events">News and events</router-link>
              </li>
              <li>
                <router-link to="/careers">Careers</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>

            <form role="search" id="search-form">
	            <button type="submit"><Magnifier /></button>
              <!-- <input aria-label="Search submit button" class="search-submit" type="submit" id="search-submit" value=""> -->
	            <input aria-label="Search field" class="search-field" type="search" placeholder="Search…" name="s" id="search-input" value="">
            </form>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Magnifier from '@/components/images/Magnifier.vue';
import Logo from './images/Logo.vue';

export default {
  components: {
    Logo,
    Magnifier,
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding: 1.125em;
}

header {}

nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 85px;
  padding: 1.125em;
  background-color: #fff;

  .menu {
    position: absolute;
    top: 80px;
    left: 0;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 0;
    overflow: hidden;
    background: #fff;
    transition: all cubic-bezier(0.07, 0.26, 0.27, 1.55) 0.3s;

    .wrapper {
      padding: 2.5em 1.25em;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      margin-bottom: 4em;
    }

    a {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 900;
      color: #000;
      text-decoration: none;

    }

    ul li:not(:nth-child(-n + 2)) {
      margin-bottom: 1.5em;
    }

    ul li:not(:nth-child(-n + 2)) a {
      font-size: .875rem;
      line-height: 1.5;

    }

    // ul li {
    //   margin-bottom: 1.5em;
    // }

    // ul li a {
    //   font-size: .875rem;

    // }

    ul li:nth-child(-n + 2) {
          margin-bottom: 2.25em;
    }

    ul li:nth-child(-n + 2) a {
      margin-bottom: .125em;
      font-size: 1.6rem;

      // font-stretch: ultra-condensed;

    }

    a:hover {
      border-bottom: 6px solid #000;
    }
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
  display: flex;
  justify-content: center;
  width: 22px;
  height: 22px;
  cursor: pointer;

  .line {
    position: absolute;
    width: 100%;
    height: 3px;
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
  top: 46%;
  transform: rotate(-45deg);
}

input[type='checkbox']:checked ~ .hamburger .bottom {
  top: 46%;
  transform: rotate(45deg);
}

input[type='checkbox']:checked ~ .hamburger .middle {
  opacity: 0;
  transition: opacity;
}

input[type='checkbox']:checked ~ .menu {
  height: 100vh;
  // transition: opacity;
  // opacity: 1;
}

button {
  background-color: transparent;
  border: 0;
}



</style>
