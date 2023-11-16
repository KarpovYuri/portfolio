<template>
  <div class="lightbox-container">
    <img class="lightbox-image" :src="dinamikPreview" />
    <button class="close-btn" aria-label="Close" />
  </div>
</template>

<script lang="ts">
import dinamikPreview from './../../assets/img/projects/dinamik.png';

export default {
  data() {
    return { dinamikPreview };
  }
};
</script>

<style scoped>
.lightbox-container {
  background: rgba(0, 0, 0, 0.92);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}

.lightbox-image {
  max-width: 800px;
}

.close-btn {
  width: 36px;
  height: 36px;
  top: 15px;
  right: 20px;
  position: absolute;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  opacity: 0.7;
  transition: opacity 0.25s;
  background-color: transparent;
  background-image: url('./../../assets/icons/close-icon.svg');
  background-position: center;
  background-size: 20px auto;
  background-repeat: no-repeat;
}

.close-btn:hover {
  opacity: 1;
}
</style>
