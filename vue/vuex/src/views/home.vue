<template>
  <div>
    <h1>Home</h1>
    <h2>{{ $store.state.auth }}</h2>
    <div>
      <button  @click="login()">Login</button>
      <button  @click="logout()">Logout</button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
   
    methods: {
      login(){
        // this.$store.state.auth = {username:'Mesto',role:'Admin'}
        this.$store.commit('setAuth', {username:'Mesto', role:'Admin'})
      },
      logout(){
        // this.$store.state.auth = {}
        this.$store.commit('setAuth', {})
      }
    },
  }
</script>