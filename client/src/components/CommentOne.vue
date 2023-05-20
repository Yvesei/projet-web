<template>



    <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie Green">{{comment.email}}</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                        title="March 12th, 2022">Mar. 12, 2022</time></p>
            </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{{comment.contenu}}</p>
    </article>

</template>
<script>
import axios from 'axios'


export default{
    name:'CommentOne',
    props: {
      comment: {
      type: Object, // Specify the type of the prop
      required: true // Set to true if the prop is required
    }
    },
}

</script>