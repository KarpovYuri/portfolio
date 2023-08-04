<template>
  <div class="social-links">
    <NuxtLink
      v-for="(link, key) in links"
      :key="key"
      :href="link.url"
      class="link"
      target="blank"
    >
      <button :class="'social-icon ' + link.class" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      links: [
        {
          url: 'https://github.com/KarpovYuri',
          class: 'github'
        },
        {
          url: 'https://www.linkedin.com/in/karpov-yuri/',
          class: 'linkedin'
        },
        {
          url: 'https://vk.com/karpov_yn',
          class: 'vk'
        },
        {
          url: 'https://www.facebook.com/profile.php?id=100000459328645',
          class: 'facebook'
        }
      ]
    };
  }
};
</script>

<style scoped>
.social-links {
  margin-top: 40px;
  display: flex;
}

.link {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color: var(--main-color);
  line-height: 1;
  margin-right: 8px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: ease-in-out 0.3s;
}

.link:hover {
  background: var(--accent-color);
  transition: ease-in-out 0.3s;
}

.social-icon {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.github {
  background-image: url('../assets/icons/github.svg');
}

.vk {
  background-image: url('../assets/icons/vk.svg');
}

.facebook {
  background-image: url('../assets/icons/facebook.svg');
}

.linkedin {
  background-image: url('../assets/icons/linkedin.svg');
}

.instagram {
  background-image: url('../assets/icons/instagram.svg');
}
</style>
