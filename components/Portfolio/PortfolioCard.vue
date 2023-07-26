<script setup>
import { CalendarIcon, TagIcon } from '@heroicons/vue/24/outline';
import { format } from 'date-fns';

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const formattedDate = computed(() => {
  return format(usePrismic().asDate(props.card?.data.date), 'MMM yyyy' );
});
</script>

<template>
  <router-link
    :to="`/work/${props.card.uid}`"
    class="block overflow-hidden rounded-md bg-stone-200 transition-transform ease-in-out hover:-translate-y-2 dark:bg-stone-800"
  >
    <div class="h-96">
      <PrismicImage
        :field="props.card.data.cover_image"
        class="h-full w-full object-cover object-top"
      />
    </div>
  
    <div class="p-8">
      <h3 class="font-header pb-2 text-2xl font-bold">
        {{ usePrismic().asText(props.card.data.title) }}
      </h3>
      <PrismicRichText
        :field="props.card.data.excerpt"
        class="light-text pb-2"
      />
      <div class="flex items-center pb-4">
        <CalendarIcon class="mr-2 h-5 w-5" />
        {{ formattedDate }}
      </div>
      <ul class="flex items-center pb-4">
        <TagIcon class="mr-2 h-5 w-5" />
        <template
          v-for="(item, idx) in props.card.data.categories"
          :key="idx"
        >
          <li>
            {{ usePrismic().asText(item.category) }}
          </li>
          <li
            v-if="idx + 1 !== props.card.data.categories.length"
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
