<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div class="pb-16">
    <div class="md:flex">
      <div class="pb-4 pr-4 md:w-1/4">
        <PrismicRichText
          :field="slice.primary.header"
          class="font-header text-4xl font-bold"
        />
      </div>
      <div class="light-text md:w-3/4">
        <PrismicRichText
          :field="slice.primary.text_body"
          class="prismic-copy"
        />
      </div>
    </div>
  </div>
</template>
