<template>
  <div>
    <Head>
      <Title>{{ portfolioTitle }}</Title>
    </Head>
    <section>
      <div class="container page-wrp">
        <PageTitle :title="portfolioTitle" />
        <PageSubtitle :subtitle="portfolioSubtitle" />
        <Projects />
        <div class="link-wrapper">
          <NuxtLink
            class="link"
            href="https://github.com/KarpovYuri?tab=repositories"
            target="_blank"
          >
            Остальные работы
          </NuxtLink>
          <Lightbox />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { portfolioTitle, portfolioSubtitle } from './pageData';
export default {
  data() {
    return {
      portfolioTitle,
      portfolioSubtitle
    };
  }
};
</script>

<style scoped>
.link-wrapper {
  margin-top: 10px;
  text-align: center;
}
.link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: var(--link-color);
  position: relative;
}

.link::before {
  content: '';
  position: absolute;
  height: 2px;
  bottom: -4px;
  background-color: var(--accent-color);
  visibility: hidden;
  width: 0;
  transition: all 0.3s ease-in-out 0s;
}

.link:hover::before {
  visibility: visible;
  width: 176px;
}
</style>
