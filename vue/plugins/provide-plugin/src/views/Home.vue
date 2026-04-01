<script setup>
  import { inject } from 'vue'//inject ust be in setup script
  const providePlugin = inject('providePlugin')
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="button" @click="providePlugin" value="Logout">
  </div>
</template>

<script>
export default {
  name:'Internal Plugin',
  data () {
    return {
      title:'Internal Plugin'
    }
  }
}
</script>
<style>
p{
  margin: 10px 0;
}
</style>