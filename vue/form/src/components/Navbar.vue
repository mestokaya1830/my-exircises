<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <router-link to="/form" class="links">Form</router-link>
      <router-link to="/checkbox" class="links">Checkbox</router-link>
      <router-link to="/radio" class="links">Radio</router-link>
      <router-link to="/select" class="links">Select</router-link>
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
