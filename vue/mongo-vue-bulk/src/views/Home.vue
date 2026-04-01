<template>
  <div class="container">
    <h2>Main Page</h2>
    <div class="newuser">
      <input type="text" v-model="newUser.name" class="inputs" placeholder="Name">
      <input type="text" v-model="newUser.lastname" class="inputs" placeholder="Lastname">
      <input type="text" v-model="newUser.age" class="inputs" placeholder="Age">
      <button @click="addNewUser()" class="buttons1">Add New User</button>
      <button @click="saveUsers()" class="buttons1">Save Users</button>
    </div>
    <ul>
      <li v-for="item in users" :key="item.id">
        <span>{{item.name}}</span>
        <span>{{item.lastname}}</span>
        <span>{{item.age}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'index',
  data () {
    return {
      users:{},
      newUser: {
        name:null,
        lastname:null,
        age:null
      },
      usersArray:[]
    }
  },
  mounted() {
    this.getUsers()
  },
  methods:{
    async getUsers(){
      await axios.get('http://localhost:3000').then(result =>{
        this.users = result.data
      })
    },
    async addNewUser(){
      this.usersArray.push(this.newUser)
      this.newUser = {}
    },
    async saveUsers(){
      alert('cdc')
      await axios.post('http://localhost:3000/newuser',{newuser:this.usersArray}).then(result =>{
        this.usersArray = []
        if (result.data === 200) {
          this.getUsers()
        }
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.newuser{
  width: 200px;
  padding: 10px;
  border:1px solid #ccc;
  border-radius: 4px;
  margin: 20px auto;
}
.inputs{
  padding: 3px;
  border-radius: 3px;
  margin: 5px 0;
}
.buttons1{
  width: 100%;
  margin-top: 10px;
}
ul{
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 250px;
  padding: 10px;
  list-style: none;
  border:1px solid #ccc;
  border-radius: 4px;
  margin: 20px auto;
  overflow-x: auto;
}
ul > li{
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
ul > li > span{
  width: 50%;
  text-align: left;
}
.buttons2{
  width: 70px;
  height: 24px;
  margin: 0 5px;
}
.edit{
  background-color: darkkhaki;
}
.delete{
  background-color: firebrick;
  color: #fff;
}
</style>
