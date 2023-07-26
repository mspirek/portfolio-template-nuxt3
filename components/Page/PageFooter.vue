<script setup>
import { ArrowTopRightOnSquareIcon, MapPinIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  settings: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <footer
    v-if="settings"
    class="container mx-auto flex max-w-7xl flex-col justify-between border-t px-6 py-8 md:flex-row"
  >
    <nav class="">
      <ul class="flex flex-wrap">
        <li class="py-2">
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li
          class="mx-2 py-2 text-stone-600"
          aria-hidden="true"
        >
          /
        </li>
        <li class="py-2">
          <router-link to="/work">
            Work
          </router-link>
        </li>
        <li
          class="mx-2 py-2 text-stone-600"
          aria-hidden="true"
        >
          /
        </li>
        <li class="py-2">
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li
          class="mx-2 py-2 text-stone-600"
          aria-hidden="true"
        >
          /
        </li>
        <li
          v-if="usePrismic().asLink(props.settings.data.cv)"
          class="py-2"
        >
          <a
            :href="usePrismic().asLink(props.settings.data.cv)"
            rel="noreferrer noopener"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li
          v-if="usePrismic().asLink(props.settings.data.cv)"
          class="mx-2 py-2 text-stone-600"
          aria-hidden="true"
        >
          /
        </li>
        <li
          v-if="usePrismic().asText(props.settings.data.email)"
          class="py-2"
        >
          <a :href="`mailto:${usePrismic().asText(props.settings.data.email)}`">
            Contact
          </a>
        </li>
      </ul>
      <ul
        v-if="props.settings.data.external_links.length"
        class="flex flex-wrap"
      >
        <li class="mr-2 self-end py-2">
          <ArrowTopRightOnSquareIcon class="h-5 w-5" />
        </li>
        <template
          v-for="(link, idx) in props.settings.data.external_links"
          :key="idx"
        >
          <li class="py-2">
            <PrismicLink :field="link.url">
              {{ usePrismic().asText(link.text) }}
            </PrismicLink>
          </li>
          <li
            v-if="idx + 1 !== props.settings.data.external_links.length"
            class="mx-2 py-2 text-stone-600"
            aria-hidden="true"
          >
            /
          </li>
        </template>
      </ul>
    </nav>

    <div>
      <div class="flex items-center py-2 md:justify-end">
        <MapPinIcon class="mr-1 h-5 w-5" /> {{ usePrismic().asText(props.settings.data.location) }}
      </div>
      <div class="py-2">
        © {{ new Date().getFullYear() }} {{ usePrismic().asText(props.settings.data.name) }}
      </div>
    </div>
  </footer>
</template>
