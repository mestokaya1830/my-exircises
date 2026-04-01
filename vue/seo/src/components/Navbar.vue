<template>
  <div>
    <nav class="navbar">
      <router-link  to="/" class="links" exact-active-class="active">Home</router-link>
      <router-link  to="/admin" class="links" exact-active-class="active">Admin</router-link>
      <router-link  to="/admin/posts" class="links" exact-active-class="active">Posts</router-link>
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
    align-items: center;
    height: 70px;
  }
  .links{
    margin: 0 15px;
    font-size: 22px;
  }
  .links{
    text-decoration: none;
  }
  .active{
    color: green;
  }
</style>
