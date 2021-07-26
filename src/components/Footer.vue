<template>
  <footer>
    <div class="container">
      <section class="logo">
        <router-link :to="{ name: Home }"><Logo color="white" /></router-link>
      </section>

      <section class="newsletter">
        <p class="newsletter-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, eveniet minus? Soluta neque
          eaque asperiores optio perferendis maiores cupiditate.
        </p>
        <div class="subscription-form">
          <form @submit.prevent="">
            <input
              class="email-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value=""
              autocomplete="email"
            />
            <input type="submit" value="Subscribe" class="submit-button" />
          </form>
        </div>
      </section>

      <section class="info office">
        <h3 class="info-heading">Vancouver</h3>
        <p class="office-address">
          <span>123-45 Burrard Street</span>
          <span>Vancouver, BC V2V 3A3</span>
          <span>Canada</span>
        </p>
      </section>

      <section class="info explore">
        <h3 class="info-heading">Explore</h3>
        <ul class="explore-list">
          <li><router-link to="/">Our work</router-link></li>
          <li><router-link to="/">About us</router-link></li>
          <li><router-link to="/">Design for Innovation</router-link></li>
          <li><router-link to="/">Insights</router-link></li>
          <li><router-link to="/">News and events</router-link></li>
          <li><router-link to="/">Careers</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
      </section>

      <section class="info social">
        <h3 class="info-heading">Social</h3>
        <ul class="social-list">
          <li><router-link to="/">LinkedIn</router-link></li>
          <li><router-link to="/">Twitter</router-link></li>
          <li><router-link to="/">Dribbble</router-link></li>
          <li><router-link to="/">Instagram</router-link></li>
        </ul>
      </section>

      <section class="info inquiries">
        <h3 class="info-heading">Inquiries</h3>
        <ul class="inquiries-list">
          <li><router-link to="/">hello@abc.com</router-link></li>
          <li><router-link to="/">work@abc.com</router-link></li>
        </ul>
      </section>

      <section class="info misc">
        <h3 class="info-heading"></h3>
        <ul class="misc-list">
          <li><router-link to="/">Privacy Policy</router-link></li>
          <li><router-link to="/">Back to top</router-link></li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import Logo from './images/Logo.vue';

export default {
  components: { Logo },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #000;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(8, minmax(16px, 1fr));
    text-align: left;
    font-weight: 900;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  li {
    margin-top: 0.5em;
    margin-bottom: 1em;
  }

  .logo {
    margin-top: 10px;
    margin-bottom: 35px;
    grid-column-start: 1;
    grid-column-end: span 2;
  }
  .newsletter {
    grid-column-start: 1;
    grid-column-end: span 8;

    .newsletter-desc {
      margin-bottom: 1em;
    }
    .subscription-form form {
      display: flex;
      justify-content: space-between;
    }

    input {
      border: 0;
      background-color: transparent;
      height: 35px;
    }

    input[type='email'] {
      width: 80%;
      border-bottom: 4px solid #fff;
      color: #fff;
      font-size: 1rem;
      margin-right: 20px;
    }
    input[type='submit'] {
      color: #fff;
      font-size: 1rem;
      font-weight: 900;
      // width: 20%;
    }
  }

  .info {
    margin-top: 48px;
  }

  h3.info-heading {
    font-size: 1.5rem;
    font-family: 'Source Serif Pro', serif;
    font-weight: 700;
    margin-top: 1.5em;
    margin-bottom: 0.75rem;
  }

  .office {
    grid-column-start: 1;
    grid-column-end: span 4;

    .office-address {
      font-size: 0.875rem;
      line-height: 1.5;

      span {
        display: block;
      }
    }
  }
  .explore {
    grid-column-start: 1;
    grid-column-end: span 4;
    grid-row-start: 8;
  }

  .social {
    grid-column-start: 5;
    grid-column-end: span 4;
    grid-row-start: 8;
  }

  .inquiries {
    grid-column-start: 1;
    grid-column-end: span 4;
    grid-row-start: 16;
  }

  .misc {
    grid-column-start: 5;
    grid-column-end: span 4;
    grid-row-start: 16;
  }

  @media (min-width: 768px) {
    .container {
      grid-template-columns: repeat(18, minmax(16px, 48px));
      column-gap: 24px;
    }

    .newsletter {
      /* grid-column: 1 / span 8; */
      grid-column-start: 1;
      grid-column-end: span 8;
      /* grid-row: 2; */
      grid-row-start: 2;
    }

    .info {
      margin-top: 48px;
    }

    .newsletter,
    .office,
    .inquiries,
    .explore {
      grid-column-start: 7;
    }

    .social,
    .misc {
      grid-column-start: 14;
    }

    .newsletter {
      grid-row: 1 / 3;
      grid-column: 7 / span 11;
    }

    .office {
      grid-row-end: span 3;
      grid-column-end: span 5;
    }

    .explore,
    .social {
      grid-row-start: 6;
    }

    .inquiries,
    .misc {
      grid-row-start: 13;
    }
  }

  @media (min-width: 980px) {
    .container {
      grid-template-columns: repeat(24, minmax(16px, 48px));
      column-gap: 24px;
    }
  }

  @media (min-width: 1280px) {
    .newsletter {
      grid-column: 8 / span 12;
      grid-row: 1 / 2;
    }

    .office,
    .inquiries,
    .explore,
    .social {
      margin-top: 60px;
    }

    .info {
      grid-row-end: span 5;
    }

    .office {
      grid-column-start: 8;
      grid-column-end: span 4;
      grid-row: 2 / span 2;
    }

    .inquiries {
      /* grid-row: 2 / span 2; */
      /* grid-column: 12 / span 4; */
      grid-column-start: 12;
      grid-row-start: auto;
    }

    .explore {
      /* grid-row: 2 / span 2; */
      grid-column: 16 / span 4;
      grid-row-start: auto;
    }

    .social {
      /* grid-row: 2 / span 2; */
      grid-column: 20 / span 4;
      grid-row-start: auto;
    }

    .misc {
      margin-top: 0;
      grid-row: 6 / 7;
      grid-column-start: 2;
    }
  }
}
@media (min-width: 980px) {
  footer {
    padding: 60px;
  }
}
</style>
