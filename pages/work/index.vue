<script setup>
import { usePrismic } from '@prismicio/vue';
const prismic = usePrismic();

import HeroSlice from '@/components/slices/HeroSlice';
import TextSlice from '@/components/slices/TextSlice';
import ImageSlice from '@/components/slices/ImageSlice';
import EmbedSlice from '@/components/slices/EmbedSlice';
import CtaSlice from '@/components/slices/CtaSlice';
import GallerySlice from '@/components/slices/GallerySlice';

const components = {
  hero_slice: HeroSlice,
  text_slice: TextSlice,
  image_slice: ImageSlice,
  embed_slice: EmbedSlice,
  cta_slice: CtaSlice,
  gallery_slice: GallerySlice,
};

const [{ data: page }, { data: items }] = await Promise.all([
      useAsyncData('prismic', () => prismic.client.getByUID('page', 'work'), { server: false}),
      useAsyncData('prismic2', () => prismic.client.query(
        prismic.predicate.at('document.type', 'portfolio_item'), {
          orderings: 'my.portfolio_item.date desc',
          pageSize: 100,
          }
      ), { server: false}),
    ]);

</script>

<script>
export default {
  name: 'Work'
}
</script>

<template>
  <div>
    <Head v-if="page">
      <Title>{{ $prismic.asText(page.data.meta_title) }}</Title>
      <Meta name="description" :content="$prismic.asText(page.data.meta_description)" />
      <Meta name="og:image" :content="page.data.meta_image.url" />
    </Head>

    <PageLoader v-if="!page" />
    <div v-else>
      <div>
        <SliceZone :slices="page.data.body" :components="components" />
      </div>
      <div class="grid md:grid-cols-2 gap-8" v-if="items">
        <portfolio-card
          v-for="(card, idx) in items.results"
          :key="idx"
          :card="card"
        />
      </div>
    </div>
  </div>
</template>