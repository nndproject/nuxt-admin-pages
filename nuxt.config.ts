// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Tutorial Nuxt JS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "tutorial nuxtjs with me",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400;1,500&family=Inter:wght@100&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
      ],
      bodyAttrs: {
        class: "h-full bg-[#f1f5f9]",
        // class: "h-full bg-[#f1f5f9]",
      },
      script: [{ innerHTML: "console.log('Hello world')" }],
    },
  },
  router: {
    options: {
      linkActiveClass: "router-link-active",
      linkExactActiveClass: "exact-active",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-headlessui"],
});
