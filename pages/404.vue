<script>
export default {
  name: 'Error',
};
</script>

<template>
  <Head v-if="page">
    <Title>404 - Page Not Found</Title>
  </Head>

  <div>
    <div class="text-center">
      <h1 class="font-bold text-4xl pb-8">
        404 - Page Not Found
      </h1>
      <NuxtLink
        class="border-0 bg-blue-700 py-3 px-8 rounded-full inline-flex text-stone-100 hover:bg-blue-900 hover:text-stone-100 transition-colors font-bold"
        to="/"
      >
        Return Home
      </NuxtLink>
    </div>
  </div>
</template>