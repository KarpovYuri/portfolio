<template>
  <header class="header" :class="{ 'header-top': $route.path !== '/' }">
    <div class="container">
      <h1 class="title">
        <NuxtLink class="link" to="/">{{ title }}</NuxtLink>
      </h1>
      <h2 class="subtitle">
        <span class="profession">{{ subtitleProfession }}</span>
        {{ subtitleCity }}
      </h2>
      <Navbar />
      <SocialLinks />
    </div>
  </header>
</template>

<script lang="ts">
export default {
  data() {
    return {
      title: 'Карпов Юрий',
      subtitleProfession: 'Web разработчик',
      subtitleCity: ' из Воронежа'
    };
  }
};
</script>

<style scoped>
.header {
  transition: ease-in-out 0.3s;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 997;
  overflow-y: auto;
}

.header * {
  transition: ease-in-out 0.3s;
}

.title {
  font-size: 48px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.link,
.link:hover {
  color: var(--main-color);
  line-height: 1;
  display: inline-block;
}

.subtitle {
  font-size: 24px;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.profession {
  color: var(--main-color);
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 6px;
}

.header-top {
  height: 80px;
  left: 0;
  top: 0;
  right: 0;
  background: var(--background-color);
}

.header-top .social-links,
.header-top .subtitle {
  display: none;
}

.header-top .navbar {
  margin: 0;
}

.header-top .title {
  margin-right: auto;
  font-size: 36px;
}

.container {
  display: flex;
  flex-direction: column;
}

.header-top .container {
  flex-direction: row;
  align-items: center;
}

@media (max-width: 992px) {
  .header-top {
    height: 60px;
  }

  .subtitle {
    line-height: 50px;
    text-align: center;
    max-width: 290px;
  }

  .container {
    align-items: center;
  }
}

@media (max-width: 576px) {
  .header-top .title {
    font-size: 26px;
    padding-left: 20px;
  }

  .title {
    font-size: 32px;
  }

  .subtitle {
    line-height: 40px;
    max-width: 240px;
    font-size: 20px;
  }
}
</style>
