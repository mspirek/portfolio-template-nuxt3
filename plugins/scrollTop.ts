export default defineNuxtPlugin((nuxtApp) => {
  // TODO: there may be a way to do this through the router options
  // here for more details: https://v3.nuxtjs.org/migration/component-options#scrolltotop
  nuxtApp.hook('page:finish', async (a) => {
    window.scrollTo({ top: 0 });
  });
});
