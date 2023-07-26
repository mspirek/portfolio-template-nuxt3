<script setup>
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  text: {
    type: Object,
    required: true,
  },
});

const isExternal = computed(() => {
  return props.link.link_type !== 'Document';
});
</script>

<template>
  <a
    v-if="isExternal"
    rel="noopener noreferrer"
    :href="usePrismic().asLink(props.link)"
    target="_blank"
    class="inline-flex cursor-pointer rounded-full border-0 bg-blue-700 px-8 py-3 font-bold text-stone-100 transition-colors hover:bg-blue-900 dark:hover:text-stone-100"
  >
    {{ usePrismic().asText(props.text) }}
    <ArrowTopRightOnSquareIcon class="ml-2 h-6 w-6" />
  </a>
  <prismic-link
    v-else
    :field="props.link"
    class="inline-flex cursor-pointer rounded-full border-0 bg-blue-700 px-8 py-3 font-bold text-stone-100 transition-colors hover:bg-blue-900 dark:hover:text-stone-100"
  >
    {{ usePrismic().asText(props.text) }}
    <ArrowRightIcon class="ml-2 h-6 w-6" />
  </prismic-link>
</template>
