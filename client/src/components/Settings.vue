<template>
      <!-- component -->
<section class="bg-white dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
                

                

                <form @submit.prevent class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                        <input v-model="username" type="text" placeholder="John" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    
                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input v-model="email"  placeholder="johnsnow@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <input v-model="password" type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                        <input v-model="confirmPass" type="password" placeholder="Enter your password" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <button @click="handleSubmit()"
                        class="bg-blue-500 px-5 py-3 text-base mb-3 font-medium text-white hover:bg-blue-600 active:bg-blue-700 flex items-center justify-between w-full px-6 py-3 tracking-wide capitalize transition-colors duration-300 transform bg-blue-500 rounded-md ">
                        <span>Sign Up </span>

                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Settings',
  data(){
      return {
        username : '',
        email : '',
        password : '',
        confirmPass : ''
      }
    },
    methods: {
      async handleSubmit(){
        if(this.password !== this.confirmPass){
          alert('wrong pass')
          return;
        }
        const response = await axios.patch('users/', 
            {
            id : localStorage.id,
            name : this.username,
            email : this.email,
            password : this.password
          }
        );
        this.$router.push('/');
      }
    }
};
</script>
