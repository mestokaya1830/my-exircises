<script setup>
  import { ref } from 'vue';
  const username = ref('')
  const password = ref('')
  
  const getForm = () => {
    console.log(username.value, password.value)
  }
</script>

<template>
  <div>
    <h1>Form</h1>
    <h4>{{ username }} {{ password }}</h4>
    <div>
      <input type="text" v-model="username" placeholder="Username">
      <input type="text" v-model="password" placeholder="Password">
      <input type="button" @click="getForm()" value="Get Form">
    </div>
  </div>
</template>
