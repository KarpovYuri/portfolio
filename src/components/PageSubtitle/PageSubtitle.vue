<template>
  <p class="subtitle">{{ subtitle }}</p>
</template>

<script lang="ts" setup>
defineProps<{ subtitle: string }>();
</script>

<style scoped src="./PageSubtitle.css"></style>
