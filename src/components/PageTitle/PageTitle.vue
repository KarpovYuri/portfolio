<template>
  <h2 class="page-title">{{ title }}</h2>
</template>

<script lang="ts" setup>
defineProps<{ title: string }>();
</script>

<style scoped src="./PageTitle.css"></style>
