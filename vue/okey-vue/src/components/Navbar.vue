<template>
  <div>
    <header class="header">
      <div class="header-left">
        <span class="logo"><img src="../assets/img/logo.jpg" class="logo-img"></span>
        <h2 class="title">Okey 101 Bedava Çip</h2>
      </div>
      <router-link to="/login" class="header-right">
        <h3>Admin</h3>
      </router-link>
    </header>
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
