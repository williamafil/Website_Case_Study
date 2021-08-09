<template>
  <div id="home-accordion">
    <article class="service" v-for="(item, index) in services" :key="index + 1">
      <input
        class="item-checkbox"
        type="checkbox"
        name="service-accordion"
        :id="'service-' + (parseInt(index) + 1)"
      />
      <label class="item" :for="'service-' + (parseInt(index) + 1)">
        <div class="item-title">{{ item.title }}</div>
        <Plus class="item-icon" />
      </label>
      <div class="item-content">
        <div class="image-wrapper">
          <img
            :src="item.image"
            :alt="item.title + ' image'"
            :aria-label="item.title + ' service'"
          />
        </div>
        <div class="item-description">
          <p class="item-description-paragraph">{{ item.description }}</p>
          <router-link to="/" class="animated-btn case-study-btn"
            >{{ item.title }} case studies</router-link
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Plus from './images/Plus.vue';

export default {
  components: {
    Plus,
  },
  data() {
    return {
      services: [
        {
          title: 'Business Insights',
          description:
            'Our Business Insights help organizations understand their customers better, think strategically, and make informed business decisions.',
          image:
            'https://oxd.com/wp-content/uploads/2019/03/OXD-Homepage-Services-BusinessInsights.jpg',
          param: 'business-insights',
        },
        {
          title: 'Technology Consulting',
          description:
            'Our custom software development solutions help organizations increase revenue, decrease costs, expand market share, and transform the way they generate value in a digitally-driven business landscape.',
          image:
            'https://oxd.com/wp-content/uploads/2019/03/OXD-Homepage-Services-TechConsulting.jpg',
          param: 'business-insights',
        },
        {
          title: 'Website Development',
          description:
            'Corporate websites are the nexus of an organization’s brand and self-image, an assembly of publishing and marketing technologies. OXD untangles this complexity to meet the ever-changing needs of demanding digital consumers.',
          image:
            'https://oxd.com/wp-content/uploads/2019/03/OXD-Homepage-Services-WebDevelopment-1.jpg',
          param: 'business-insights',
        },
        {
          title: 'Digital Service Design',
          description:
            'To deliver great digital services organizations need to understand their customers’ journeys over time and across touchpoints.',
          image:
            'https://oxd.com/wp-content/uploads/2019/03/OXD-Homepage-Services-DigitalServiceDesign.jpg',
          param: 'business-insights',
        },
        {
          title: 'Digital Transformation',
          description:
            'In an era defined by the critical pace of change, OXD helps organizations embrace new tools and new ways of working to harness unprecedented access to information.',
          image:
            'https://oxd.com/wp-content/uploads/2019/03/OXD-Homepage-Services-DigitalTransformation-1.jpg',
          param: 'business-insights',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.service {
  width: 100%;

  input {
    display: none;
    visibility: hidden;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    // background-color: #fff;
    cursor: pointer;

    .item-title {
      position: relative;
      margin: 1.125rem 0;
      font-family: 'Source Serif Pro', serif;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.5;
    }

    .item-title::after {
      // position: absolute;
      // bottom: -10px;
      // left: 0;
      // width: 0;
      // height: 8px;
      // content: '';
      // background-color: #000;
      // transition: all cubic-bezier(0.53, 0.1, 0.73, 0.4) 0.3s;
      display: block;
      background-color: #000;
      height: 0.45em;
      transition: all 0.3s ease-in-out;
      content: '';
      width: 0;
    }

    .item-icon {
      transition: all cubic-bezier(0.79, -0.22, 0.75, 0.6) 0.3s;
    }
  }

  .item-content {
    max-height: 0;
    // height: 0;
    overflow: hidden;
    // background-color: #fff;
    // transition: all cubic-bezier(0.07, 0.26, 0.27, 1.55) 0.3s;
    transition: max-height ease-in-out 0.3s;

    .item-description {
      padding: 6px 24px 18px;
      margin-right: 40px;
      background-color: #fff;
      border-top: 0.45em solid #000;
      width: 95%;
      position: relative;
      top: -30px;

      .item-description-paragraph {
        margin: 1rem 0;
      }

      .case-study-btn::after {
        background-color: #cedfc1;
      }
    }
  }

  input[type='checkbox']:checked ~ .item-content {
    max-height: 600px;
  }
  input[type='checkbox']:checked ~ label .item-icon {
    transform: rotate(225deg);
  }
  input[type='checkbox']:checked ~ label .item-title::after {
    width: 100%;
  }
}
</style>
