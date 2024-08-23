<template>
  <!-- new taskform -->
   <div class="">
    <TaskForm/>
   </div>
  <div class="flex gap-2 mb-4 justify-center mt-12">
    <button @click="filter = 'all'" class="p-2 px-4 border border-slate-900 rounded-xl">All tasks</button>
    <button @click="filter = 'favs'" class="p-2 px-4  border-slate-900 border rounded-xl">Fav tasks</button>

  </div>
  <!-- <hr> -->
  <!-- task list -->
  <div class="transition-all text-center mt-2" v-if="filter === 'all'">
    <p class="text-center text-xl">All tasks</p>
    <p class=""> You have {{TaskStore.totalCount}}</p>
    <div v-for="task in TaskStore.tasks" class="">
      <TaskDetails :task="task" />
    </div>
  </div>
  <!--  -->
  <div class="text-center mt-2" v-if="filter === 'favs'">
    <p class="text-xl">Favourites</p>
    <p class=""> You have {{TaskStore.favCount}}</p>

    <div v-for="task in TaskStore.favs" class="">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';

import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'
import TaskForm from './components/TaskForm.vue';
export default {
  components: {
    TaskDetails,
    TaskForm

  },
  setup() {
    const TaskStore = useTaskStore()

    const filter = ref('all')
    return { TaskStore, filter }
  }
}
</script>