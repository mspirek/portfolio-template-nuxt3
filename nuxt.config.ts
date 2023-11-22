export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    // '@nuxt/image',
    '@nuxthq/ui',
    '@nuxtjs/prismic',
    //'@pinia/nuxt',
    //'@zadigetvoltaire/nuxt-gtm',
  ],

  prismic: {
    endpoint: process.env.PRISMIC_REPO,
    clientConfig: {
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
        {
          type: 'portfolio_item',
          path: '/work/:uid',
        },
      ],
    },
  },

  // gtm: {
  //   id: 'GTM-xxxxxx', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
  //   defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
  //   //nonce: '2726c7f26c', // Will add `nonce` to the script tag
  //   enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  //   debug: true, // Whether or not display console logs debugs (optional)
  //   loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  //   enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
  //   devtools: true, // (optional)
  // },

  runtimeConfig: {
    public: {
      PRISMIC: process.env.PRISMIC_REPO,
      BASIN: process.env.BASIN,
    },
  },

  css: [
    '@fontsource/dm-sans/400.css',
    '@fontsource/dm-sans/500.css',
    '@fontsource/dm-sans/700.css',
  ],
});
