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

.slide-img {
  width: 100%;
  height: calc(
    (100vw - var(--container-padding) * 2) * var(--carousel-image-ratio)
  );
  border-radius: 12px;
  object-fit: contain;
  box-sizing: border-box;
}

@media (min-width: 576px) {
  .slide-img {
    height: calc(
      (var(--container-sm) - var(--container-padding) * 2) *
        var(--carousel-image-ratio)
    );
  }
}

@media (min-width: 768px) {
  .slide-img {
    height: calc(
      (var(--container-md) - var(--container-padding) * 2 - var(--carousel-gap)) /
        2 * var(--carousel-image-ratio)
    );
  }
}

@media (min-width: 992px) {
  .slide-img {
    height: calc(
      (
          var(--container-lg) - var(--container-padding) * 2 -
            var(--carousel-gap) * 2
        ) / 3 * var(--carousel-image-ratio)
    );
  }
}

@media (min-width: 1200px) {
  .slide-img {
    height: calc(
      (
          var(--container-xl) - var(--container-padding) * 2 -
            var(--carousel-gap) * 2
        ) / 3 * var(--carousel-image-ratio)
    );
  }
}

@media (min-width: 1400px) {
  .slide-img {
    height: calc(
      (
          var(--container-xxl) - var(--container-padding) * 2 -
            var(--carousel-gap) * 2
        ) / 3 * var(--carousel-image-ratio)
    );
  }
}
</style>
