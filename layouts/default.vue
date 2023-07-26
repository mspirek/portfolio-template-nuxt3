<script setup>
const { client } = usePrismic();

const { data: settings } = await useAsyncData('settings', () => client.getSingle('settings'));

// useHead({
//   title: usePrismic().asText(page?.data.meta_title),
//   meta: [
//     { name: 'description', content: page?.usePrismic().asText(page.data.meta_description) },
//     { property: 'og:image', content: settings?.data.default_meta_image.url },
//   ],
//   link: [
//     { rel: 'shortcut icon', href: settings?.data.favicon.url },
//   ],
// });
</script>

<template>
  <div class="flex min-h-screen flex-col bg-stone-100 font-dm-sans text-stone-900 dark:bg-stone-900 dark:text-stone-100">
    <PageHeader :settings="settings" />
    <main class="container mx-auto max-w-7xl grow px-6 pb-8">
      <slot />
    </main>
    <PageFooter :settings="settings" />
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
