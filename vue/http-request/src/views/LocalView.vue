<template>
  <div>
    <h2>{{ title }}</h2>
    <template v-for="item in users" :key="item.index">
      <li>
        <span>{{ item.index }}</span>
        <span>{{ item.name }}</span>
      </li>
    </template>
  </div>
</template>

<script>
import Persons from '../assets/persons.json'
export default {
  name:'LocalPage',
  data(){
    return{
      title: 'Local',
      users:null
    }
  },
  mounted(){
    this.getUsers()
  },
  methods:{
    async getUsers(){
      this.users = Persons
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
