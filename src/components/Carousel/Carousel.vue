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
        <CarouselSlide :slide="slide" />
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
      default: () => []
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

<style scoped>
.carousel {
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  gap: var(--carousel-gap);
}

.carousel-slide {
  flex-shrink: 0;
  width: 100%;
  transition: transform ease 1s;
}

@media (min-width: 768px) {
  .carousel-slide {
    width: calc((100% - var(--carousel-gap)) / 2);
  }
}

@media (min-width: 992px) {
  .carousel-slide {
    width: calc((100% - var(--carousel-gap) * 2) / 3);
  }
}
</style>
