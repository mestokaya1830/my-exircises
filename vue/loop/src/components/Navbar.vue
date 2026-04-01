<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/loop" class="links">Loop</router-link>
      <router-link to="/loopFilter" class="links">Loop Filter</router-link>
      <router-link to="/loopIF" class="links">Loop IF</router-link>
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
