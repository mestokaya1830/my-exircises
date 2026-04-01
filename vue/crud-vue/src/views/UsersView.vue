<template>
  <div>
    <h2>{{ title }}</h2>
    <form class="new-user">
      <input type="text" placeholder="Name" v-model="newUser.name">
      <input type="text" placeholder="Lastname" v-model="newUser.lastname">
      <input type="number" placeholder="Age" v-model="newUser.age">
      <input type="button" @click="addUser()" value="Add">
    </form>
    <form class="new-user">
      <input type="text" placeholder="Name" @keyup="searchUser" v-model="searchBox">
    </form>
    <template v-for="item in users" :key="item._id">
      <li class="user-list">
        <span>{{item.name}}</span>
        <span>{{item.lastname}}</span>
        <router-link class="links" :to="`/users/${item._id}`">Details</router-link>
        <input type="button" value="Delete" class="links" @click="(deleteUser(item._id))">
      </li>
    </template>
  </div>
</template>
<script>
export default {
  name:'UsersPage',
  data () {
    return {
      title: 'Users',
      users:null,
      search: null,
      newUser:{},
      searchBox: null
    }
  },
  mounted(){
    this.getUsers()
  },
  computed:{
    searchUser(){
     let final = this.search.filter(item => item.name.includes(this.searchBox))
      if(final.length > 0){
        this.users = final
      } else {
        this.users = this.search
      }
    },
  },
  methods:{
    async getUsers(){
      const result  = await fetch('http://localhost:3000/users')
      const final = await result.json()
      this.users = final.users
      this.search = final.users
    },

    async deleteUser(id){
      const result  = await fetch('http://localhost:3000/usersdelete', {
        method: 'DELETE',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          id: id
        })
      })
      const final = await result.json()
      if(final){
        this.users = final.users
      }
    },
    async addUser(){
      const result  = await fetch('http://localhost:3000/adduser', {
        method: 'POST',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
         user: this.newUser
        })
      })
      const final = await result.json()
      if(final){
        this.users = final.users
      }
    }
  }
}
</script>
<style scoped>
.title{
  margin-bottom: 20px;
}
.user-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 400px;
  margin: 5px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}
.user-list span{
  width: 120px;
}
.user-list span:first-child{
  max-width: 30px;
}
.new-user{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 20px 0;
}
.new-user input{
  margin: 3px 0;
  min-height: 30px;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding-left: 5px;
  width: 100%;
}
</style>