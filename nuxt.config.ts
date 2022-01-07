import { defineNuxtConfig } from 'nuxt3';

const nesting = require('tailwindcss/nesting');

export default defineNuxtConfig({

  buildModules: [
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          'tailwindcss/nesting': {},
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: [
    '@/assets/css/main.css',
  ],

  publicRuntimeConfig: {
    PRISMIC_REPO: process.env.PRISMIC_REPO,
  },

})
