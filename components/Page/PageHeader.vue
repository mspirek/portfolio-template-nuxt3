<script setup>
import { ArrowTopRightOnSquareIcon, Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { useDark, useToggle } from '@vueuse/core';
const route = useRoute();

const isDark = useDark();
const toggleDark = useToggle(isDark);

const props = defineProps({
  settings: {
    type: Object,
    required: true,
  },
});

const menuOpen = ref(false);

//const emit = defineEmits(['darkMode']);

const roundedClasses = computed(() => {
  if (props.settings.data.round_logo) {
    return 'rounded-full border-4 border-stone-300 dark:border-stone-400';
  }
  return '';
});

watch(route, () => {
  menuOpen.value = false;
});

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// const toggleDark = () => {
//   emit('darkMode');
// };
</script>

<template>
  <header
    v-if="settings"
    class="container mx-auto flex max-w-7xl items-center justify-between px-6 pb-16 pt-8"
  >
    <div>
      <router-link to="/">
        <PrismicImage
          :field="settings.data.logo_dark"
          class="block h-24 w-24 dark:hidden"
          :class="roundedClasses"
        />
        <PrismicImage
          :field="settings.data.logo_light"
          class="hidden h-24 w-24 dark:block"
          :class="roundedClasses"
        />
      </router-link>
    </div>
    <nav class="desktop-nav hidden md:block">
      <ul class="flex items-center font-semibold">
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
          v-if="usePrismic().asLink(settings.data.cv)"
          class="mx-4"
        >
          <a
            :href="usePrismic().asLink(settings.data.cv)"
            rel="noreferrer noopener"
            target="_blank"
          >
            CV
          </a>
        </li>
        <li
          v-if="usePrismic().asText(settings.data.email)"
          class="mx-4"
        >
          <a
            class="relative"
            :href="`mailto:${usePrismic().asText(settings.data.email)}`"
          >
            Contact
            <ArrowTopRightOnSquareIcon class="absolute right-0 top-0 -mr-6 h-5 w-5" />
          </a>
        </li>
        <li>
          <button
            class="pl-6 transition-all hover:text-blue-600"
            aria-label="toggle color scheme"
            @click="toggleDark()"
          >
            <MoonIcon
              v-if="!isDark"
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
        class="pr-4 transition-all hover:text-blue-600"
        aria-label="toggle color scheme"
        @click="toggleDark()"
      >
        <MoonIcon
          v-if="isDark"
          class="h-8 w-8"
        />
        <SunIcon
          v-else
          class="h-8 w-8"
        />
      </button>
      <button @click="toggleMenu">
        <Bars3Icon class="h-8 w-8" />
      </button>
    </div>
    <div
      v-show="menuOpen"
      class="fixed left-0 top-0 z-10 h-full w-full bg-blue-800 bg-opacity-90 md:hidden"
    >
      <div class="flex items-center justify-between px-6 py-8">
        <router-link to="/">
          <PrismicImage
            :field="settings.data.logo_light"
            :class="roundedClasses"
            class="h-24 w-24"
          />
        </router-link>
        <button @click="toggleMenu">
          <XMarkIcon class="h-8 w-8" />
        </button>
      </div>
      <nav class="mobile-nav">
        <ul class="flex flex-col text-center text-xl font-semibold">
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
            v-if="usePrismic().asLink(settings.data.cv)"
            class="my-4"
          >
            <a
              :href="usePrismic().asLink(settings.data.cv)"
              rel="noreferrer noopener"
              target="_blank"
              class=""
            >
              CV
            </a>
          </li>
          <li class="my-4">
            <a
              :href="`mailto:${usePrismic().asText(settings.email)}`"
              class="relative"
            >
              Contact
              <ArrowTopRightOnSquareIcon class="absolute right-0 top-0 -mr-6 h-5 w-5" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
