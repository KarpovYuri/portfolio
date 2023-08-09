<template>
  <div class="container">
    <PageTitle :title="title" />
    <Carousel :slides="slides" />
  </div>
</template>

<script lang="ts">
import { slides, title } from './data';
export default {
  name: 'Diplomas',
  data() {
    return { slides, title };
  }
};
</script>

<style scoped>
.container {
  background: var(--second-bg-color);
  padding: var(--container-padding);
}
</style>
