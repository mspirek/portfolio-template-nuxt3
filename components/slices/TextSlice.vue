<script>
export default {
  name: 'TextSlice',
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
        <PrismicRichText
          :field="slice.primary.text_body"
          class="prismic-copy"
        />
      </div>
    </div>
  </div>
</template>
