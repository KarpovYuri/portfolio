<template>
  <div class="container projects">
    <ProjectsElem v-for="(project, index) in projects" :key="index" :project="project" />
  </div>
</template>

<script lang="ts">
import { projects } from './data';

export default {
  name: 'Projects',
  data() {
    return { projects };
  }
};
</script>

<style scoped>
.container {
  padding: 45px 0 30px;
}
.projects {
  display: flex;
  gap: 24px;
}
</style>
