<!-- eslint-disable vue/html-indent -->
<template>
  <div ref="carousel" class="carousel">
    <div class="carousel-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-slide"
        :class="{ animation: Math.abs(isAnimation) === 1 }"
        :style="
          'transform: translateX(calc(' +
          100 * isAnimation +
          '% + ' +
          carouselGap * isAnimation +
          'px - 100% - ' +
          carouselGap +
          'px))'
        "
      >
        <my-carousel-slide :slide="slide" />
      </div>
    </div>
    <img
      src="~/assets/icons/arrow-left.svg"
      alt="left-arrow"
      class="carousel-button"
      @click="prevSlide"
    />
    <img
      src="~/assets/icons/arrow-left.svg"
      alt="right-arrow"
      class="carousel-button carousel-button__right"
      @click="nextSlide"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  slides: Array<{}>;
}>();

const slides = ref(props.slides);
const isAnimation = ref(0);
const carouselGap = ref(30);
const carousel = ref();

function prevSlide() {
  if (Math.abs(isAnimation.value) === 1) {
    return;
  }
  isAnimation.value = 1;
  setTimeout(() => {
    isAnimation.value = 0;
    const slide = slides.value[slides.value.length - 1];
    slides.value.pop();
    slides.value.unshift(slide);
  }, 500);
}

function nextSlide() {
  if (Math.abs(isAnimation.value) === 1) {
    return;
  }
  isAnimation.value = -1;
  setTimeout(() => {
    isAnimation.value = 0;
    const slide = slides.value[0];
    slides.value.shift();
    slides.value.push(slide);
  }, 500);
}
</script>

<style scoped src="./MyCarousel.css"></style>
