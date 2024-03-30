<template>
  <header class="header" :class="{ 'header-top': $route.path !== '/' }">
    <div class="container">
      <h1 class="title">
        <nuxt-link class="link" to="/">Карпов Юрий</nuxt-link>
      </h1>
      <h2 class="subtitle">
        <span class="profession">Web разработчик</span>
        из Воронежа
      </h2>
      <my-navbar />
      <social-links />
    </div>
  </header>
</template>

<style scoped src="./MyHeader.css"></style>
