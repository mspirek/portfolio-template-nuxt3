<script>
import { format } from 'date-fns';
import { CalendarIcon, TagIcon } from '@heroicons/vue/outline';

export default {
  name: 'PortfolioCard',
  components: {
    CalendarIcon,
    TagIcon,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return format(this.$prismic.asDate(this.card.data.date), 'MMM yyyy' );
    },
  },
};
</script>

<template>
  <router-link
    :to="`/work/${card.uid}`"
    class="dark:bg-stone-800 bg-stone-200 rounded-md overflow-hidden block transform hover:-translate-y-2 transition-transform ease-in-out"
  >
    <div class="h-96">
      <PrismicImage
        :field="card.data.cover_image"
        class="object-cover h-full w-full object-top"
      />
    </div>
  
    <div class="p-8">
      <h3 class="text-2xl pb-2 font-header font-bold">
        {{ $prismic.asText(card.data.title) }}
      </h3>
      <PrismicRichText
        :field="card.data.excerpt"
        class="pb-2 light-text"
      />
      <div class="pb-4 flex items-center">
        <CalendarIcon class="h-5 w-5 mr-2" />
        {{ formattedDate }}
      </div>
      <ul class="flex items-center pb-4">
        <TagIcon class="h-5 w-5 mr-2" />
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