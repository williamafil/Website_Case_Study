<template>
  <div id="home">
    <section class="hero container">
      <h2 class="motto">Make New Experiences Possible</h2>
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

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import HomeAccordion from '@/components/HomeAccordion.vue';
import HomeClientsLoop from '@/components/HomeClientsLoop.vue';

export default {
  components: {
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

  .motto {
    margin: 0.5rem 0 1.5rem 0;
    font-size: 2.625rem;
    font-weight: 900;
    line-height: 1.2;
  }
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
section.insights {
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
</style>
