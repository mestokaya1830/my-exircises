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
export default {
  name:'FetchPage',
  data(){
    return{
      title: 'Fetch',
      users:null
    }
  },
  
  mounted(){
    this.getUsers()
  },
  methods:{
    async getUsers(){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      this.users = await result.json()
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
li span{
  margin: 5px 10px;
}
</style>