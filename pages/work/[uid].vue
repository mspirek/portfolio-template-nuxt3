<script setup>
import { CalendarIcon, TagIcon } from '@heroicons/vue/24/outline';
import { format } from 'date-fns';

const { client } = usePrismic();
const { slices } = useSlices();

const route = useRoute();

const { data: page } = await useAsyncData('portfolio_item', () => client.getByUID('portfolio_item', route.params.uid));

const formattedDate = computed(() => {
  return format(usePrismic().asDate(page?.value?.data.date), 'MMM yyyy' );
});

</script>


<template>
  <div>
    <div class="flex items-center pb-4">
      <CalendarIcon class="mr-2 h-5 w-5" />
      {{ formattedDate }}
    </div>
    <div class="flex items-center pb-4">
      <TagIcon class="mr-2 h-5 w-5" />
      <ul class="flex">
        <template
          v-for="(item, idx) in page.data.categories"
          :key="idx"
        >
          <li>{{ usePrismic().asText(item.category) }}</li>
          <li
            v-if="idx + 1 !== page.data.categories.length"
            class="mx-2 text-stone-600"
            aria-hidden="true"
          >
            /
          </li>
        </template>
      </ul>
    </div>
    <SliceZone
      :slices="page.data.body"
      :components="slices"
    />
  </div>
</template>
