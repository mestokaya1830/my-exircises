<template>
  <div>
    <BasketMobilComponent  v-if="$store.state.auth.mobil"/>
    <BasketComponent v-else class="f" />
  </div>
  </template>
  
<script setup>
  import { defineAsyncComponent } from 'vue';
  const BasketMobilComponent = defineAsyncComponent(() => import("@/components/basket-mobil-component.vue"))
  const BasketComponent = defineAsyncComponent(() => import("@/components/basket-component.vue"))
</script>