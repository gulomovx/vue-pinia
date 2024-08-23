<template>
      <div>
          <form @submit.prevent="handleSubmit" action="">
            <input
             type="text"
             placeholder="I need  "
             v-model="newTask"
             >
             <button>add</button>
          </form>
          <h1>sasd</h1>
      </div>
</template>

<script setup>
import { ref } from 'vue';
import {useTaskStore} from '../stores/TaskStore'
      
         const taskStore=useTaskStore()
         const newTask =ref('')
         const handleSubmit=()=>{
            if(newTask.value.length>0){
                 taskStore.addTask({
                  title:newTask.value,
                  isFav:false,
                  id:Math.floor(Math.random()*10000)
                 })
                 newTask.value=''
            }
            return {handleSubmit, newTask}

         }  
</script>