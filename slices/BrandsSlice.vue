<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div class="grid grid-cols-2 items-center gap-8 pb-16 md:grid-cols-6">
    <div
      v-for="(img, idx) in slice.items"
      :key="idx"
      class="rounded-lg border-2 bg-white p-4"
    >
      <PrismicImage
        :field="img.brand"
        class="block w-full"
      />
    </div>
  </div>
</template>
