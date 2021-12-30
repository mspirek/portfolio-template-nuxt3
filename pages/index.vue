<script setup>
import { usePrismic } from '@prismicio/vue';
const prismic = usePrismic();

const { data } = await useAsyncData('prismic', () => prismic.client.getSingle('home'), { server: false});
</script>

<template>
  <div v-if="data">
    <div class="font-bold">
      <PrismicRichText :field="data.data.title" />
    </div>
  </div>
</template>