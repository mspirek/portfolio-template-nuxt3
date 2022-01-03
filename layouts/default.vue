<template>
  <div class="bg-gray-900 min-h-screen flex flex-col text-white font-sans">
    <PageHeader />
    <main class="flex-grow container max-w-7xl mx-auto pb-8 px-6">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>


<style>
nav a {
  @apply border-b border-gray-600 hover:border-transparent transition-all hover:text-blue-600;
}

.active--exact {
  @apply border-transparent transition-all text-blue-600;
}

p {
  @apply pb-4;
}
</style>
