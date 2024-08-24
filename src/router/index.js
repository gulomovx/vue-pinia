import { createRouter, createWebHistory } from "vue-router";
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import App from '../App.vue'
const routes=[
      {
            path:'/',
            name:'Home',
            component:App
      },
      {
            path:'/about',
            // name:'About',
            component:About
      },
      {
            path:'/contact',
            component:Contact
      }
]

const router=createRouter({
      history:createWebHistory(),
      routes

})