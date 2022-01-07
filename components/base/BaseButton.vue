<script>
import { ArrowSmRightIcon, ExternalLinkIcon } from '@heroicons/vue/outline';

export default {
  name: 'BaseButton',
  components: {
    ArrowSmRightIcon,
    ExternalLinkIcon,
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
    text: {
      type: Object,
      required: true,
    },
  },
  computed: {
    prismicLink() {
      return this.$prismic.asLink(this.link);
    },
    isExternal() { 
      return this.prismicLink.startsWith('http');
    },
  },
};
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    v-if="prismicLink"
    :rel="isExternal ? 'noopener noreferrer': undefined"
    :to="!isExternal ? prismicLink: undefined"
    :href="isExternal ? prismicLink : undefined"
    :target="isExternal ? '_blank': undefined"
    class="border-0 bg-blue-700 py-3 px-8 rounded-full inline-flex text-stone-100 hover:bg-blue-900 dark:hover:text-stone-100 transition-colors font-bold cursor-pointer"
  >
    {{ $prismic.asText(text) }}
    <ArrowSmRightIcon
      v-if="!isExternal"
      class="ml-2 h-6 w-6"
    />
    <ExternalLinkIcon
      v-else
      class="ml-2 h-6 w-6"
    />
  </component>
</template>
