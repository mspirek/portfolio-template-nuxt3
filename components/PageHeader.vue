<script>
import { ExternalLinkIcon, MenuAlt3Icon, XIcon, SunIcon, MoonIcon } from '@heroicons/vue/outline';
export default {
  components: {
    ExternalLinkIcon,
    MenuAlt3Icon,
    XIcon,
    SunIcon,
    MoonIcon,
  },
  props: {
    settings: {
      type: Object,
      required: true,
    },
    darkMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['darkMode'],
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    roundedClasses() {
      if (this.settings.data.round_logo) {
        return 'rounded-full border-4 border-stone-400';
      }
      return '';
    },
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDarkMode() {
      this.$emit('darkMode');
    },
  },
};
</script>

<template>
  <header
    v-if="settings"
    class="flex justify-between items-center container max-w-7xl px-6 mx-auto pt-8 pb-16"
  >
    <div>
      <router-link to="/">
        <PrismicImage
          :field="settings.data.logo_dark"
          class="dark:hidden block"
          :class="roundedClasses"
        />
        <PrismicImage
          :field="settings.data.logo_light"
          class="hidden dark:block"
          :class="roundedClasses"
        />
      </router-link>
    </div>
    <nav class="hidden md:block desktop-nav">
      <ul class="flex font-semibold items-center">
        <li class="mx-4">
          <router-link to="/work">
            Work
          </router-link>
        </li>
        <li class="mx-4">
          <router-link to="/about">
            About
          </router-link>
        </li>
        <li
          v-if="settings.data.cv"
          class="mx-4"
        >
          <a
            :href="$prismic.asLink(settings.data.cv)"
            rel="noreferrer noopener"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li class="mx-4">
          <a
            class="relative"
            :href="`mailto:${$prismic.asText(settings.data.email)}`"
          >
            Contact
            <ExternalLinkIcon class="h-5 w-5 absolute top-0 right-0 -mr-6" />
          </a>
        </li>
        <li>
          <button
            class="pl-6 hover:text-blue-600 transition-all"
            aria-label="toggle color scheme"
            @click="toggleDarkMode"
          >
            <MoonIcon
              v-if="darkMode"
              class="h-6 w-6"
            />
            <SunIcon
              v-else
              class="h-6 w-6"
            />
          </button>
        </li>
      </ul>
    </nav>
    <div class="md:hidden">
      <button
        class="pr-4 hover:text-blue-600 transition-all"
        aria-label="toggle color scheme"
        @click="toggleDarkMode"
      >
        <MoonIcon
          v-if="darkMode"
          class="h-8 w-8"
        />
        <SunIcon
          v-else
          class="h-8 w-8"
        />
      </button>
      <button
        @click="toggleMenu"
      >
        <MenuAlt3Icon class="h-8 w-8" />
      </button>
    </div>
    <div
      v-show="menuOpen"
      class="md:hidden fixed bg-blue-800 bg-opacity-90 w-full h-full top-0 left-0 z-10"
    >
      <div class="flex justify-between items-center px-6 py-8">
        <router-link to="/">
          <PrismicImage
            :field="settings.data.logo_light"
            :class="roundedClasses"
          />
        </router-link>
        <button @click="toggleMenu">
          <XIcon class="h-8 w-8" />
        </button>
      </div>
      <nav class="mobile-nav">
        <ul class="flex flex-col font-semibold text-center text-xl">
          <li class="my-4">
            <router-link
              to="/"
              class=""
            >
              Home
            </router-link>
          </li>
          <li class="my-4">
            <router-link
              to="/work"
              class=""
            >
              Work
            </router-link>
          </li>
          <li class="my-4">
            <router-link
              to="/about"
              class=""
            >
              About
            </router-link>
          </li>
          <li
            v-if="settings.data.cv"
            class="my-4"
          >
            <a
              :href="$prismic.asLink(settings.data.cv)"
              rel="noreferrer noopener"
              target="_blank"
              class=""
            >
              CV
            </a>
          </li>
          <li class="my-4">
            <a
              :href="`mailto:${$prismic.asText(settings.email)}`"
              class="relative"
            >
              Contact
              <ExternalLinkIcon class="h-5 w-5 absolute top-0 right-0 -mr-6" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>