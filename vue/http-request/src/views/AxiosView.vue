<template>
  <div>
    <h2>{{ title }}</h2>
    <template v-for="item in users" :key="item.id">
      <li>
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AxiosPage',
  data() {
    return {
      title: 'Axios',
      users: null
    }
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      await axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
        this.users = result.data
      })
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}

li span {
  margin: 5px 10px;
}
</style>