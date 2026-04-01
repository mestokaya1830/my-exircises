<template>
  <div>
    <UsersMobilComponent  v-if="$store.state.auth.mobil" />
    <UsersComponent  v-else />
  </div>
</template>

<script>
  import UsersComponent from "@/components/users-component.vue";
  import UsersMobilComponent from "@/components/users-mobil-component.vue";

  export default {
    name:'Users',
    components:{
      UsersComponent,
      UsersMobilComponent
    }
  }
</script>