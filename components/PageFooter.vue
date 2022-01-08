<script>
import { ExternalLinkIcon, LocationMarkerIcon } from '@heroicons/vue/outline';

export default {
  components: {
    ExternalLinkIcon,
    LocationMarkerIcon,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <footer
    v-if="settings"
    class="flex flex-col md:flex-row justify-between container max-w-7xl px-6 mx-auto border-t py-8"
  >
    <nav class="">
      <ul
        class="flex flex-wrap"
      >
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
          v-if="$prismic.asLink(settings.data.cv)"
          class="py-2"
        >
          <a
            :href="$prismic.asLink(settings.data.cv)"
            rel="noreferrer noopener"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li
          v-if="$prismic.asLink(settings.data.cv)"
          class="mx-2 py-2 text-stone-600"
          aria-hidden="true"
        >
          /
        </li>
        <li class="py-2">
          <a :href="`mailto:${$prismic.asText(settings.data.email)}`">
            Contact
          </a>
        </li>
      </ul>
      <ul
        v-if="settings.data.external_links.length"
        class="flex flex-wrap"
      >
        <li class="mr-2 py-2 self-end">
          <ExternalLinkIcon class="h-5 w-5" />
        </li>
        <template
          v-for="(link, idx) in settings.data.external_links"
          :key="idx"
        >
          <li class="py-2">
            <PrismicLink
              :field="link.url"
            >
              {{ $prismic.asText(link.text) }}
            </PrismicLink>
          </li>
          <li
            v-if="idx+1 !== settings.data.external_links.length"
            class="mx-2 py-2 text-stone-600"
            aria-hidden="true"
          >
            /
          </li>
        </template>
      </ul>
    </nav>

    <div>
      <div class="flex md:justify-end items-center py-2">
        <LocationMarkerIcon class="h-5 w-5 mr-1" /> {{ $prismic.asText(settings.data.location) }}
      </div>
      <div class="py-2">
        © {{ new Date().getFullYear() }} {{ $prismic.asText(settings.data.name) }}
      </div>
    </div>
  </footer>
</template>