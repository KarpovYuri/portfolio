<template>
  <img :src="slide.diploma" class="slide-img" alt="Сертификат" />
  <img :src="slide.logo" class="slide-logo" alt="Логотип" />
  <h3 class="slide-title">{{ slide.title }}</h3>
  <h4 class="slide-subtitle">{{ slide.subtitle }}</h4>
</template>

<script lang="ts">
export default {
  props: {
    slide: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.slide-img {
  width: 100%;
  height: calc(
    (
        var(--container-xxl) - var(--carousel-gap) *
          (var(--carousel-columns) - 1) - var(--container-padding) * 2
      ) / var(--carousel-columns) * var(--image-ratio)
  );
  border-radius: 6px;
  object-fit: contain;
  box-sizing: border-box;
}

.slide-logo {
  width: 90px;
  border-radius: 50%;
  margin: -40px 0 0 40px;
  border: 2px solid var(--border-color);
}

.slide-title {
  font-size: 18px;
  margin: 10px 0 5px 45px;
}

.slide-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: var(--third-color);
  margin: 0 0 0 45px;
}

@media (min-width: 1400px) {
  .slide-img {
    height: calc(
      (
          var(--container-xxl) - var(--container-padding) * 2 -
            var(--carousel-gap) * (var(--carousel-columns) - 1)
        ) / var(--carousel-columns) * var(--image-ratio)
    );
  }
}
</style>
