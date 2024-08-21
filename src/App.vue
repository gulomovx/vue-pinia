<template>
  <div class="flex gap-2 justify-center mt-12">
    <button @click="filter = 'all'" class="p-2 bg-slate-200">All tasks</button>
    <button @click="filter = 'favs'" class="p-2 bg-slate-200">Fav tasks</button>

  </div>
  <!-- task list -->
  <div class="transition-all" v-if="filter === 'all'">
    <p class="text-center text-xl">All tasks</p>
    <div v-for="task in TaskStore.tasks" class="">
      <TaskDetails :task="task" />
    </div>
  </div>
  <!--  -->
  <div class="text-center mt-2" v-if="filter === 'favs'">
    <p class="text-xl">Favourites</p>
    <div v-for="task in TaskStore.favs" class="">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'
export default {
  components: {
    TaskDetails
  },
  setup() {
    const TaskStore = useTaskStore()

    const filter = ref('all')
    return { TaskStore, filter }
  }
}
</script>