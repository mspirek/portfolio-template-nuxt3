<script setup>
import { usePrismic } from '@prismicio/vue';
const prismic = usePrismic();

const { data: settings } = await useAsyncData('prismic', () => prismic.client.getSingle('settings'), { server: false});
</script>

<script>
export default {
  data: () =>({
    darkMode: true,
  }),
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;

      if (this.darkMode) {
        localStorage.setItem('theme', 'dark')
      } else {
        localStorage.setItem('theme', 'light')
      }
    }
  },
  mounted() {
    if (process.client) {
      if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'light') {
        this.darkMode = false;
      }
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        this.darkMode = false;
      }
    }
  }
}
</script>

<template>
  <div :class="{'dark': darkMode}">
    <Head v-if="settings">
      <Meta name="og:image" :content="settings.data.default_meta_image.url" />
      <Link rel="shortcut icon" :href="settings.data.favicon.url" />
    </Head>
    <div class="dark:bg-stone-900 dark:text-stone-100 text-stone-900 bg-stone-100 min-h-screen flex flex-col  font-sans">
      <PageLoader v-if="!settings" />
      <template v-else>
        <PageHeader :settings="settings" @dark-mode="toggleDarkMode" :dark-mode="darkMode"/>
        <main class="flex-grow container max-w-7xl mx-auto pb-8 px-6">
          <slot />
        </main>
        <PageFooter :settings="settings"/>
      </template>
    </div>
  </div>
</template>


<style lang="postcss">
header .desktop-nav a {
  @apply border-b border-stone-600 hover:border-transparent transition-all hover:text-blue-600 pb-1 leading-none;
}

header .mobile-nav a {
  @apply border-b text-stone-100 border-stone-100 hover:border-transparent transition-all pb-1 leading-none;
  &.router-link-exact-active {
    @apply border-transparent transition-all;
  }
}

footer nav a {
  @apply border-b border-stone-600 hover:border-transparent transition-all hover:text-blue-600 pb-1 leading-none;
}

.light-text {
  @apply dark:text-stone-300 text-stone-600;
}

.prismic-copy {
  a {
    @apply border-b border-stone-600 hover:border-transparent transition-all hover:text-blue-600 pb-1 leading-none;
  }
}

.router-link-exact-active {
  @apply border-transparent transition-all text-blue-600;
}

p {
  @apply pb-4;
}
</style>
