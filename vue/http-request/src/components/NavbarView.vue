<template>
  <div>
   <nav>
    <RouterLink to="/" class="links">Home</RouterLink>
    <RouterLink to="/axios" class="links">Axios</RouterLink>
    <RouterLink to="/fetch" class="links">Fetch</RouterLink>
    <RouterLink to="/local" class="links">Local</RouterLink>
   </nav>
  </div>
</template>

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
