<template>
<div>
<div class="heading text-center font-bold text-2xl m-5 text-gray-800 mt-[7rem]">New Post</div>

  <form class="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input v-model="title" class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text">
    <input v-model="image" class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="image" type="text">
    <div id="categories">
      <button class="uppercase m-1 rounded gray-dark px-5 py-3 text-base mb-3 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-blue-700" v-for="category in categories" v-bind:key="category.id" :value="category.id" @click.prevent="toggleCategory(category.id)" :class="{ 'selected': isSelected(category.id) }">
        {{ category.nom }}
      </button>
    </div>
    <button @click.prevent="showAddCategoryForm"  class="mb-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Category</button>

      
    <!-- <label for="categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a category</label>
    <select id="categories" v-model="selectedCategoryId" class=" mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option selected>Choose a category</option>
      <option v-for="categorie in categories" v-bind:key="categorie.id" :value="categorie.id">{{categorie.category}}</option>

    </select> -->

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
   <!-- Overlay with dimmed background -->
   <div v-show="isAddCategoryFormVisible" class="fixed inset-0 bg-black bg-opacity-50 z-50" ></div>

  <!-- Add category form -->
  <form v-show="isAddCategoryFormVisible" class="flex flex-col items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-50" >
    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">New Category</div>
    <input v-model="categoryname" class="w-[40rem] title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="name" type="text">
    <div class="buttons w-[20rem]">
      <div @click="handleCategorySubmit()" class="btn text-center rounded border border-indigo-500 p-1 px-4 font-bold  cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
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
        selectedCategories : [],
        categories : [],
        isAddCategoryFormVisible: false,
        categoryname : ''
      }
    },
    mounted(){
        this.fetchCategories();
    },
    methods: {
      showAddCategoryForm() {
      this.isAddCategoryFormVisible = true;
    },
    async handleCategorySubmit(){
        const utilisateurId = parseInt(localStorage.getItem('id'))
        const response = await axios.post('categories/', 
            {
                nom :this.categoryname,
            }
        );
      },
      async handleSubmit(){
        const utilisateurId = parseInt(localStorage.getItem('id'))
        const response = await axios.post('articles/', 
            {
                titre:this.title,
                contenu : this.content,
                image : this.image,
                published: true,
                utilisateurId : utilisateurId,
                categories: this.selectedCategories
          }
        );
        this.$router.push('/') 
      },
      fetchCategories() {
  
      axios.get(`categories`)
        .then(response => {
          this.categories = response.data; 
        })
        .catch(error => {
          console.error(error);
        });
      
      },
      toggleCategory(categoryId) {
      if (this.isSelected(categoryId)) {
        // If category is already selected, remove it from the selectedCategories array
        this.selectedCategories = this.selectedCategories.filter((id) => id !== categoryId);

      } else {
        // If category is not selected, add it to the selectedCategories array
        this.selectedCategories.push(categoryId);
      }
    },
    isSelected(categoryId) {
      return this.selectedCategories.includes(categoryId);
    },
    }

}
</script>

<style>
.selected{
  background-color: lightblue;
}
</style>