<template>
  <transition>
    <div class="lightbox-container">
      <h2 class="lightbox-title">Путешествия по России</h2>
      <img class="lightbox-image" :src="russianTravelPreview" />
      <div class="lightbox-description-container">
        <p class="lightbox-description">Одностраничный сайт о методах и принципах обучения.</p>
        <p class="lightbox-description">
          <em>HTML, CSS, Flexbox, Grid-layout, БЭМ</em>
        </p>
      </div>
      <button class="close-btn" aria-label="Close" @click="closeLightbox" />
    </div>
  </transition>
</template>

<script lang="ts">
import russianTravelPreview from './../../assets/img/projects/russian-travel.png';

export default {
  name: 'Lightbox',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  data() {
    return { russianTravelPreview };
  },
  mounted() {
    window.addEventListener('keydown', this.escCloseLightbox);
  },
  destroy() {
    window.removeEventListener('keydown', this.escCloseLightbox);
  },
  methods: {
    closeLightbox() {
      this.$emit('close');
    },
    escCloseLightbox(evt: { key: string }) {
      if (this.show && evt.key === 'Escape') {
        this.closeLightbox();
      }
    }
  }
};
</script>

<style scoped>
.lightbox-container {
  background: rgba(0, 0, 0, 0.95);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s ease;
}

.lightbox-title {
  font-size: 28px;
  margin: 0;
  padding: 0 0 30px;
  max-width: 800px;
  width: 100%;
  text-align: center;
}

.lightbox-image {
  max-width: 800px;
  border-radius: 30px;
}

.lightbox-description-container {
  max-width: 800px;
  width: 100%;
  padding: 20px 12px 0;
  box-sizing: border-box;
}

.lightbox-description {
  margin: 12px 0;
  font-size: 16px;
  text-align: center;
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

.v-enter-from,
.v-leave-to {
  transform: scale(0);
  opacity: 0;
}

.v-enter-active {
  transition: all 0.35s ease;
}

.v-leave-active {
  transition: all 0.25s ease-in;
}
</style>