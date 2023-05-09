// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxtjs/eslint-module'],
  eslint: {
    lintOnStart: false
  },
  app: {
    head: {
      title: 'Портфолио'
    }
  }
});
