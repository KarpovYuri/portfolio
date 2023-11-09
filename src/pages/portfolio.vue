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
