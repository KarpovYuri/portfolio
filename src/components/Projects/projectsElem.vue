<template>
  <div class="project">
    <img :src="project.preview" class="project-img" alt="" />
    <div class="project-info">
      <h4 class="project-title">{{ project.title }}</h4>
      <div class="project-links">
        <button class="project-link-btn project-link-btn_more" @click="openLightbox" />
        <NuxtLink :href="project.demoLink" target="blank" class="project-link">
          <button class="project-link-btn project-link-btn_view">Demo</button>
        </NuxtLink>
        <NuxtLink
          v-show="project.codeLink"
          :href="project.codeLink"
          target="blank"
          class="project-link"
        >
          <button class="project-link-btn project-link-btn_code" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['open'],
  methods: {
    openLightbox() {
      this.$emit('open', this.project);
    }
  }
};
</script>

<style scoped>
.project {
  width: calc((100% - 24px * 2) / 3);
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  border-radius: 26px;
}

.project::before {
  content: '';
  background: var(--third-bg-color);
  position: absolute;
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
  transition: all ease-in-out 0.3s;
  opacity: 0;
  border-radius: 20px;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 14px;
}

.project-img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.project-info {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-info::before {
  display: block;
  content: '';
  width: 48px;
  height: 48px;
  position: absolute;
  top: 35px;
  left: 35px;
  border-top: 3px solid var(--main-color);
  border-left: 3px solid var(--main-color);
  transition: all 0.5s ease 0s;
  border-radius: 8px 0;
}

.project-info::after {
  display: block;
  content: '';
  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 35px;
  right: 35px;
  border-bottom: 3px solid var(--main-color);
  border-right: 3px solid var(--main-color);
  transition: all 0.5s ease 0s;
  border-radius: 8px 0;
}

.project-links {
  display: flex;
  gap: 8px;
}

.project-link-btn {
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 28px;
  height: 28px;
  background-size: 28px 28px;
  transition: 0.35s ease 0s;
  outline: none;
}

.project-link-btn_more {
  background-image: url('../../assets/icons/more-icon.svg');
}

.project-link-btn_view {
  width: 100%;
  color: var(--main-color);
  border: solid 2px var(--main-color);
  border-radius: 8px;
  box-sizing: border-box;
  text-transform: uppercase;
  font-size: 14px;
}

.project-link-btn:hover {
  transform: scale(1.15);
}

.project-link-btn_code {
  background-image: url('../../assets/icons/code-icon.svg');
}

.project:hover::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 1;
}

.project:hover .project-info {
  opacity: 1;
}

.project:hover .project-info::before {
  top: 15px;
  left: 15px;
}

.project:hover .project-info::after {
  bottom: 15px;
  right: 15px;
}

@media (max-width: 992px) {
  .project {
    width: calc((100% - 24px) / 2);
  }
}

@media (max-width: 768px) {
  .project {
    width: 100%;
  }
}
</style>
