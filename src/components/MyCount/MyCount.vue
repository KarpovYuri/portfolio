<template>
  <span ref="count" class="pure-counter">{{ currentCount }}</span>
</template>

<script lang="ts" setup>
const props = defineProps<{
  endCount: number;
  minCount: number;
  duration: number;
}>();
const count = ref();
const currentCount = ref(0);
const offset = Math.ceil(props.endCount / props.minCount);
let timer: NodeJS.Timeout | null = null;

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && props.endCount > currentCount.value) {
          timer = setInterval(
            () => (currentCount.value = currentCount.value + offset),
            props.duration
          );
          observer.unobserve(count.value);
        }
      });
    },
    {
      threshold: 0.75
    }
  );

  count.value && observer.observe(count.value);
});

watch(currentCount, (value) => {
  if (value > props.endCount) {
    currentCount.value = props.endCount;
    timer && clearInterval(timer);
  }
});
</script>

<style scoped src="./MyCount.css"></style>
