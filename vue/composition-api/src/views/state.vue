<script setup>
import { useStore } from 'vuex';
const store = useStore()

const changeStore = () => {
  store.commit('setAuth', 'Mustafa Kaya')
}

</script>

<template>
  <div>
    <h1>State With Vuex</h1>
    <h2>{{ store.state.auth }}</h2>

    <button @click="changeStore()">Change Store</button>
    <button @click="$router.go('/state')">Reload</button>
  </div>
</template>
