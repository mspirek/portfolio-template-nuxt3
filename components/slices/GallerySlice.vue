<script>
export default {
  name: 'GallerySlice',
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
          class="text-4xl font-bold font-header pb-2"
        />
        <PrismicRichText
          :field="slice.primary.subheader"
          class="text-xl font-header"
        />
      </div>
      <div class="md:w-3/4 light-text flex flex-wrap justify-center">
        <PrismicImage
          v-for="(img, idx) in slice.items"
          :key="idx"
          class="bg-stone-100 rounded-full border-4 border-stone-600 w-64 h-64 m-4"
          :field="img.image"
        />
      </div>
    </div>
  </div>
</template>
