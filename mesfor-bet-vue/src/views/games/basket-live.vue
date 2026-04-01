<template>
  <div>
    <BasketLiveMobilComponent  v-if="$store.state.auth.mobil"/>
    <BasketLiveComponent v-else class="f"/>
  </div>
  </template>
  
<script setup>
  import { defineAsyncComponent } from 'vue';
  const BasketLiveMobilComponent = defineAsyncComponent(() => import("@/components/basket-live-mobil-component.vue"))
  const BasketLiveComponent = defineAsyncComponent(() => import("@/components/basket-live-component.vue"))
</script>