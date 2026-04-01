<template>
  <div>
    <nav>
      <RouterLink to="/" class="links">Home</RouterLink>
      <RouterLink to="/about" class="links">About</RouterLink>
      <RouterLink to="/contact" class="links">Contact</RouterLink>
    </nav>
  </div>
</template>

<script>
 export default {
  name:'',
  data () {
    return {
      
    }
  }
 }
</script>

<style scoped>
  nav{
    display: flex;
  }
  .links{
    margin: 10px;
  }
  .links{
    text-decoration: none;
  }
  .active{
    color: green;
  }
</style>
