<template>
  <header class="header" :class="{ 'header-top': $route.path !== '/' }">
    <div class="container">
      <h1 class="title">
        <NuxtLink class="link" to="/">Karpov Yuri</NuxtLink>
      </h1>
      <h2 class="subtitle">
        I'm a beginner <span class="profession">Web developer</span> from
        Voronezh
      </h2>
      <Navbar />
    </div>
  </header>
</template>

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
  font-family: 'Poppins', sans-serif;
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
}

.profession {
  color: var(--main-color);
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 6px;
}

.header-top {
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
}

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
  .title {
    font-size: 36px;
  }

  .subtitle {
    font-size: 20px;
    line-height: 30px;
  }
}

@media (max-width: 768px) {
  .header-top {
    height: 60px;
  }

  .subtitle {
    font-size: 26px;
    line-height: 50px;
    text-align: center;
  }

  .container {
    align-items: center;
  }
}
</style>
