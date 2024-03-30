<template>
  <div
    class="social-links"
    :class="isContact ? 'social-links_contact' : 'social-links_home'"
  >
    <nuxt-link
      v-for="(link, index) in links"
      :key="`social_link_${index}`"
      :href="link.url"
      class="link"
      :class="isContact ? 'link_contact' : 'link_home'"
      target="blank"
    >
      <button
        class="social-icon"
        :class="
          isContact
            ? `social-icon_contact ${link.class}`
            : `social-icon_home ${link.class}`
        "
      />
    </nuxt-link>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ isContact?: boolean }>();
const links = [
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
];
</script>

<style scoped src="./SocialLinks.css"></style>
