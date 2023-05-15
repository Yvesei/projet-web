import { createRouter, createWebHistory } from "vue-router"




import Articles from './pages/Articles.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import SignUp from './pages/SignUp.vue'
import Post from './pages/Post.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'





const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path : '/articles', component : Articles},
    {path : '/login', component: Login},
    {path : '/signup',component: SignUp},
    {path : '/post', component: Post},
    {path : '/contact', component : Contact}

  ]
  

  const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router