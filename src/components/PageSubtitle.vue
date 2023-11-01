<template>
  <p class="subtitle">{{ subtitle }}</p>
</template>

<script lang="ts">
export default {
  props: {
    subtitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.subtitle {
  margin: 0;
  margin: -8px 0 -15px 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  color: var(--main-color);
}

@media (max-width: 768px) {
  .subtitle {
    font-size: 30px;
  }
}

@media (max-width: 576px) {
  .subtitle {
    font-size: 24px;
  }
}
</style>
