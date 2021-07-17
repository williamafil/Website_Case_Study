<template>
  <div id="home" class="container">
    <section class="hero">
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
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1.125em;
}

.hero {
  background-color: #fff;

  display: flex;
  flex-direction: column;
  text-align: left;

  .motto {
    font-size: 2.625rem;
    font-weight: 900;

    margin: 0.5rem 0 1.5rem 0;
  }
  .description {
    font-size: 0.875rem;
    line-height: 1.5;
    font-weight: 400;
    margin: 0 0 2.625rem 0;
  }
}

.case-study {
  .img-wrapper {
  }
}
</style>
