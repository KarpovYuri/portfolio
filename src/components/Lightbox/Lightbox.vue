<template>
  <transition>
    <div class="lightbox-container">
      <h2 class="lightbox-title">{{ data.title }}</h2>
      <img class="lightbox-image" :src="data.preview" />
      <div class="lightbox-description-container">
        <p v-show="data.description" class="lightbox-description">{{ data.description }}</p>
        <p v-show="data.functional" class="lightbox-functional">
          {{ data.functional }}
        </p>
        <p v-show="data.technologies" class="lightbox-technologies">
          {{ data.technologies }}
        </p>
        <ul class="lightbox-links">
          <li v-show="data.demoLink">
            <NuxtLink :href="data.demoLink" target="blank" class="lightbox-link"> Демо </NuxtLink>
          </li>
          <li v-show="data.codeLink">
            <NuxtLink :href="data.codeLink" target="blank" class="lightbox-link"> Код </NuxtLink>
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
  padding: 0 12px 30px;
  max-width: 800px;
  text-align: center;
}

.lightbox-image {
  max-width: 800px;
  max-height: 56vh;
  border-radius: 20px;
}

.lightbox-description-container {
  max-width: 800px;
  width: 100%;
  padding: 20px 12px 0;
  box-sizing: border-box;
}

.lightbox-description {
  margin: 12px 0 0;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
}
.lightbox-functional {
  margin: 12px 0 0;
  font-size: 14px;
  text-align: center;
  font-style: italic;
  line-height: 20px;
}

.lightbox-technologies {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--accent-color);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
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
  width: 30px;
}

.lightbox-links {
  list-style: none;
  line-height: 24px;
  text-align: center;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  gap: 16px;
  justify-content: center;
}

.lightbox-links li {
  position: relative;
}

@media (max-width: 992px) {
  .lightbox-title {
    font-size: 22px;
    padding-bottom: 20px;
  }
  .lightbox-image {
    max-width: 720px;
    max-height: 51vh;
  }

  .lightbox-description-container {
    max-width: 720px;
    padding-top: 10px;
  }

  .lightbox-description {
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
  }

  .lightbox-functional {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px;
  }

  .lightbox-technologies {
    margin-top: 10px;
    font-size: 14px;
    line-height: 18px;
  }

  .lightbox-links {
    margin-top: 10px;
    line-height: 20px;
    gap: 12px;
  }

  .lightbox-link {
    font-size: 14px;
  }

  .close-btn {
    width: 32px;
    height: 32px;
    top: 10px;
    right: 10px;
    background-size: 18px auto;
  }
}

@media (max-width: 768px) {
  .lightbox-image {
    max-width: 480px;
    max-height: 51vh;
  }

  .lightbox-description-container {
    max-width: 480px;
    padding-top: 10px;
  }
}

@media (max-width: 576px) {
  .lightbox-image {
    max-width: 90%;
    max-height: 34vh;
  }

  .lightbox-description-container {
    max-width: 90%;
    padding-top: 10px;
  }
}
</style>
