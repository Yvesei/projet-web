<template>

<div class="min-h-screen flex justify-center items-center py-20">
  <div class="container mx-auto p-12 rounded-xl">
    <h1 class="text-4xl font-bold text-center mb-8">Latest Posts</h1>
    <div class="flex justify-center flex-wrap ">
      <button class="uppercase m-1 rounded gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700 " v-for="categorie in categories" v-bind:key="categorie.id" >{{categorie.category}} <span class="bg-blue-700 p-1 rounded"> {{categorie.articleCount}} </span></button>
   </div>
    <!-- Box-1 -->
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
      <div v-for="article in articles" v-bind:key="article.id">
        <Single :article=article  />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <router-link to="/articles">
      <h2 class="text-2xl font-bold text-center ">View all articles</h2>
      </router-link>
      <svg class="h-8 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
  </div>
    
</div>
</template>
<script>

import Single from './single.vue';
import axios from 'axios';
export default{
    name:"Canva",
    components:{
        Single,
    },

    mounted() {
    this.fetchArticle(); // Call the method to fetch the article data
    this.fetchCategories(); 

    
  },
  data() {
    return {
      articles: [], // Empty object to hold the article data
      categories : []
    };
  },
  methods: {
    fetchArticle() {
    
      // Make an API request to fetch the article data
      // Replace the API_URL with your actual API endpoint
      axios.get(`articles/latest`)
        .then(response => {
          this.articles = response.data; // Assign the fetched article data to the 'article' property
        })
        .catch(error => {
          console.error(error);
        });
      
    },
    fetchCategories() {
    

      axios.get(`categories/count`)
        .then(response => {
          this.categories = response.data; 
        })
        .catch(error => {
          console.error(error);
        });
      
    }
  }
}


</script>

