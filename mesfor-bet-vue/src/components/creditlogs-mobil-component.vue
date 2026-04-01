<template>
  <div class="admin-con">
    <div class="flex-col-1 p5">
      <div v-if="role == 'Member'">ÜYE ADI</div>
      <div v-else>
        <div class="fac">
          <input v-model="dateStart" type="date" class="search-2 mtb5 m3">
          <input v-model="dateFinish" type="date" class="search-2 m3" @change="dateFilter()">
        </div>
      </div>
     </div>
    <div>
      <header class="bet-menu bet-menu-mobil">
        <span class ="cl-y">({{ creditLog.length }})</span>
        <select  v-model="userBox" class="select-1 mrl10" @change="getCreditLogs()">
          <option disabled>Üyeler</option>
          <option v-for="list in userList" :value="list.user" :key="list.id">{{ list.user }}</option>
        </select>
        <img src="@/assets/img/switch.webp" alt="" @click="isCreditOpen =! isCreditOpen" title="Aç Kapa" class="menu-icons cl-y cp"/>
      </header>
    <div class="bet-summary-con-mobil-admin">
      <template v-for="(list, index) in creditLog" :key="list._id">
        <details :open="isCreditOpen">
          <summary :class="{colorGreen: list.ope == 'Eklendi', colorRed: list.ope == 'Eksildi'}" class="bet-summary-admin fjsbac cp">
            <span>{{ moment(list.date).format('MM-DD') }} / {{ moment(list.date).format('H:mm:ss') }}</span>
            <span>{{ (list.amount).toFixed(2) }}</span>
            <span>{{ list.ope }}</span>
          </summary>
          <div class="bet-list-mobil">
            <div class="bet-list-user-row">
              <span>İşlem</span>
              <span>{{ list.des }}</span>
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
      <PageEndComponent :length="creditLog.length" />
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
import PageEndComponent from "@/components/page-end-component.vue";
export default {
 name: 'Creditlog',
 inject:['moment'],
 components:{
   PageEndComponent
 },
 data () {
   return {
     creditLog: {},
     userList: {},
     userBox: 'Üyeler',
     dateStart: this.moment().subtract(4,'days').format('YYYY-MM-DD'),
     dateFinish: this.moment().add(1,'days').format('YYYY-MM-DD'),
     isSort: false,
     isCreditOpen: false
   }
 },
 mounted () {
   this.getUserList()
   this.getCreditLogs()
   if(window.matchMedia('screen and (max-width: 1280px)').matches){
     this.$route.path.includes('admin') ? this.mobilSide = true : this.mobilSide = false
   }
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
   async getCreditLogs () {
     await axios.get(`/api/admin/credit-logs/${this.userBox}`).then((result) => {
       if (result.data.creditlog) {
         this.creditLog = result.data.creditlog
       }
     })
   },
   async dateFilter () {
     if (!this.dateFinish) {
      this.dateFinish = this.moment().add(1,'days').format('YYYY-MM-DD')
     }
     await axios.get(`/api/admin/credit-logs/date-filter/${this.userBox}/${this.dateStart}/${this.dateFinish}`).then((result) => {
       if (result.data.datefilter.length > 0) {
         this.creditLog = result.data.datefilter
         return false
       }
       this.creditLog = result.data.datefilter
     })
   },
   resetFilter () {
     this.creditLog = {}
     this.getCreditLogs()
   },
   sortList(name) {
     if (name) {
       this.creditLog.sort((a, b) => {
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
