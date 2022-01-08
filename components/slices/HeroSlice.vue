<script>
export default {
  name: 'HeroSlice',
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
      v-if="$prismic.asText(slice.primary.subheader)"
      :field="slice.primary.subheader"
      class="text-2xl pb-2 light-text"
    />
    <PrismicRichText
      v-if="$prismic.asText(slice.primary.body_text)"
      :field="slice.primary.body_text"
      class="pb-2 light-text"
    />
    <BaseButton
      :link="slice.primary.cta_link"
      :text="slice.primary.cta_text"
    />
  </div>
</template>
