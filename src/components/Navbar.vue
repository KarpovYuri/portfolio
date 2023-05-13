<template>
  <nav class="navbar" :class="{ 'navbar-mobile': showModal }">
    <ul class="nav-links">
      <li class="nav-link">
        <NuxtLink class="link" to="/" @click="closeModal"> Home </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink class="link" to="/about" @click="closeModal">
          About
        </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink class="link" to="/resume" @click="closeModal">
          Resume
        </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink class="link" to="/portfolio" @click="closeModal">
          Portfolio
        </NuxtLink>
      </li>
      <li class="nav-link">
        <NuxtLink class="link" to="/contact" @click="closeModal">
          Contact
        </NuxtLink>
      </li>
    </ul>
    <button class="mobile-nav-toggle" @click="toggleModal" />
  </nav>
</template>

<script lang="ts">
export default {
  data() {
    return {
      width: 0,
      showModal: false
    };
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', this.updateWidth);
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    closeModal() {
      this.showModal = false;
    },
    updateWidth() {
      if (process.client) {
        this.width = window.innerWidth;
        if (this.width > 768) {
          this.showModal = false;
        }
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 0;
  margin-top: 35px;
}

.nav-links {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.nav-link {
  position: relative;
}

.nav-link + .nav-link {
  margin-left: 30px;
}

.link,
.link:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
}

.link:before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--accent-color);
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}

.link:hover:before,
.nav-link:hover > .link:before,
.active:before {
  visibility: visible;
  width: 25px;
}

.link:hover,
.active,
.active:focus,
.nav-link:hover > .link {
  color: var(--main-color);
}

.mobile-nav-toggle {
  width: 32px;
  height: 32px;
  cursor: pointer;
  display: none;
  transition: 0.2s;
  position: fixed;
  right: 15px;
  top: 15px;
  background-image: url('../assets/icons/list.svg');
  background-size: 32px 32px;
  border: none;
  background-color: transparent;
}

.navbar-mobile .mobile-nav-toggle {
  background-image: url('../assets/icons/x.svg');
}

@media (max-width: 768px) {
  .mobile-nav-toggle {
    display: block;
  }

  .nav-links {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  z-index: 999;
  margin-top: 0;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}

.navbar-mobile .nav-links {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 45px;
  left: 15px;
  padding: 10px 0;
  overflow-y: auto;
  transition: 0.3s;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.navbar-mobile .nav-link {
  padding: 12px 20px;
}

.navbar-mobile .nav-link + .nav-link {
  margin: 0;
}

.navbar-mobile .link,
.navbar-mobile .link:focus {
  font-size: 16px;
  position: relative;
}
</style>
