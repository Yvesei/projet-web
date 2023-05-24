<template>

<div class="min-h-screen flex justify-center items-center py-20">
  <div class="container mx-auto p-12 rounded-xl">
    <h1 class="text-4xl font-bold text-center mb-8">Latest Posts</h1>
    <div class="flex justify-center flex-wrap ">
      <button class="uppercase m-1 rounded gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700 " v-for="categorie in categories" v-bind:key="categorie.id" >{{categorie.category}} <span class="bg-blue-700 p-1 rounded"> {{categorie.articleCount}} </span></button>
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
    this.fetchCategories(); 
  },
  data() {
    return {
      articles: [], 
      categories : []
    };
  },
  methods: {
    fetchArticle() {
      var i =1;
      
      axios.get(`articles`)
        .then(response => {
          this.articles = response.data; 
        })
        .catch(error => {
          console.error(error);
        });
        i++;
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

