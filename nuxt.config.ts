// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'My App',
      meta: [
        { name: 'description', content: '我是description' },
        { name: 'keywords', content: '我是keywords' },
      ],
    },
  },
})
