<template>
<div>
  <SoccerMobilComponent  v-if="$store.state.auth.mobil"/>
  <SoccerComponent v-else class="f" />
</div>
</template>

<script setup>
  import { defineAsyncComponent } from 'vue';
  const SoccerComponent = defineAsyncComponent(() => import("@/components/soccer-component.vue"))
  const SoccerMobilComponent = defineAsyncComponent(() => import("@/components/soccer-mobil-component.vue"))
</script>