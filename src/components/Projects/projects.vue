<template>
  <div class="container projects">
    <ProjectsElem
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      @open="toggleLightbox"
    />
  </div>
  <Lightbox
    v-show="isShowLightbox"
    :show="isShowLightbox"
    :data="projectData"
    @close="toggleLightbox"
  />
</template>

<script lang="ts">
import { projects } from './data';

export default {
  name: 'Projects',
  data() {
    return { projects, isShowLightbox: false, projectData: {} };
  },
  methods: {
    toggleLightbox(currentProjectData: {}) {
      const body = document.querySelector('body');
      if (!this.isShowLightbox) {
        body!.style.overflow = 'hidden';
        this.projectData = currentProjectData;
      } else {
        body!.style.removeProperty('overflow');
      }
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
  justify-content: center;
}
</style>
