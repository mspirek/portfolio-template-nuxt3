<script setup>
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  link: {
    type: Object,
    default: () => {},
  },
  text: {
    type: Object,
    required: true,
  },
  submit: {
    type: Boolean,
    default: false,
  },
});

const isExternal = computed(() => {
  if (!props.link) return false;
  return props.link.link_type !== 'Document';
});
</script>

<template>
  <a
    v-if="isExternal"
    rel="noopener noreferrer"
    :href="usePrismic().asLink(props.link)"
    target="_blank"
    class="inline-flex cursor-pointer self-start rounded-full border-0 bg-blue-700 px-8 py-3 font-bold text-stone-100 transition-colors hover:bg-blue-900 dark:hover:text-stone-100"
  >
    {{ usePrismic().asText(props.text) }}
    <ArrowTopRightOnSquareIcon class="ml-2 h-6 w-6" />
  </a>
  <button
    v-else-if="props.submit"
    type="submit"
    class="inline-flex cursor-pointer self-start rounded-full border-0 bg-blue-700 px-8 py-3 font-bold text-stone-100 transition-colors hover:bg-blue-900 dark:hover:text-stone-100"
  >
    {{ props.text }}
    <ArrowRightIcon class="ml-2 h-6 w-6" />
  </button>
  <PrismicLink
    v-else
    :field="props.link"
    class="inline-flex cursor-pointer self-start rounded-full border-0 bg-blue-700 px-8 py-3 font-bold text-stone-100 transition-colors hover:bg-blue-900 dark:hover:text-stone-100"
  >
    {{ usePrismic().asText(props.text) }}
    <ArrowRightIcon class="ml-2 h-6 w-6" />
  </PrismicLink>
</template>
