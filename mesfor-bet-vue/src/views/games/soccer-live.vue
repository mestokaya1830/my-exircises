<template>
  <div>
    <SoccerLiveMobilComponent  v-if="$store.state.auth.mobil"/>
    <SoccerLiveComponent  v-else class="f"/>
  </div>
  </template>
  
<script setup>
  import { defineAsyncComponent } from 'vue';
  const SoccerLiveMobilComponent = defineAsyncComponent(() => import("@/components/soccer-live-mobil-component.vue"))
  const SoccerLiveComponent = defineAsyncComponent(() => import("@/components/soccer-live-component.vue"))
</script>