<script>
export default {
  name: 'EmbedSlice',
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
    <div class="md:flex">
      <div class="md:w-1/4 pb-4">
        <PrismicRichText
          :field="slice.primary.header"
          class="text-4xl font-bold font-header"
        />
      </div>
      <div class="md:w-3/4 light-text">
        <div
          class="w-full bg-stone-100"
          v-html="$prismic.asText(slice.primary.embed)"
        />
      </div>
    </div>
  </div>
</template>
