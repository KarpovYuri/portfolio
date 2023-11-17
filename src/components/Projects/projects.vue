<template>
  <div class="container projects">
    <ProjectsElem
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      @open="toggleLightbox"
    />
  </div>
  <Lightbox v-show="isShowLightbox" :show="isShowLightbox" @close="toggleLightbox" />
</template>

<script lang="ts">
import { projects } from './data';

export default {
  name: 'Projects',
  data() {
    return { projects, isShowLightbox: false };
  },
  methods: {
    toggleLightbox() {
      this.isShowLightbox = !this.isShowLightbox;
    }
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
  flex-wrap: wrap;
}
</style>
