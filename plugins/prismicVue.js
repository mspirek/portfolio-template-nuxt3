import { defineNuxtPlugin } from '#app';
import { createPrismic } from '@prismicio/vue';
const prismic = createPrismic({ endpoint: 'mspirek' });

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(prismic);
});