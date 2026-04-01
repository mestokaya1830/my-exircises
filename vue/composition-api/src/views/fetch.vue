<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let users = ref(null)

//first way
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => users.value = data)

//second way
// axios.get('https://jsonplaceholder.typicode.com/users').then(result => users.value = result.data)

//third way
onMounted(async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/users')
  users.value = await result.json()
})

</script>
<template>
  <div>
    <h1>Fetch Data</h1>
    <ul>
      <li v-for="item in users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.email }}</span>
      </li>
    </ul>
  </div>
</template>
