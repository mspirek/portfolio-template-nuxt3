<script>
export default {

};
</script>

<template>
  <router-link
    to="/portfolio-item"
    class="bg-gray-700 rounded-md overflow-hidden block transform hover:-translate-y-2 transition-transform ease-in-out"
  >
    <div>
      <img
        src="~/assets/img/example.png"
      >
    </div>
  
    <div class="p-8 text-white">
      <h3 class="text-2xl pb-2 font-header">
        Fitness Buddy
      </h3>
      <h4 class="pb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h4>
      <ul class="flex">
        <li>Mobile</li>
        <li class="mx-2">
          /
        </li>
        <li>UI</li>
        <li class="mx-2">
          /
        </li>
        <li>UX</li> 
        <li class="mx-2">
          /
        </li>
        <li>Wireframing</li>
      </ul>
    </div>
  </router-link>
</template>

<style>
.card {
  animation-iteration-count: 1 !important;
}
</style>