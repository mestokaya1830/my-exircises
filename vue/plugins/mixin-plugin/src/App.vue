<template>
  <div>
    <Navbar />
    <router-view id="master-page" />
  </div>
</template>
<script>
  import Navbar from "./components/Navbar.vue";
  export default {
    name: "App",
    components:{Navbar},
    data() {
      return {
        name:''
      };
    },
    mounted(){
      
    },
    methods: {
     
    },
  };
  </script>
<style scoped>
  #master-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
