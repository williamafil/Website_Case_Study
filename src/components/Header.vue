<template>
  <header>
    <div class="container">
      <nav class="sticky">
        <router-link to="/" class="logo-link" aria-label="homepage" alt="logo name">
          <Logo class="logo-svg" />
        </router-link>
        <input type="checkbox" name="hamburger-toggle" id="hamburger-toggle" />
        <label class="hamburger" for="hamburger-toggle">
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </label>
        <div class="nav-menu">
          <ul class="nav-links">
            <li class="nav-link-item"><router-link to="/">Our work</router-link></li>
            <li class="nav-link-item"><router-link to="/">About</router-link></li>
          </ul>

          <div></div>
        </div>
        <!-- mobile menu -->
        <div class="menu">
          <div class="wrapper">
            <ul>
              <li>
                <router-link to="/">Our work</router-link>
              </li>
              <li>
                <router-link to="/">About</router-link>
              </li>
              <li>
                <router-link to="/">Insights</router-link>
              </li>
              <li>
                <router-link to="/">News and events</router-link>
              </li>
              <li>
                <router-link to="/">Careers</router-link>
              </li>
              <li>
                <router-link to="/">Contact</router-link>
              </li>
            </ul>

            <form role="search" id="search-form">
              <button type="submit" aria-label="Search submit button" class="search-button">
                <Magnifier class="search-icon" />
              </button>
              <input
                aria-label="Search field"
                class="search-field"
                type="search"
                placeholder="Search…"
                name="s"
                value=""
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Magnifier from './images/Magnifier.vue';
import Logo from './images/Logo.vue';

export default {
  name: 'Home',
  components: {
    Logo,
    Magnifier,
  },
};
</script>
<style lang="scss" scoped>
header {
  height: 85px;
}
.container {
  position: relative;
  padding: 1.125em;
}

nav.sticky {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: calc(100vw - 2.25em);
  margin: 1.125em;
}
@media (min-width: 768px) {
  nav.sticky {
    position: absolute;
    top: 0;
    left: 0;
  }
}

nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  padding: 1.125em;
  background-color: #fff;

  .logo-link {
    display: flex;

    .logo-svg {
      width: 70px;
      height: auto;
    }
  }
  .nav-menu {
    display: none;
    visibility: hidden;
  }
  .menu {
    position: absolute;
    top: 80px;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 0;
    overflow: hidden;
    background: #fff;
    transition: all cubic-bezier(0.07, 0.26, 0.27, 1.55) 0.3s;

    .wrapper {
      width: 100%;
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
      font-size: 0.875rem;
      line-height: 1.5;
    }

    ul li:nth-child(-n + 2) {
      margin-bottom: 2.25em;
    }

    ul li:nth-child(-n + 2) a {
      margin-bottom: 0.125em;
      font-size: 1.6rem;

      // font-stretch: ultra-condensed;
    }

    a:hover {
      border-bottom: 6px solid #000;
    }
  }
  @media (min-width: 980px) {
    .menu {
      display: none;
    }
    .hamburger {
      display: none;
      visibility: hidden;
    }
    .nav-menu {
      display: block;
      visibility: visible;
      background-color: #ccc;
      width: 70%;
    }
    .nav-links {
      display: flex;
      width: 50%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .nav-link-item {
    }
  }
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

#search-form {
  display: flex;
  width: 100%;
  border-bottom: 6px solid #000;

  .search-button {
    width: 25px;
    margin-bottom: 0.5em;
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
  .search-icon {
    width: 25px;
  }

  .search-field {
    width: 100%;
    margin-bottom: 0.5em;
    margin-left: 2em;
    font-size: 1rem;
    letter-spacing: 0.01rem;
    border: 0;
  }
}
</style>
