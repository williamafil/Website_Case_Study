<template>
  <div id="home">
    <section class="hero container">
      <h2 class="h2-motto">Make New Experiences Possible</h2>
      <h1 class="description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime id sed,
        repellendus commodi aperiam vero molestiae officia mollitia ad. A vel eius iste praesentium!
      </h1>
    </section>

    <section class="case-study">
      <div class="img-wrapper">
        <img
          src="https://images.unsplash.com/photo-1532636653654-e243fbe850b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1348&q=80"
          alt="Pie Eating Contest"
        />
      </div>
      <div class="case-study-card">
        <header class="header">
          <h6 class="tag">Case study</h6>
          <h3 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci.</h3>
        </header>
        <main class="content">
          <p class="case-study-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum sed ducimus sunt
            aperiam, dignissimos ratione quia, maxime veniam voluptates vitae.
          </p>
          <router-link to="/" class="animated-btn read-more-btn">Read our case study</router-link>
        </main>
      </div>
    </section>

    <section class="what-we-do container">
      <div>
        <h2 class="section-heading">What we do</h2>
        <p class="section-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe mollitia esse voluptates
          architecto porro error placeat, facere dolore repellendus! Mollitia, reiciendis ea!
          Aspernatur.
        </p>
      </div>
      <HomeAccordion />
    </section>

    <section class="clients container">
      <div>
        <h2 class="section-heading">Clients</h2>
        <div>
          <p class="section-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptatem quod eius
            dicta eos obcaecati a explicaborod.
          </p>
          <router-link to="/" class="animated-btn see-more-btn">See more clients</router-link>
        </div>
      </div>
      <HomeClientsLoop />
    </section>

    <section class="insights container">
      <div>
        <h2 class="section-heading">Insights</h2>
        <div>
          <p class="section-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia velit ipsa autem,
            corrupti, asperiores inventore libero dignissimos exercitatiom.
          </p>
        </div>
        <div class="cards-container">
          <a href="#" class="insight-link" aria-label="Toddler-first usability testing">
            <articles class="insight-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1505976442149-53a82393903b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Boy playing abbacus"
                />
              </div>
              <div class="insight-desc">Toddler-first usability testing</div>
            </articles>
          </a>
          <a href="#" class="insight-link" aria-label="Toddler-first usability testing">
            <articles class="insight-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="User Journey Map"
                />
              </div>
              <div class="insight-desc">
                How to broaden your reach and reduce participant barriers with remote user research
              </div>
            </articles>
          </a>
          <a href="#" class="insight-link" aria-label="Toddler-first usability testing">
            <articles class="insight-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80"
                  alt="Data reporting dashboard"
                />
              </div>
              <div class="insight-desc">Toddler-first usability testing</div>
            </articles>
          </a>
        </div>
      </div>
    </section>

    <section class="design-innovation">
      <h2 class="h2-motto tilt-heading">Design for Innovation</h2>
      <div class="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="change by design"
          aria-label="Change by design photo"
        />
      </div>

      <div class="desc-box">
        <p class="section-description">
          Find out how we help educators, policymakers, planners, and activists address global
          Sustainable Development Goals through human-centred design and technology.
        </p>
        <router-link
          to="/"
          class="animated-btn design-innovation-btn"
          aria-label="Learn more about deisign for innovation"
          >About Design for Innovation</router-link
        >
      </div>
    </section>

    <section class="news container">
      <h2 class="section-heading">News and events</h2>
      <div class="news-card-container">
        <a href="#" class="news-link" aria-label="National Indigenous History Month">
          <article class="news-card">
            <h4 class="news-heading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Magni autem impedit
            </h4>
            <h5 class="news-date">June 9, 2021</h5>
          </article>
        </a>
        <a href="#" class="news-link" aria-label="National Indigenous History Month">
          <article class="news-card">
            <h4 class="news-heading">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis extd sed, voluptates
            </h4>
            <h5 class="news-date">May 17, 2021</h5>
          </article>
        </a>
        <a href="#" class="news-link" aria-label="National Indigenous History Month">
          <article class="news-card">
            <h4 class="news-heading">Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
            <h5 class="news-date">June 9, 2021</h5>
          </article>
        </a>
      </div>
    </section>

    <footer>
      <div class="container">
        <section class="logo">
          <router-link :to="{ name: Home }"><Logo color="white" /></router-link>
        </section>

        <section class="newsletter">
          <p class="newsletter-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, eveniet minus? Soluta
            neque eaque asperiores optio perferendis maiores cupiditate.
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
  </div>
