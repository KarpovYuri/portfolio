<template>
  <div class="social-links" :class="[isContact ? 'social-links_contact' : 'social-links_home']">
    <NuxtLink
      v-for="(link, key) in links"
      :key="key"
      :href="link.url"
      class="link"
      :class="[isContact ? 'link_contact' : 'link_home']"
      target="blank"
    >
      <button
        class="social-icon"
        :class="[
          isContact ? 'social-icon_contact ' + link.class : 'social-icon_home ' + link.class
        ]"
      />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { links } from './data';
export default {
  props: {
    isContact: Boolean
  },
  data() {
    return {
      links
    };
  }
};
</script>

<style scoped>
.social-links_contact {
  margin-top: 8px;
}

.social-links_home {
  margin-top: 40px;
}
.social-links {
  display: flex;
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  color: var(--main-color);
  margin-right: 8px;
  border-radius: 50%;
  transition: ease-in-out 0.3s;
}

.link_home {
  width: 40px;
  height: 40px;
}

.link_contact {
  width: 26px;
  height: 26px;
}

.link:hover {
  background: var(--accent-color);
  transition: ease-in-out 0.3s;
}

.social-icon {
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.social-icon_home {
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

.social-icon_contact {
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
}
.github {
  background-image: url('../../assets/icons/socials/github.svg');
}

.vk {
  background-image: url('../../assets/icons/socials/vk.svg');
}

.facebook {
  background-image: url('../../assets/icons/socials/facebook.svg');
}

.linkedin {
  background-image: url('../../assets/icons/socials/linkedin.svg');
}

.instagram {
  background-image: url('../../assets/icons/instagram.svg');
}
</style>
