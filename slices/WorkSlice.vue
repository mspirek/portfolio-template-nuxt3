<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div class="grid grid-cols-1 gap-8 pb-16 md:grid-cols-2">
    <PortfolioCard
      v-for="(card, idx) in slice.items"
      :key="idx"
      :card="card.work"
    />
  </div>
</template>
