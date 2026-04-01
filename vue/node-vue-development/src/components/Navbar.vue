<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/limitsettings" class="links">Limitsettings</router-link>
      <router-link to="/creditlogs" class="links">Creditlogs</router-link>
      <router-link to="/gamelogs" class="links">Gamelogs</router-link>
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
