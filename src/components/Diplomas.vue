<template>
  <div class="container">
    <h2 class="page-title">{{ title }}</h2>

    <div class="carousel">
      <div class="carousel-wrapper">
        <div class="carousel-slide">
          <img
            src="../assets/img/certificates/Diploma-1.jpg"
            class="slide-img"
            alt="Диплом"
          />
          <img
            src="../assets/img/logo/practicum.webp"
            class="slide-logo"
            alt="Логотип"
          />
          <h3 class="slide-title">Яндекс Практикум</h3>
          <h4 class="slide-subtitle">Веб-разработчик</h4>
        </div>
        <div class="carousel-slide">
          <img
            src="../assets/img/certificates/Diploma-2.jpg"
            class="slide-img"
            alt="Диплом"
          />
          <img
            src="../assets/img/logo/practicum.webp"
            class="slide-logo"
            alt="Логотип"
          />
          <h3 class="slide-title">Яндекс Практикум</h3>
          <h4 class="slide-subtitle">Веб-разработчик</h4>
        </div>
        <div class="carousel-slide">
          <img
            src="../assets/img/certificates/certificate-2.jpg"
            class="slide-img"
            alt="Диплом"
          />
          <img
            src="../assets/img/logo/beonmax.webp"
            class="slide-logo"
            alt="Логотип"
          />
          <h3 class="slide-title">BeOnMax</h3>
          <h4 class="slide-subtitle">JavaScript-полный курс</h4>
        </div>
      </div>
      <div class="swiper-pagination" />
    </div>

    <div class="owl-carousel testimonials-carousel" />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: 'Сертификаты',
      diplomas: []
    };
  }
};
</script>

<style scoped>
.container {
  background: var(--second-bg-color);
  padding: 30px;
}

.carousel {
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  gap: 30px;
}

.carousel-slide {
  flex-shrink: 0;
  width: calc(100% / 3 - 30px * 2 / 3);
  transition-property: transform;
}

.slide-img {
  width: 100%;
  height: calc((1320px - 30px * 4) / 3 * 720 / 1018);
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

.swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.3);
}

.swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

@media (max-width: 1400px) {
  .slide-img {
    height: calc((1140px - 30px * 4) / 3 * 720 / 1018);
  }
}
</style>
