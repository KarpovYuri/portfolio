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
  width: calc(
    100% / var(--carousel-columns) - var(--carousel-gap) *
      (var(--carousel-columns) - 1) / var(--carousel-columns)
  );
  transition-property: transform;
}
</style>
