<template>
  <div ref="progressBar" class="progress-bar-wrap">
    <div class="progress-bar" :style="`width: ${currentValue}%`" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ value: number }>();

const progressBar = ref();
const currentValue = ref(0);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentValue.value = props.value;
          observer.unobserve(progressBar.value);
        }
      });
    },
    {
      threshold: 0.75
    }
  );

  progressBar.value && observer.observe(progressBar.value);
});
</script>

<style scoped src="./MySkillsProgressBar.css"></style>
