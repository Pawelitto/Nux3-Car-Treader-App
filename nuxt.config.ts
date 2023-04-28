// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiBaseUrl: import.meta.env.NUXT_API_URI,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  css: ['@/assets/scss/style.scss'],
});
