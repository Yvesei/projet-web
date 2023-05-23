<template>
<div>
<div class="heading text-center font-bold text-2xl m-5 text-gray-800 mt-[7rem]">New Post</div>

  <form class="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input v-model="title" class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text">
    <input v-model="image" class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="image" type="text">
    
    <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
    <select id="categories" v-model="selectedCategoryId" class=" mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Choose a category</option>
      <option v-for="categorie in categories" v-bind:key="categorie.id" :value="categorie.id">{{categorie.category}}</option>

    </select>

    <textarea v-model="content" class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    <!-- icons -->
    <div class="icons flex text-gray-500 m-2">
      <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
    <!-- buttons -->
    <div class="buttons flex">
      <div @click="handleSubmit()" class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
    </div>
  </form>
</div>

    
</template>
<script>

import axios from 'axios';

export default {
    name:'CreateArticle',
  data(){
      return {
        title : '',
        content : '',
        image : '',
        selectedCategoryId : '',
        categories : []
      }
    },
    mounted(){
        this.fetchCategories();
    },
    methods: {
      async handleSubmit(){
        const utilisateurId = parseInt(localStorage.getItem('id'))
        const response = await axios.post('articles/', 
            {
                titre:this.title,
                contenu : this.content,
                image : this.image,
                published: true,
                utilisateurId : utilisateurId,
                categories: this.selectedCategoryId
          }
        );
        this.$router.push('/') 
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