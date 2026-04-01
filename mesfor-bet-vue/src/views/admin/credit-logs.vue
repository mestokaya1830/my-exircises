<template>
  <div>
    <CreditlogsMobilComponent  v-if="$store.state.auth.mobil"/>
    <CreditlogsComponent v-else class="scroll"/>
  </div>
  </template>
  
  <script>
  import CreditlogsComponent from "@/components/creditlogs-component.vue";
  import CreditlogsMobilComponent from "@/components/creditlogs-mobil-component.vue";
  
  export default {
    name:'Creditlogs',
    components:{
      CreditlogsComponent,
      CreditlogsMobilComponent
    }
  }
  </script>