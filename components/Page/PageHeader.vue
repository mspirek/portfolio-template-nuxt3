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
      <NuxtLink to="/">
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
      </NuxtLink>
    </div>
    <nav class="desktop-nav hidden md:block">
      <ul class="flex items-center gap-8 font-semibold">
        <li>
          <NuxtLink to="/work">
            Work
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
        <li v-if="usePrismic().asLink(settings.data.cv)">
          <a
            :href="usePrismic().asLink(settings.data.cv)"
            rel="noreferrer noopener"
            target="_blank"
            class="relative"
          >
            CV
          </a>
        </li>
        <li>
          <NuxtLink
            class="relative"
            to="/contact"
          >
            Contact
          </NuxtLink>
        </li>
        <li>
          <button
            class="transition-all hover:text-blue-600"
            aria-label="toggle color scheme"
            @click="toggleDark()"
          >
            <MoonIcon
              v-show="!isDark"
              class="h-6 w-6"
            />
            <SunIcon
              v-show="isDark"
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
        <NuxtLink to="/">
          <PrismicImage
            :field="settings.data.logo_light"
            :class="roundedClasses"
            class="h-24 w-24"
          />
        </NuxtLink>
        <button @click="toggleMenu">
          <XMarkIcon class="h-8 w-8" />
        </button>
      </div>
      <nav class="mobile-nav">
        <ul class="flex flex-col text-center text-xl font-semibold">
          <li class="my-4">
            <NuxtLink
              to="/"
              class=""
            >
              Home
            </NuxtLink>
          </li>
          <li class="my-4">
            <NuxtLink
              to="/work"
              class=""
            >
              Work
            </NuxtLink>
          </li>
          <li class="my-4">
            <NuxtLink
              to="/about"
              class=""
            >
              About
            </NuxtLink>
          </li>
          <li
            v-if="usePrismic().asLink(settings.data.cv)"
            class="my-4"
          >
            <a
              :href="usePrismic().asLink(settings.data.cv)"
              rel="noreferrer noopener"
              target="_blank"
              class="relative"
            >
              CV
            </a>
          </li>
          <li class="my-4">
            <NuxtLink
              to="/contact"
              class="relative"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
