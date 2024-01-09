// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  srcDir: "src/",
  css: ['~/assets/css/main.css'],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Rubik: true,
          "Russo+One": true,
        },
      },
    ],
  ],
 
});

