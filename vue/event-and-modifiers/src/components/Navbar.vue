<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/clickevents" class="links">Click Events</router-link>
      <router-link to="/keyevents" class="links">Key Events</router-link>
      <router-link to="/mouseevents" class="links">Mouse Events</router-link>
      <router-link to="/eventmodifiers" class="links">Event Modifiers</router-link>
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
