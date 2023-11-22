<script setup>
const { client } = usePrismic();
const { slices } = useSlices();

const fetchLinks = [
  'portfolio_item.title',
  'portfolio_item.excerpt',
  'portfolio_item.categories',
  'portfolio_item.date',
  'portfolio_item.cover_image',
];

const { data: page } = await useAsyncData('home', () => client.getByUID('page', 'home', { fetchLinks }));

</script>

<template>
  <div>
    <div>
      <SliceZone
        :slices="page.data.body"
        :components="slices"
      />
    </div>
  </div>
</template>
