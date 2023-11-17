<template>
  <transition>
    <div class="lightbox-container">
      <h2 class="lightbox-title">{{ data.title }}</h2>
      <img class="lightbox-image" :src="data.preview" />
      <div class="lightbox-description-container">
        <p v-show="data.description" class="lightbox-description">{{ data.description }}</p>
        <p v-show="data.functional" class="lightbox-description">{{ data.functional }}</p>
        <p v-show="data.technologies" class="lightbox-description">
          <em>{{ data.technologies }}</em>
        </p>
        <ul class="lightbox-links">
          <li v-show="data.demoLink">
            <NuxtLink :href="data.demoLink" target="blank" class="lightbox-link">
              Демо проекта
            </NuxtLink>
          </li>
          <li v-show="data.codeLink">
            <NuxtLink :href="data.codeLink" target="blank" class="lightbox-link">
              Код проекта
            </NuxtLink>
          </li>
        </ul>
      </div>
      <button class="close-btn" aria-label="Close" @click="closeLightbox" />
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: 'Lightbox',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: { type: Object, default: () => {} }
  },
  emits: ['close'],
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

.lightbox-link {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: var(--link-color);
}

.lightbox-link::before {
  content: '';
  position: absolute;
  height: 2px;
  bottom: -1px;
  background-color: var(--accent-color);
  visibility: hidden;
  width: 0;
  transition: all 0.3s ease-in-out 0s;
}

.lightbox-link:hover::before {
  visibility: visible;
  width: 60px;
}

.lightbox-links {
  list-style: none;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lightbox-links li {
  position: relative;
}
</style>
