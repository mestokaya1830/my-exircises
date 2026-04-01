<template>
  <div class="admin-con">
    <div>
      <div class="flex-col-1 p5">
        <div class="fac">
          <input v-model="dateStart" type="date" class="search-2 mtb5 m3">
          <input v-model="dateFinish" type="date" class="search-2 m3" @change="dateFilter()">
        </div>
      </div>
    </div>
    <header class="bet-menu bet-menu-mobil">
      <span class ="cl-y">({{ loginLog.length }})</span>
      <div v-if="role == 'Member'">ÜYE ADI</div>
      <select v-else v-model="userBox" class="select-1 mrl10" @change="getLoginLogs()">
        <option disabled selected>Üyeler</option>
        <option value="Sahip">Sahip</option>
        <option v-for="list in userList" :value="list.user" :key="list.id">{{ list.user }}</option>
      </select>
      <img src="@/assets/img/switch.webp" alt="" @click="isLoginOpen =! isLoginOpen" title="Aç Kapa" class="menu-icons cl-y cp"/>
      </header>
    <div class="bet-summary-con-mobil-admin">
      <template v-for="(list, index) in loginLog" :key="list._id">
        <details :open="isLoginOpen">
          <summary :class="list.proccess" class="bet-summary-admin fjsbac cp">
            <div class="input-box-mobil-con">
              <div>{{ moment(list.date).format('MM-DD') }} / {{ moment(list.date).format('H:mm:ss') }}</div>
            </div>
            <span>{{ list.proccess }}</span>
          </summary>
          <div class="bet-list-mobil">
            <div class="bet-list-user-row">
              <span>Sahip</span>
              <span>{{ list.user }}</span>
            </div>
            <div class="bet-list-user-row">
              <span>Ip</span>
              <span class="ip-field">{{ list.ip }}</span>
            </div>
          </div>
        </details>
      </template>
      <PageEndComponent :length="loginLog.length" />
    </div>
  </div>
</template>
<script>
import axios from "axios"
import PageEndComponent from "@/components/page-end-component.vue";
export default {
  name: 'Loginlog',
  inject:['moment'],
  components:{
    PageEndComponent
  },
  data () {
    return {
      loginLog: {},
      userList: {},
      userBox: 'Üyeler',
      dateStart: this.moment().subtract(4,'days').format('YYYY-MM-DD'),
      dateFinish: this.moment().add(1,'days').format('YYYY-MM-DD'),
      isSort: false,
      isLoginOpen:false
    }
  },
  mounted () {
    this.getUserList()
    this.getLoginLogs()
  },
  computed: {
    role () {
      if(this.$store.state.auth){
        return this.$store.state.auth.role
      }
    }
  },
  methods: {
    async getUserList () {
      await axios.get('/api/admin/user-list').then((result) => {
        if(result.data.result){
          this.userList = result.data.result
        }
      })
    },
    async getLoginLogs () {
      await axios.get(`/api/admin/login-logs/${this.userBox}`).then((result) => {
        if (result.data.loginlog) {
          this.loginLog = result.data.loginlog
        }
      })
    },
    async dateFilter () {
      if (!this.dateFinish) {
       this.dateFinish = this.moment().add(1,'days').format('YYYY-MM-DD')
      }
      await axios.get(`/api/admin/login-logs/date-filter/${this.userBox}/${this.dateStart}/${this.dateFinish}`).then((result) => {
        if (result.data.datefilter.length > 0) {
          this.loginLog = result.data.datefilter
          return false
        }
        this.loginLog = result.data.datefilter
      })
    },
    resetFilter () {
      this.loginLog = {}
      this.getLoginLogs()
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
