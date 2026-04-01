<template>
  <div class="userlist-page">
    <table>
      <thead>Mevcut Kullanicilar</thead>
      <tr v-for="(item, index) in users[0]" :key="item.id">
        <td class="td1">{{item.email}}</td>
        <td class="td2">{{item.pass}}</td>
        <td class="trash"><i class="fas fa-trash" @click="deleteUser(item.id)"/></td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Users',
  data () {
    return {
      users: {},
      error: ''
    }
  },
  mounted () {
    // if (!this.$store.state.auth){
    //   this.$router.push('/login')
    // } else {
      // }
        this.getUsers()
  },
  methods: {
    async getUsers () {
      await axios.get('http://localhost:3000/users').then(result => {
        if(result.data.code == 200) {
         this.users = result.data.users
        } else {
          this.error = 'Sonuc yok!'
        }
      }).catch(err => {console.log(err)}) 
    },
    async logout() {
      if (navigator.onLine === true){
        await axios.get('http://localhost:3000/logout').then(result => {
          if (result.data.ok) {
            this.$router.push('/login')
            this.$store.commit('setAuth', null)
          }
        }).catch(err => {console.log(err)})
      }else {
        this.errorMsg = 'Baglanti Yok!'
      }
    },
    async deleteUser (id) {
      await axios.post('http://localhost:3000/deleteuser/',{id:id}).then((result) => {
        if (result.data.code === 200) {
          setTimeout(() =>{
             this.userList = result.data.users
          }, 500)
        }
      }).catch(err => {console.log(err)})
    },
  }
}
</script>
