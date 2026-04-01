<template>
  <div class="pages">
    <div class="account-center">
      <adminmenu id="admin-menu" />
      <adminmenumobile id="admin-menu-mobile" v-if="$store.state.adminmenu" />
      <aside id="account-router">
        <nuxt /> 
      </aside>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Account'
  }
</script>