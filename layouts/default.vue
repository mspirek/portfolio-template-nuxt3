<template>
  <div class="min-h-screen flex flex-col font-sans">
    <PageHeader />
    <main class="flex-grow py-6">
      <slot />
    </main>
    <PageFooter />
  </div>
</template>