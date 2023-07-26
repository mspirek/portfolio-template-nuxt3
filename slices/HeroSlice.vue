<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div class="pb-16">
    <PrismicRichText
      :field="slice.primary.header"
      class="font-header pb-2 text-6xl font-bold"
    />
    <PrismicRichText
      v-if="usePrismic().asText(slice.primary.subheader)"
      :field="slice.primary.subheader"
      class="light-text pb-2 text-2xl"
    />
    <PrismicRichText
      v-if="usePrismic().asText(slice.primary.body_text)"
      :field="slice.primary.body_text"
      class="light-text pb-2"
    />
    <BaseButton
      v-if="usePrismic().asLink(slice.primary.cta_link)"
      :link="slice.primary.cta_link"
      :text="slice.primary.cta_text"
    />
  </div>
</template>
