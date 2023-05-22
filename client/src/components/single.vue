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
                <h1 class="uppercase text-xl font-gray-700 font-bold">{{article.titre}}</h1>
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
    }
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