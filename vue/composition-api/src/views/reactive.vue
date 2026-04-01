<script setup>
  import { reactive, ref } from 'vue';
  //with ref
  // const users = ref([
  //   {id: 1, name: 'Mesto', age: 52},
  //   {id: 2, name: 'Deniz', age: 30},
  //   {id: 3, name: 'Hasan', age: 24}
  // ])
  // console.log(users.value)

  //with reactive
  const users = reactive([
    {id: 1, name: 'Mesto', age: 52},
    {id: 2, name: 'Deniz', age: 30},
    {id: 3, name: 'Hasan', age: 24}
  ])
  console.log(users)
</script>

<template>
  <div>
    <h1>Reactive</h1>
      <ul>
        <li v-for="item in users" :key="item.id">
          <span>{{ item.id }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.age }}</span>
        </li>
      </ul>
  </div>
</template>
