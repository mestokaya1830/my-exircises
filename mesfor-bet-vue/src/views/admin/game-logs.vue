<template>
  <div>
    <GamelogsMobilComponent  v-if="$store.state.auth.mobil"/>
    <GamelogsComponent v-else class="scroll"/>
  </div>
  </template>
  
  <script>
  import GamelogsComponent from "@/components/gamelogs-component.vue";
  import GamelogsMobilComponent from "@/components/gamelogs-mobil-component.vue";
  
  export default {
    name:'Gamelogs',
    components:{
      GamelogsComponent,
      GamelogsMobilComponent
    }
  }
  </script>