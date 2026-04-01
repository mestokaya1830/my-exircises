<template>
  <div>
    <NavbarMobilComponent v-if="$store.state.auth.mobil"/>
    <NavbarDesktopComponent v-else />
  </div>
</template>

<script>
  import NavbarMobilComponent from "@/components/navbar-mobil-component.vue";
  import NavbarDesktopComponent from "@/components/navbar-desktop-component.vue";

  export default {
    name:'Users',
    components:{
      NavbarMobilComponent,
      NavbarDesktopComponent
    }
  }
</script>