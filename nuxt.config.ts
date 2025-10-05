// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  sourcemap: false,

  experimental: {
    payloadExtraction: false
  },

  telemetry: false,
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
    '@/assets/styles/color.css',
    '@/assets/styles/variables.css'
  ],

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active'
    }
  },

  googleFonts: {
    families: {
      Montserrat: {
        wght: [400, 500, 600, 700]
      },
      Raleway: {
        wght: [500, 600, 700]
      },
      'Open Sans': {
        wght: [400, 600, 700],
        ital: [400]
      },
      Poppins: {
        wght: [600]
      }
    }
  },

  compatibilityDate: '2025-10-05'
});
