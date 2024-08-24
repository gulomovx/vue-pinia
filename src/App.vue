<template>
  <Navbar/>
  <main class="min-h-screen text-center mt-4">
    <RouterView/>

  </main>
    <Footer/>
</template>

<script setup>
// import { createRouter, createWebHistory } from 'vue-router';
// import './style.css'
// import { ref } from 'vue';
// import TaskDetails from './components/TaskDetails.vue'
// import { useTaskStore } from './stores/TaskStore'
// import TaskForm from './components/TaskForm.vue';
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue'
components:{
  Navbar
}
// export default {
//   components: {
//     TaskDetails,
//     TaskForm

//   },
//   setup() {
//     const TaskStore = useTaskStore()

//     const filter = ref('all')
//     return { TaskStore, filter }
//   }
// }
</script>