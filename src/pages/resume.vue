<template>
  <div>
    <Head>
      <Title>Резюме</Title>
    </Head>
    <section>
      <div class="container page-wrp">
        <PageTitle :title="resumeTitle" />
        <PageSubtitle :subtitle="resumeSubtitle" />
        <Resume />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { resumeTitle, resumeSubtitle } from './pageData';
export default {
  data() {
    return {
      resumeTitle,
      resumeSubtitle
    };
  }
};
</script>
