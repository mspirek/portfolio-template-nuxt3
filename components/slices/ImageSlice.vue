<script>
export default {
  name: 'ImageSlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
  computed: {
    gridClasses() {
      return this.slice.items.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2';
    },
  },
};
</script>

<template>
  <div
    class="grid gap-4 pb-16"
    :class="gridClasses"
  >
    <div
      v-for="(img, idx) in slice.items"
      :key="idx"
      class="rounded-md overflow-hidden"
    >
      <PrismicImage
        :field="img.image"
        class=""
      />
    </div>
  </div>
</template>
