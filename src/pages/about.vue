<template>
  <div>
    <Head>
      <Title>{{ aboutTitle }}</Title>
    </Head>
    <section>
      <div class="container page-wrp">
        <PageTitle :title="aboutTitle" />
        <PageSubtitle :subtitle="aboutSubtitle" />
        <About />
        <Counts />
        <Skills />
        <Tools />
        <Diplomas />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { aboutTitle, aboutSubtitle } from './pageData';
export default {
  data() {
    return {
      aboutTitle,
      aboutSubtitle
    };
  }
};
</script>
