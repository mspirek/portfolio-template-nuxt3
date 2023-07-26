<script setup>
defineProps(getSliceComponentProps(['slice', 'index', 'slices', 'context']));
</script>

<template>
  <div class="pb-16">
    <div class="md:flex">
      <div class="pb-4 pr-4 md:w-1/4" />
      <div class="md:w-3/4">
        <PrismicRichText
          :field="slice.primary.header"
          class="font-header pb-4 text-3xl font-bold"
        />
        <ul class="flex flex-wrap">
          <li
            v-for="(item, idx) in slice.items"
            :key="idx"
            class="mr-4 py-2 last:mr-0"
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
