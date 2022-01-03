<script setup>
import { usePrismic } from '@prismicio/vue';
const prismic = usePrismic();

const { data } = await useAsyncData('prismic', () => prismic.client.getSingle('home'), { server: false});
</script>

<template>
  <div v-if="data">
    <AppHero
      header="About."
      subheader="Some more about me"
      cta="See My Work"
      link="/work"
    />
    <PrismicRichText :field="data.data.title" />
  </div>
</template>