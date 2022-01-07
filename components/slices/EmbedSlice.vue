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
  <div class="pb-16">
    <div
      class="w-full"
      v-html="slice.primary.embed.html"
    />
  </div>
</template>

<style>
iframe {
  width: 100% !important;
  height: 100% !important;
}
</style>