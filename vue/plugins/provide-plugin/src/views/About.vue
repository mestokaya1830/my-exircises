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
  name: "AboutPAge",
  data() {
    return {
      name:'',
      title: "About",
    }
  },
  methods: {
    
  },
};
</script>