<template>
  <div class="container">
    <page-title title="Сертификаты" />
    <my-carousel :slides="slides" />
  </div>
</template>

<script lang="ts" setup>
import { slides } from './data';
</script>

<style scoped src="./MyDiplomas.css"></style>
