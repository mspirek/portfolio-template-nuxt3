<script setup>
import { usePrismic } from '@prismicio/vue';
const prismic = usePrismic();
const route = useRoute();

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

const { data: page } = await useAsyncData('prismic', () => prismic.client.getByUID('portfolio_item', route.params.uid), { server: false});

</script>

<script>
import { format } from 'date-fns';
import { CalendarIcon, TagIcon } from '@heroicons/vue/outline';

export default {
  name: 'PortfolioItem',
  components: {
    CalendarIcon,
    TagIcon,
  },
  computed: {
    formattedDate() {
      return format(this.$prismic.asDate(this.page.data.date), 'MMM yyyy' );
    },
  },
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
    <div class="pb-4 flex items-center">
      <CalendarIcon class="h-5 w-5 mr-2" />
      {{ formattedDate }}
    </div>
    <div class="flex items-center pb-4">
      <TagIcon class="h-5 w-5 mr-2" />
      <ul class="flex">
        <template
          v-for="(item, idx) in page.data.categories"
          :key="idx"
        >
          <li>{{ $prismic.asText(item.category) }}</li>
          <li
            v-if="idx+1 !== page.data.categories.length"
            class="mx-2 text-stone-600"
            aria-hidden="true"
          >
            /
          </li>
        </template>
      </ul>
    </div>
    <SliceZone :slices="page.data.body" :components="components" />
  </div>
</div>
</template>