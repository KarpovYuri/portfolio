<template>
  <img :src="props.slide.diploma" class="slide-img" alt="Сертификат" />
  <img :src="props.slide.logo" class="slide-logo" alt="Логотип" />
  <h3 class="slide-title">{{ props.slide.title }}</h3>
  <h4 class="slide-subtitle">{{ props.slide.subtitle }}</h4>
</template>

<script lang="ts" setup>
const props = defineProps<{
  slide: Record<string, string>;
}>();
</script>

<style scoped src="./MyCarouselSlide.css"></style>
