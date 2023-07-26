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
        <div
          class="w-full bg-stone-100"
          v-html="usePrismic().asText(slice.primary.embed)"
        />
      </div>
    </div>
  </div>
</template>
