<template>
  <div class="carousel">
    <div class="carousel-wrapper">
      <div v-for="(slide, key) in slides" :key="key" class="carousel-slide">
        <CarouselSlide :slide="slide" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    slides: {
      type: Object,
      default: null
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
  transition-property: transform;
}

@media (min-width: 768px) {
  .carousel-slide {
    width: calc((100% - var(--carousel-gap)) / 2);
  }
}

@media (min-width: 992px) {
  .carousel-slide {
    flex-shrink: 0;
    width: calc((100% - var(--carousel-gap) * 2) / 3);
    transition-property: transform;
  }
}
</style>
