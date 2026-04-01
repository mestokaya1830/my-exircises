<script setup>
  import { RouterView } from 'vue-router'
  import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div  id="tem">
    <NavbarComponent />
    <RouterView  class="main"/>
  </div>

</template>

<script>
export default {
  name:'AppVue',
  data(){
    return{
      users: [
        {id:1, name:'Mesto'},
        {id:2, name:'Derman'},
        {id:3, name:'Alem'}
      ]
    }
  },
  provide(){
    return {
      message: 'Hello I am provide',
      users: this.users
    }
  }
}
</script>
<style scoped>
.main{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

</style>
