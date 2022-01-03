<script>
export default {
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<template>
  <div class="flex justify-between items-center container max-w-7xl px-6 mx-auto py-8">
    <div>
      <router-link to="/">
        <img
          src="~/assets/img/gabe.svg"
        >
      </router-link>
    </div>
    <nav class="hidden md:block">
      <ul class="flex font-semibold">
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
        <li class="mx-4 flex items-center">
          <a
            href="mailto:test@test.com"
            class=""
          >
            Contact
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </li>
      </ul>
    </nav>
    <button
      class="md:hidden"
      @click="toggleMenu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
    <div
      v-show="menuOpen"
      :class="{'opacity-100': menuOpen}"
      class="md:hidden fixed bg-blue-800 w-full h-full top-0 left-0 z-10 opacity-0"
    >
      <div class="flex justify-between items-center px-6 py-8">
        <router-link to="/">
          <img
            src="~/assets/img/gabe.svg"
          >
        </router-link>
        <button @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <nav class="">
        <ul class="flex flex-col font-semibold text-center text-lg">
          <li class="my-4">
            <router-link to="/">
              Home
            </router-link>
          </li>
          <li class="my-4">
            <router-link to="/work">
              Work
            </router-link>
          </li>
          <li class="my-4">
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li class="my-4 flex items-center justify-center">
            <a
              href="mailto:test@test.com"
              class=""
            >
              Contact
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>