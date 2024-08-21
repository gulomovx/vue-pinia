<template>
      <div class="flex justify-between mt-2 max-w-[700px] mx-auto p-4 bg-slate-200">
        <h3 class="text-[20px] font-semibold">{{ task.title }}</h3>
        <div class="icons text-red-600 flex gap-4">
            <i class="material-icons cursor-pointer">delete</i>
            <i class="material-icons cursor-pointer">favorite</i>
        </div>

      </div>
</template>

<script>
      export default {
           props:['task'] 
      }
</script>