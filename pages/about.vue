<script setup>
const { client } = usePrismic();
const { slices } = useSlices();

const { data: page } = await useAsyncData('about', () => client.getByUID('page', 'about'));

// useHead({
//   title: usePrismic().asText(page?.data.meta_title),
//   meta: [
//     { name: 'description', content: page?.usePrismic().asText(page.data.meta_description) },
//     { property: 'og:image', content: page?.data.meta_image.url },
//   ] });
</script>

<template>
  <SliceZone
    :slices="page.data.body"
    :components="slices"
  />
</template> 
