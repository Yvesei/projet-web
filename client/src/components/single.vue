<template>
    <router-link class="bg-white" :to="`/Post/${article.id}`">
        <div>
          <div class=" transform transition duration-500 ">
            <div>
              <img class="w-full" :src="`${article.image}`" />
              <div class=" py-2">
                <div class="yellow-flag mr-2" v-for="categorie in article.categories" v-bind:key="categorie.id">
						      {{categorie.nom}}	
        				</div>
                <h1 class="uppercase text-base  font-bold">{{article.titre}}</h1>
                <button v-if="isMyArticle" @click="deleteArticle(article.id)" class="bg-red-500 text-white px-4 py-2 mt-4">delete</button>

              </div>
            </div>
          </div>
        </div>
    </router-link>
</template>



<script>
import axios from 'axios';
export default {
    name:'single',
    props: {
      article: {
      type: Object, // Specify the type of the prop
      required: true // Set to true if the prop is required
    },   
    },
    methods: {
    deleteArticle(articleId) {
      axios
        .delete(`articles/${articleId}`)
        .then(() => {
          // Emit the deleteArticle event to the parent component
          this.$emit("deleteArticle");
        })
        .catch((error) => {
          console.error(error);
        });
    },

  },
    
  
}

</script>

<style>
.yellow-flag{
  background: #fcaf17;
    font-weight: 500;
    text-transform: uppercase;
    padding: 4px 6px;
    font-size: 11px;
    line-height: 120%;
    font-family: 'Oswald',sans-serif;
    display: inline-block;
    height: 21px;
}
</style>