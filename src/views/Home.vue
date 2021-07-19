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
          <h3 class="title">Helping children thrive with access to safe, healthy child care.</h3>
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
        <h2>What we do</h2>
        <p class="what-we-do-description">
          We work with leaders across industries to address some of the twenty-first century’s most
          complex social and business challenges using research, strategy, design, and technology.
        </p>
      </div>
      <HomeAccordion />
    </section>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
import HomeAccordion from '@/components/HomeAccordion.vue';

export default {
  components: { HomeAccordion },
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

.what-we-do {
  padding-top: 0;
  text-align: left;
  h2 {
    font-family: 'Source Serif Pro', serif;
    font-size: 2.25rem;
    font-weight: 900;
  }

  p {
    margin: 1.125rem 0;
  }
}
</style>
