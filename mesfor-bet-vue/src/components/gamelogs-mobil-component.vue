<template>
  <div class="admin-con">
    <div class="flex-col-1 p5">
      <div v-if="role == 'Admin'">
        <div class="fac">
          <input v-model="dateStart" type="date" class="search-2 mtb5 m3">
          <input v-model="dateFinish" type="date" class="search-2 m3" @change="dateFilter()">
        </div>
      </div>
    </div>
    <div>
      <header class="bet-menu bet-menu-mobil">
        <span class ="cl-y">({{ gamelog.length }})</span>
        <select  v-model="userBox" v-if="role == 'Admin'" class="select-1 mrl10" @change="getGameLogs()">
          <option disabled>Üyeler</option>
          <option v-for="list in userList" :value="list.user" :key="list.id">{{ list.user }}</option>
        </select>
        <img src="@/assets/img/switch.webp" alt="" @click="isGameOpen =! isGameOpen" title="Aç Kapa" class="menu-icons cl-y cp"/>
      </header>
      <div class="bet-summary-con-mobil-admin">
        <template v-for="list in gamelog" :key="list._id">
            <details :open="isGameOpen">
              <summary :class="{ colorGreen: list.ope === 'Eklendi', colorRed: list.ope === 'Eksildi' }" class="bet-summary-admin fjsbac cp">
                <span class="badge badge-mobil">{{ list.gameid }}</span>
                <span>{{ moment(list.date).format('MM-DD') }} / {{ moment(list.date).format('H:mm:ss') }}</span>
              </summary>
              <div class="bet-list-mobil">
                <div class="bet-list-user-row">
                <span>İşlem</span>
                <span class="citems-list list-des">{{ list.des }}</span>
                </div>
                <div class="bet-list-user-row">
                  <span>Miktar</span>
                  <span>{{ (list.amount).toFixed(2) }}</span>
                </div>
                <div class="bet-list-user-row">
                  <span>Sonuç</span>
                  <span>{{ list.ope }}</span>
                </div>
                <div class="bet-list-user-row">
                  <span>Yeni Bakiye</span>
                  <span>{{ (list.creditremain).toFixed(2) }}</span>
                </div>
              </div>
            </details>
          </template>
        <PageEndComponent :length="gamelog.length" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import PageEndComponent from "@/components/page-end-component.vue";
export default {
  name: 'Gamelog',
  inject: ['moment'],
  components: {
    PageEndComponent
  },
  data() {
    return {
      gamelog: {},
      userList: {},
      userBox: 'Üyeler',
      searchBox: '',
      dateStart: this.moment().subtract(4, 'days').format('YYYY-MM-DD'),
      dateFinish: this.moment().add(1, 'days').format('YYYY-MM-DD'),
      isSort: false,
      isGameOpen:false
    }
  },
  computed: {
    role() {
      if (this.$store.state.auth) {
        return this.$store.state.auth.role
      }
    },
    getLastId() {
      return Math.min.apply(Math, this.lastId)
    }
  },
  mounted() {
    this.getUserList()
    this.getGameLogs()
  },
  methods: {
    async getUserList() {
      await axios.get('/api/admin/user-list').then((result) => {
        if(result.data.result){
          this.userList = result.data.result
        }
      })
    },
    async getGameLogs() {
      await axios.get(`/api/admin/game-logs/${this.userBox}`).then((result) => {
        if (result.data.gamelog) {
          this.gamelog = result.data.gamelog
        }
      })
    },
    async dateFilter() {
      if (!this.dateFinish) {
        this.dateFinish = this.moment().add(1, 'days').format('YYYY-MM-DD')
      }
      await axios.get(`/api/admin/game-logs-date-filter/${this.userBox}/${this.dateStart}/${this.dateFinish}`).then((result) => {
        if (result.data.datefilter) {
          this.gamelog = result.data.datefilter
        }
      })
    },
    async search() {
      if(!this.searchBox){
        this.getGameLogs()
        return false
      }
      await axios.get(`/api/admin/game-logs-search/${this.searchBox}`).then((result) => {
        if (result.data.gamelog.length > 0) {
          this.gamelog = result.data.gamelog
          this.searchBox = ''
          return false
        }
        this.gamelog = {}
        this.searchBox = ''
      })
    },
    sortList(name) {
      if (name) {
        this.gamelog.sort((a, b) => {
          if (this.isSort) {
            return a[name] > b[name] ? 1 : -1
          }
          return a[name] > b[name] ? -1 : 1
        })
        this.isSort = !this.isSort
      }
    },
  }
}
</script>