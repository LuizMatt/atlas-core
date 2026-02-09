import Aura from '@primevue/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  css: [
    "primeicons/primeicons.css",
    "@mdi/font/css/materialdesignicons.css"
  ],

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
  ],

  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,  
        options: {
          prefix: "p",
          darkModeSelector: false,
          cssLayer: false,
        },
      },
    },
  },
})