<template>
  <nav class="navbar" :class="{ 'navbar-mobile': showModal }">
    <ul class="nav-links">
      <li
        v-for="(link, index) in links"
        :key="`link_${index}`"
        class="nav-link"
      >
        <nuxt-link class="link" :to="link.url" @click="closeModal">
          {{ link.linkName }}
        </nuxt-link>
      </li>
    </ul>
    <button class="mobile-nav-toggle" @click="toggleModal" />
  </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const links = [
  { url: '/', linkName: 'Главная' },
  { url: '/about', linkName: 'Обо мне' },
  { url: '/resume', linkName: 'Резюме' },
  { url: '/portfolio', linkName: 'Портфолио' },
  { url: '/contact', linkName: 'Контакты' }
];

const showModal = ref(false);
const breakPoint = 992;
const toggleModal = () => (showModal.value = !showModal.value);
const closeModal = () => (showModal.value = false);
const updateWidth = () => window.innerWidth > breakPoint && closeModal();

onMounted(() => window.addEventListener('resize', updateWidth));
onUnmounted(() => window.removeEventListener('resize', updateWidth));
</script>

<style scoped src="./MyNavbar.css"></style>
