<template>
  <AppHero
    header="Work."
    subheader="See my work"
  />
  <div class="grid md:grid-cols-2 gap-8">
    <PortfolioCard
      v-for="(card, idx) in 8"
      :key="idx"
    />
  </div>
</template>
