<script setup>
const { client } = usePrismic();
const { slices } = useSlices();

const [{ data: page }, { data: items }] = await Promise.all([
  useAsyncData('work', () => client.getByUID('page', 'work')),
  useAsyncData('portfolio-items', () => client.getAllByType('portfolio_item', {
    orderings: {
      field: 'my.portfolio_item.date',
      direction: 'desc',
    },
  },
  )),
]);
</script>

<template>
  <div>
    <SliceZone
      :slices="page.data.body"
      :components="slices"
    />
    <div
      v-if="items"
      class="grid gap-8 md:grid-cols-2"
    >
      <portfolio-card
        v-for="(card, idx) in items"
        :key="idx"
        :card="card"
      />
    </div> 
  </div>
</template>
