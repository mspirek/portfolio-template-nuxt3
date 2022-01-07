<script>
export default {
  name: 'ProfileCard',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <router-link
    :to="`/work/${card.uid}`"
    class="dark:bg-stone-800 bg-stone-200 rounded-md overflow-hidden block transform hover:-translate-y-2 transition-transform ease-in-out"
  >
    <div>
      <PrismicImage :field="card.data.cover_image" />
    </div>
  
    <div class="p-8">
      <h3 class="text-2xl pb-2 font-header font-bold">
        {{ $prismic.asText(card.data.title) }}
      </h3>
      <PrismicRichText
        :field="card.data.excerpt"
        class="pb-2 light-text"
      />
      <ul class="flex">
        <template
          v-for="(item, idx) in card.data.categories"
          :key="idx"
        >
          <li>{{ $prismic.asText(item.category) }}</li>
          <li
            v-if="idx+1 !== card.data.categories.length"
            class="mx-2 text-stone-600"
            aria-hidden="true"
          >
            /
          </li>
        </template>
      </ul>
    </div>
  </router-link>
</template>

<style>
.card {
  animation-iteration-count: 1 !important;
}
</style>