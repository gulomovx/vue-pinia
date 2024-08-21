import { defineStore } from "pinia";


export const useTaskStore=defineStore('taskStore',{
      state:()=>({
            tasks:[
                  {id:1, title:'design website', isFav:false},
                  {id:2, title:'solve algorithm', isFav:true},
            ],
            name:'Web'
      }),
      getters:{
            favs(){
                  return this.tasks.filter(t=>t.isFav)
            }
      }
})