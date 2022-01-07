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

const { data: page } = await useAsyncData('prismic', () => prismic.client.getByUID('page', 'home'), { server: false});

</script>

<script>
export default {
  name: 'Home'
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
  </div>
</div>
</template>