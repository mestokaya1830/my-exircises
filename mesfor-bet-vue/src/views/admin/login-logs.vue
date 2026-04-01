<template>
  <div>
    <LoginlogsMobilComponent  v-if="$store.state.auth.mobil"/>
    <LoginlogsComponent v-else class="scroll"/>
  </div>
  </template>
  
  <script>
  import LoginlogsComponent from "@/components/loginlogs-component.vue";
  import LoginlogsMobilComponent from "@/components/loginlogs-mobil-component.vue";
  
  export default {
    name:'Loginlogs',
    components:{
      LoginlogsComponent,
      LoginlogsMobilComponent
    }
  }
  </script>