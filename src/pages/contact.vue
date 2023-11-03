<template>
  <div>
    <Head>
      <Title>{{ contactTitle }}</Title>
    </Head>
    <section>
      <div class="container page-wrp">
        <PageTitle :title="contactTitle" />
        <PageSubtitle :subtitle="contactSubtitle" />
        <Contact />
        <Form />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { contactTitle, contactSubtitle } from './pageData';
export default {
  data() {
    return {
      contactTitle,
      contactSubtitle
    };
  }
};
</script>
