<template>
  <div>
    <Head>
      <Title>{{ portfolioTitle }}</Title>
    </Head>
    <main>
      <div class="container page-wrp">
        <PageTitle :title="portfolioTitle" />
        <PageSubtitle :subtitle="portfolioSubtitle" />
        <Projects />
      </div>
    </main>
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
  margin: 10px;
  text-align: center;
  padding-bottom: 30px;
}
</style>
