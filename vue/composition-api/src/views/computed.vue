<script setup>
  import { computed, reactive } from 'vue';
  //with reactive
  const users = reactive([
    {id: 1, name: 'Mesto', age: 52},
    {id: 2, name: 'Deniz', age: 30},
    {id: 3, name: 'Hasan', age: 24}
  ])
  console.log(users)

  const filterUsers = computed(() => {
    return users.filter(item => item.age < 50)
  })
</script>

<template>
  <div>
    <h1>Full List</h1>
      <ul>
        <li v-for="item in users" :key="item.id">
          <span>{{ item.id }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
      <h1>Computed</h1>
      <ul>
        <li v-for="item in filterUsers" :key="item.id">
          <span>{{ item.id }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
  </div>
</template>
