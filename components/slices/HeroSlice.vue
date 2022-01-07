<script>
import { ArrowSmRightIcon } from '@heroicons/vue/outline';

export default {
  name: 'HeroSlice',
  components: {
    ArrowSmRightIcon,
  },
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="pb-16">
    <PrismicRichText
      :field="slice.primary.header"
      class="text-6xl font-bold font-header pb-2"
    />
    <PrismicRichText
      :field="slice.primary.subheader"
      class="text-2xl pb-2 light-text"
    />
    <PrismicRichText
      :field="slice.primary.body_text"
      class="pb-2 light-text"
    />
    <PrismicLink
      v-if="slice.primary.cta_link && slice.primary.cta_text"
      :field="slice.primary.cta_link"
      class="border-0 bg-blue-700 py-3 px-8 rounded-full inline-flex text-stone-100 hover:bg-blue-900 dark:hover:text-stone-100 transition-colors font-bold"
    >
      {{ $prismic.asText(slice.primary.cta_text ) }}
      <ArrowSmRightIcon class="h-6 w-6" />
    </PrismicLink>
  </div>
</template>
