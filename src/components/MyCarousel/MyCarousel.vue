<!-- eslint-disable vue/html-indent -->
<template>
  <div class="carousel">
    <div class="carousel-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
        :style="
          'transform: translateX(calc(-' +
          100 * currentSlideIndex +
          '% - ' +
          carouselGap * currentSlideIndex +
          'px))'
        "
      >
        <MyCarouselSlide :slide="slide" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlideIndex: 0,
      carouselGap: 30
    };
  },
  mounted() {
    setInterval(() => this.nextSlide(), 4000);
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.slides.length - 3) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    }
  }
};
</script>

<style scoped src="./MyCarousel.css"></style>
