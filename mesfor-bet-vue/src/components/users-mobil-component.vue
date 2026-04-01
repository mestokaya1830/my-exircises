<template>
  <div>
    <div class="admin-con">
      <header class="bet-menu bet-menu-mobil">
        <div>
          <span class="bet-menu-title">Üyeler</span>
          <span class="cl-y">({{ users.length }})</span>
        </div>
        <img src="@/assets/img/switch.webp" @click="isUserOpen =! isUserOpen" title="Aç Kapa" class="menu-icons cl-y cp"/>
        <img src="@/assets/img/all.webp" alt="" class="menu-icons cp cl-y mr10" @click="getUsers()" title="Hepsi"/>
        <div>
          <span class="bet-menu-title">Aktif Bayi </span>
          <span class="cl-y">({{ activeUsers }})</span>
        </div>
      </header>
      <div class="bet-list-header">
        <div class="bet-search">
          <input v-model="searchBox" type="text" class="search-1" placeholder="Ara..."
            @keyup.enter="search()" />
        </div>
      </div>
      <div class="bet-summary-con-mobil-admin">
        <template v-for="list in users" :key="list._id">
          <details :open="isUserOpen">
            <summary class="bet-summary-admin fac cp">
              <img src="@/assets/img/user-shield.webp"  alt = "" class="menu-icons mr10"/>
              <span>{{ list.user }}</span>
            </summary>
            <router-link class="bet-list-mobil" :to="'/admin/users/' + list.user">
              <div class="bet-list-user-row">
                <span>Admin</span>
                <span>{{ list.admin }}</span>
              </div>
              <div class="bet-list-user-row">
                <span>Role</span>
                <span>{{ list.role }}</span>
              </div>
              <div v-if = "role == 'Admin'" class="bet-list-user-row">
                <span>Bakiye</span>
                <span>{{ (list.creditremain).toFixed(2) }}</span>
              </div>
              <div v-if = "role == 'Boss' || role == 'Superadmin'" class="bet-list-user-row">
                <span>Üye Limiti</span>
                <span>{{ list.userlimit }} / {{ (list.userlimit - list.usedlimit) }}</span>
              </div>
              <div class="bet-list-user-row">
                <span>Durum</span>
                <span>{{ list.state }}</span>
              </div>
              <div  v-if="role == 'Superadmin'" class="bet-list-user-row" :class="{ paymentTimeClass: cancelTime(list.payment) > 30 }">
               <span>Ödeme</span>
               <span> {{ moment(list.payment).format('MM-DD') }}</span>
              </div>
            </router-link>
          </details>
        </template>
        <PageEndComponent :length="users.length" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import mixins from '@/mixins/index.js'
import PageEndComponent from "@/components/page-end-component.vue";
export default {
  name: 'Users',
  inject:['moment'],
  mixins:[mixins],
  components:{
    PageEndComponent
  },
  data() {
    return {
      users: {},
      activeUsers: 0,
      searchBox: '',
      adminSelect: null,
      isSort: false,
      sortName: null,
      mobilSide: false,
      isUserOpen: false
    }
  },
  mounted() {
    this.getUsers()
    this.getActiveUsers()
    if(window.matchMedia('screen and (max-width: 1280px)').matches){
      this.$route.path.includes('admin') ? this.mobilSide = true : this.mobilSide = false
    }
  },
  computed: {
    role() {
      if(this.$store.state.auth){
        return this.$store.state.auth.role
      }
    }
  },
  methods: {
    async getUsers() {
      await axios.get('/api/admin/users').then((result) => {
        if(result.data.result){
          this.users = result.data.result
        }
      })
    },
    async getActiveUsers() {
      await axios.get("/api/admin/active-users").then((result) => {
        if (result.data.result[0]) {
          this.activeUsers = result.data.result[0].count;
        }
      });
    },
    async search() {
      if(!this.searchBox){
        this.getUsers()
      } else {
        await axios.get(`/api/admin/user-search/${this.searchBox}`).then((result) => {
          if (result.data.result.length > 0) {
            this.users = result.data.result
            this.searchBox = ''
            return false
          }
          this.users = {}
          this.searchBox = ''
        })
      }
    },
    cancelTime(value) {
      let diff = Date.now() - new Date(value).getTime()
      return Math.floor((diff) / (1000 * 60 * 60 * 24))
    },
    sortList(name) {
      if (name) {
        this.loginLog.sort((a, b) => {
          if (this.isSort) {
            return a[name] > b[name] ? 1 : -1
          }
          return a[name] > b[name] ? -1 : 1
        })
        this.isSort = !this.isSort
      }
    }
   
  }
}
</script>