<template>
  <div id="home">
    <!-- <div class="onScrollBG-nav"></div> -->
    <div class="onScrollBG-nav">
      <div class="blue"></div>
    </div>
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
            <div class="insight-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1505976442149-53a82393903b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="Boy playing abbacus"
                />
              </div>
              <div class="insight-desc">Toddler-first usability testing</div>
            </div>
          </a>
          <a href="#" class="insight-link" aria-label="Toddler-first usability testing">
            <div class="insight-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt="User Journey Map"
                />
              </div>
              <div class="insight-desc">
                How to broaden your reach and reduce participant barriers with remote user research
              </div>
            </div>
          </a>
          <a href="#" class="insight-link" aria-label="Toddler-first usability testing">
            <div class="insight-card">
              <div class="image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=995&q=80"
                  alt="Data reporting dashboard"
                />
              </div>
              <div class="insight-desc">Toddler-first usability testing</div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="design-innovation">
      <div class="onScrollBG-design">
        <div class="red"></div>
        <div class="blue-boxes">
          <div class="light-blue"></div>
          <div class="dark-blue"></div>
        </div>
        <div class="space"></div>
        <div class="purple-boxes">
          <div class="light-purple"></div>
          <div class="dark-purple"></div>
        </div>
      </div>
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
      <div class="onScrollBG-footer">
        <div class="oval"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap, ScrollTrigger } from 'gsap/all';
import HomeAccordion from '../components/HomeAccordion.vue';
import HomeClientsLoop from '../components/HomeClientsLoop.vue';

gsap.registerPlugin(ScrollTrigger);
export default {
  name: 'Home',
  components: {
    HomeAccordion,
    HomeClientsLoop,
  },
  mounted() {
    // nav blue box
    gsap.to('.blue', {
      x: 1000,
      scrollTrigger: {
        trigger: '.case-study',
        markers: false,
        start: 'top 13%',
        end: 'top -50%',
        scrub: 1,
      },
    });

    // design for innovation
    // red box
    gsap.to('.red', {
      x: 800,
      scrollTrigger: {
        trigger: '.red',
        markers: false,
        start: 'bottom 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
    // light blue box
    gsap.to('.light-blue', {
      x: 800,
      scrollTrigger: {
        trigger: '.light-blue',
        markers: false,
        start: 'bottom 80%',
        end: 'bottom 30%',
        scrub: 1,
      },
    });
    // dark blue box
    gsap.to('.dark-blue', {
      x: -500,
      scrollTrigger: {
        trigger: '.dark-blue',
        markers: false,
        start: 'bottom 70%',
        end: 'bottom -50%',
        scrub: 1,
      },
    });

    gsap.to('.dark-purple', {
      x: 500,
      scrollTrigger: {
        trigger: '.dark-purple',
        markers: false,
        start: 'top 70%',
        end: 'top -40%',
        scrub: 1,
      },
    });

    gsap.to('.light-purple', {
      x: -500,
      scrollTrigger: {
        trigger: '.light-purple',
        markers: false,
        start: 'bottom 85%',
        end: 'bottom -10%',
        scrub: 1,
      },
    });

    gsap.to('.oval', {
      y: -600,
      scrollTrigger: {
        trigger: '.oval',
        markers: false,
        start: 'top 95%',
        end: 'top 90%',
        scrub: 1,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
#home {
  // position: relative;
}

.onScrollBG-nav {
  position: fixed;
  top: 0;
  left: -112px;
  z-index: 1;
  transform-origin: center top;
  transform: rotate(-45deg);

  .blue {
    position: absolute;
    top: 0;
    left: -112px;
    width: 1100px;
    height: 240px;
    background-color: #0976ac;
  }
}

.hero {
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #fff;
  z-index: 100;
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
  margin-top: 4em;
  position: relative;
  height: 760px;
  overflow: hidden;

  .tilt-heading {
    text-align: left;
    width: 200px;
    line-height: 1;
    // position: sticky;
    // left: 200px;
    // bottom: 500px;
    position: absolute;
    top: 120px;
    // left: 150px;
    left: 30%;
    right: 70%;

    transform: rotate(-45deg);
    color: #fff;
  }
  .onScrollBG-design {
    position: relative;
    // top: 0;
    // left: -500;
    width: 100%;
    height: 100%;

    transform-origin: center top;
    transform: rotate(-45deg);

    .red {
      position: absolute;
      top: -240px;

      width: 1100px;
      height: 240px;
      background-color: #de4d45;

      transform: translateX(-200px);
    }
    .blue-boxes {
      position: relative;
      width: 1200px;

      .dark-blue {
        position: absolute;
        width: 1100px;
        height: 240px;
        background-color: #1e4173;
        transform: translateX(200px);
      }
      .light-blue {
        position: absolute;
        width: 1100px;
        height: 240px;

        background-color: #62b7d8;
        transform: translateX(-230px);
        z-index: 1;
      }
    }

    .space {
      position: absolute;
      top: 480px;
      width: 100%;
      height: 240px;
      background-color: #fff;
    }
    .purple-boxes {
      position: relative;
      width: 1200px;
      display: flex;

      .light-purple {
        position: absolute;
        top: 480px;
        order: 2;
        width: 1500px;
        height: 240px;
        background-color: #9f9ccd;
        transform: translateX(500px);
      }
      .dark-purple {
        position: absolute;
        top: 480px;
        order: 1;
        width: 1100px;
        height: 240px;
        background-color: #75629e;
        transform: translateX(-1100px);
      }
    }
  }

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

.onScrollBG-footer {
  position: relative;
  .oval {
    position: absolute;
    top: 20px;
    left: -210px;
    max-width: 350px;
    max-height: 350px;
    width: 100%;
    height: 100vw;
    background-color: #fcd3c1;
    border-radius: 50%;
    z-index: -1;
  }
}
</style>
