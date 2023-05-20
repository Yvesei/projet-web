<template>

<div class="min-h-screen flex justify-center items-center py-20">
  <div class="container mx-auto p-12 rounded-xl">
    <h1 class="text-4xl font-bold text-center mb-8">Latest Posts</h1>
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
      <button class="gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700">Ukraine war</button>
      <button class="gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700">Investigations</button>
      <button class="gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700">Palestine</button>
      <button class="gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700">Analysis</button>
    </div>
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
      <div v-for="article in articles" v-bind:key="article.id">
        <Single :article=article  />
      </div>
    </div>
    </div>
  </div>

</template>
<script>

import axios from "axios";

import Single from './single.vue';
export default{
    name:"Canva",
    components:{
        Single,
    },

    mounted() {
    this.fetchArticle(); // Call the method to fetch the article data
    console.log('hello hhhhhh')
  },
  data() {
    return {
      articles: [] // Empty object to hold the article data
      
    };
  },
  methods: {
    fetchArticle() {
      var i =1;
      // Make an API request to fetch the article data
      // Replace the API_URL with your actual API endpoint
      axios.get(`articles`)
        .then(response => {
          console.log(response)
          this.articles = response.data; // Assign the fetched article data to the 'article' property
        })
        .catch(error => {
          console.error(error);
        });
        i++;
    }
  }
}


</script>

