// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/google-fonts'],
  eslint: {
    lintOnStart: false
  },
  app: {
    head: {
      title: 'Карпов Юрий - Веб разработчик'
    }
  },
  css: [
    '@/assets/styles/vendors/normalize.css',
    '@/assets/styles/main.css',
    '@/assets/styles/color.css'
  ],
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active'
    }
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [400]
      },
      Roboto: {
        wght: [700]
      },
      Raleway: {
        wght: [500]
      }
    }
  }
});
