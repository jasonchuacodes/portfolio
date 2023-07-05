// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
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

