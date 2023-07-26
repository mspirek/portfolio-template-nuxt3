<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div class="pb-16">
    <div class="md:flex">
      <div class="pb-4 pr-4 md:w-1/4">
        <PrismicRichText
          :field="slice.primary.header"
          class="font-header pb-2 text-4xl font-bold"
        />
        <PrismicRichText
          :field="slice.primary.subheader"
          class="font-header text-xl"
        />
      </div>
      <div class="light-text flex flex-wrap justify-center md:w-3/4">
        <PrismicImage
          v-for="(img, idx) in slice.items"
          :key="idx"
          class="m-4 h-64 w-64 rounded-full border-8 border-stone-300 bg-stone-100 dark:border-stone-400"
          :field="img.image"
        />
      </div>
    </div>
  </div>
</template>
