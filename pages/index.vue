<script setup>
const { client } = usePrismic();
const { slices } = useSlices();

const [{ data: page }, { data: items }] = await Promise.all([
  useAsyncData('home', () => client.getByUID('page', 'home')),
  useAsyncData('featured-work', () => client.getAllByType('portfolio_item', {
    orderings: {
      field: 'my.portfolio_item.date',
      direction: 'desc',
    },
  },
  )),
]);

const featuredWork = computed(() => {
  return items?.value?.filter(item => item.data.featured);
});
</script>

<template>
  <div>
    <div>
      <SliceZone
        :slices="page.data.body"
        :components="slices"
      />
    </div>
    <div
      v-if="featuredWork"
      class="grid gap-8 md:grid-cols-2"
    >
      <portfolio-card
        v-for="(card, idx) in featuredWork"
        :key="idx"
        :card="card"
      />
    </div>
  </div>
</template>
