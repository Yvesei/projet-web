<template>
<!-- Create By Joker Banny -->
<div class="min-h-screen flex justify-center items-center py-20">
  <div class="container mx-auto p-12 rounded-xl">
    <h1 class="text-4xl font-bold text-center mb-8">Latest Posts</h1>
    <!-- Box-1 -->
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
    <Single />
      <!-- Box-2 -->
    <Single />
      <!-- Box-3 -->
    <Single />
    <Single />
    <Single />
    <Single />
    <Single />
    <Single />
    <Single />
    </div>
    <div class="flex justify-center items-center">
      <h2 class="text-2xl font-bold text-center ">View all articles</h2>
      <svg class="h-8 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
  </div>
    
</div>
</template>
<script>

import Single from './single.vue';
export default{
    name:"Canva",
    components:{
        Single,
    }
}


        Single</script>

