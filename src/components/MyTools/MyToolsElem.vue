<template>
  <div
    ref="toolBox"
    class="tool-box"
    :style="`transform: scaleX(${currentScale})`"
  >
    <div :class="`tool-icon ${iconClass}`" />
    <h3 class="tool-title">{{ title }}</h3>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string; iconClass: string }>();
const toolBox = ref();
const currentScale = ref(0);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentScale.value = 1;
          observer.unobserve(toolBox.value);
        }
      });
    },
    {
      threshold: 0.75
    }
  );

  toolBox.value && observer.observe(toolBox.value);
});
</script>

<style scoped src="./MyToolsElem.css"></style>
