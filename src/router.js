import { createRouter, createWebHistory } from "vue-router"




import About from './pages/About.vue'
import Articles from './pages/Articles.vue'
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'
import SignUp from './pages/SignUp.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path : '/articles', component : Articles},
    {path : '/login', component: Login},
    {path : '/signup',component: SignUp}
  ]
  

  const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

  export default router