</template>

<script>
import Logo from '../components/images/Logo.vue';
import HomeAccordion from '../components/HomeAccordion.vue';
import HomeClientsLoop from '../components/HomeClientsLoop.vue';

export default {
  components: {
    Logo,
    HomeAccordion,
    HomeClientsLoop,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1.125em;
}

.hero {
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #fff;

  .description {
    margin: 0 0 2.625rem 0;
    font-size: 0.875rem;
    font-weight: 400;
  }
}

.case-study {
  display: flex;
  flex-direction: column;

  .img-wrapper {
  }

  .case-study-card {
    padding: 1.125em;
    margin: 1.125em;
    background-color: #fff;
    transform: translateY(-80px);

    .header {
      h6.tag {
        margin: 6px 0 8px 0;
        font-size: 0.75rem;
        font-weight: 900;
        text-align: left;
      }
      h3.title {
        font-family: 'Source Serif Pro', serif;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.35;
        text-align: left;
      }
    }
    .content {
      text-align: left;

      .case-study-paragraph {
        margin: 1em 0;
      }

      .read-more-btn::after {
        background-color: #d1d3d4;
      }
    }
  }
}

section.what-we-do,
section.clients,
section.insights,
section.news {
  padding-top: 0;
  text-align: left;
}

.clients {
  div {
    margin-bottom: 1rem;
  }
  // .see-more-btn {
  //   margin: 1em 0;
  // }
  .see-more-btn::after {
    background-color: #bedde3;
  }
}

.insights {
  .cards-container {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      display: block;
      width: 100%;
      height: 300px;
      background-color: #fff;
      position: relative;
    }

    a:not(:first-child) {
      display: none;
    }

    @media (min-width: 980px) {
      a {
        width: 28%;
        height: 400px;
      }

      a:not(:first-child) {
        display: block;
      }
    }

    .image-wrapper {
      height: 300px;
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .insight-desc {
      background-color: #fff;
      font-family: 'Source Serif Pro', serif;
      font-size: 1.125rem;
      font-weight: 700;
      color: #000;
      border-bottom: 7px solid transparent;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1.5rem 2.3rem 1.5rem 0;
    }

    @media (min-width: 980px) {
      .insight-desc {
        font-size: 1.5rem;
      }
    }

    a:hover .insight-desc {
      border-bottom: 7px solid #000;
    }
  }
}

.design-innovation {
  background-color: #ccc;
  margin-top: 4em;
  position: relative;
  height: 760px;

  .image-wrapper {
    width: 40%;
    max-width: 350px;
    position: absolute;
    right: 50px;
    top: 50px;
  }

  @media (max-width: 769px) {
    .image-wrapper {
      display: none;
    }
  }

  .tilt-heading {
    text-align: left;
    width: 200px;
    line-height: 1;
    position: absolute;
    top: 150px;
    left: 50px;
    transform: rotate(-45deg);
  }

  .desc-box {
    text-align: left;
    margin: 0 auto;
    padding: 2.25em;
    width: 75%;
    max-width: 600px;
    position: absolute;
    bottom: 120px;
    left: 0;
    right: 0;
    background-color: #fff;
    p {
      font-size: 1.25rem;
    }
    .design-innovation-btn:after {
      background-color: #f6eca5;
    }
  }
  // @media (min-width: 980px) {
  //   .desc-box {
  //     // font-size: 1.8rem;
  //   }
  // }
}

.news {
  .news-card-container {
    display: flex;
    flex-direction: column;

    .news-link {
      width: 90%;
      margin: 0.7rem 0;
      position: relative;
      text-decoration: none;
      color: #000;
    }
    .news-link:after {
      position: absolute;
      left: 0;
      top: 0;
      content: '';
      width: 20px;
      height: 5px;
      background-color: #000;
    }

    .news-card {
      margin-bottom: 0.5em;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;

      .news-heading,
      .news-date {
        margin: 1rem 0;
      }

      h4.news-heading {
        font-size: 1rem;
        line-height: 1.5;
        font-family: 'Source Serif Pro', serif;
        font-weight: 700;
      }
      h5.news-date {
        font-size: 0.75rem;
        line-height: 1.5;
        font-family: 'Source Pro', sans-serif;
        font-weight: 600;
      }
    }
  }
  @media (min-width: 980px) {
    .news-card-container {
      flex-direction: row;
      justify-content: space-between;
      .news-card {
        width: 90%;
      }
    }
  }
}

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
