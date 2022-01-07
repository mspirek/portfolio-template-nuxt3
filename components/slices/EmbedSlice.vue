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
  <div
    class="grid gap-4 pb-16"
  >
    <div
      v-for="(img, idx) in slice.items"
      :key="idx"
      class="rounded-md overflow-hidden"
    >
      <PrismicImage
        :field="img.image"
        class="text-6xl font-bold font-header"
      />
    </div>
  </div>
</template>
