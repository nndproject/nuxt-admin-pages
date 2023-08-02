// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  meta: {
    title: 'nndproject',
  },
  app: {
    head: {
      title: 'Tutorial Nuxt JS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width-device-width, initial-scale-1' },
        {
          hid: 'description',
          name: 'description',
          content: 'tutorial nuxtjs with me',
        }
      ],
      bodyAttrs: {
        class: 'bg-gray-50 h-full'
      },
      script: [ { innerHTML: 'console.log(\'Hello world\')' } ]

    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
      'nuxt-headlessui',
  ],
})
