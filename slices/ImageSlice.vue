<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div
    class="grid gap-4 pb-16"
    :class="slice.items.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'"
  >
    <div
      v-for="(img, idx) in slice.items"
      :key="idx"
      class="overflow-hidden rounded-md"
    >
      <PrismicImage
        :field="img.image"
        class=""
      />
    </div>
  </div>
</template>
