<template>
  <div id="clients-loop">
    <div class="list-wrapper">
      <span class="span">
        <div v-for="client in clients" :key="client">
          <h3 class="client-name">{{ client }}</h3>
        </div>
      </span>
      <span class="span">
        <div v-for="client in clients" :key="client">
          <h3 class="client-name">{{ client }}</h3>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        'Emily Carr University',
        'University of British Columbia',
        'British Columbia Lottery Corporation',
        'CBC Transmission',
        'Kernaghan Adjusters',
        'Electronic Arts',
        'Pokémon',
        'IFC',
        'Royal BC Museum',
        'Vancouver Public Library',
        'City of Vancouver',
        'Government of Alberta',
        'Government of Canada',
        'ICBC',
        'Government of British Columbia',
        'Island Health',
        'Vancouver Coastal Health',
        'Government of Yukon',
        'Government of Ontario',
        'Honeywell',
        'TransLink',
        'Island Health',
        'YVR',
        'Doctor Pepper Snapple Group',
        'lululemon',
        'TELUS',
        'BC Hydro',
        'FortisBC',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#clients-loop {
  // background-color: #fff;
  margin: 3rem 0;
  height: 200px;
  width: 100%;
  overflow: hidden;
  position: relative;

  .list-wrapper {
    position: absolute;
    animation: loop 50s linear infinite;
    height: 100%;
    .span {
      height: 400px;
    }
  }

  .list-wrapper:hover {
    animation-play-state: paused;
  }
}

.client-name {
  font-size: 1.5rem;
  line-height: 1.5;
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
}

@keyframes loop {
  0% {
    top: 0;
  }

  100% {
    // top: -510%;
    top: -504%;
  }
}
</style>
