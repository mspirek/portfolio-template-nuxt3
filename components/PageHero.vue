<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    subheader: {
      type: String,
      required: true,
    },
    cta: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="pb-8">
    <h1 class="text-6xl font-bold font-header">
      {{ header }}
    </h1>
    <h2 class="text-2xl">
      {{ subheader }}
    </h2>
    <div>
      <router-link
        v-if="cta"
        :to="link"
        class="border-0 bg-blue-700 py-3 px-8 rounded-full my-4 inline-flex hover:bg-blue-900 hover:text-white"
      >
        {{ cta }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<style>

</style>