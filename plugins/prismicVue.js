import { defineNuxtPlugin } from '#app';
import { createPrismic } from '@prismicio/vue';
import linkResolver from '../link-resolver';

export default defineNuxtPlugin((nuxtApp) => {
  const prismic = createPrismic({ endpoint: nuxtApp.$config.PRISMIC_REPO, linkResolver});
  nuxtApp.vueApp.use(prismic);
});