<script>
import { ArrowSmRightIcon } from '@heroicons/vue/outline';
export default {
  name: 'CTASlice',
  props: {
    slice: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="pb-16"
  >
    <div class="md:flex">
      <div class="md:w-1/4 pb-4" />
      <div class="md:w-3/4 light-text">
        <PrismicRichText
          :field="slice.primary.header"
          class="text-3xl font-bold font-header pb-4"
        />
        <ul class="flex">
          <li
            v-for="(item, idx) in slice.items"
            :key="idx"
            class="mr-4 last:mr-0"
          >
            <BaseButton
              :link="item.cta_link"
              :text="item.cta_text"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
