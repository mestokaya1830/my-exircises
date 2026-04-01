<template>
  <div v-if="checkRole" class="pages">
    <header class="title-2">
      <div>
        <span class="account-page-title">Üye Ekle</span>
      </div>
    </header>
    <div class="account-con">
      <i class="fas fa-user-plus fa-4x cl-g big-icon"/>
      <form class="user-id-section" @submit.prevent="register">
        <input type="text" v-model="setUser.user" class="input-full"  @focus="removeError()" maxlength = "50" required pattern="^[A-Za-z-0-9].{3,50}" oninvalid="this.setCustomValidity('Üye alanı en az 4 karekter ve ilk karekter Harf yada Sayı olabilir!')" oninput="setCustomValidity('')" placeholder="Ad">
        <input type="text" v-model="setUser.nick" class="input-full" @focus="removeError()" maxlength = "50" required pattern="^[A-Za-z-0-9].{3,50}" oninvalid="this.setCustomValidity('Nick alanı en az 4 karekter ve ilk karekter Harf yada Sayı olabilir!')" oninput="setCustomValidity('')" placeholder="Kod Ad">
        <input type="text" v-model="setUser.pass" class="input-full" maxlength = "50" required pattern=".{4,50}" oninvalid="this.setCustomValidity('Şifre en az 4 karekter olabilir!')" oninput="setCustomValidity('')" placeholder="Şifre">
        <div v-if="checkAdmin || checkSubadmin">
          <input type="number" v-model="setUser.credit" class="input-full" min="50" required oninvalid="this.setCustomValidity('Minumum Kredi Tutarı 50 Tl olabilir!')" oninput="setCustomValidity('')" placeholder="Bakiye">
        </div>
        <section v-if="!checkAdmin && !checkSubadmin">
          <span class="account-text">Limit</span>
          <select v-model="setUser.userlimit" class="input-full" required oninvalid="this.setCustomValidity('Limit alanı boş bırakılamaz!')" oninput="setCustomValidity('')">
            <option value="5" selected>5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </section>
        <div v-if="checkAdmin" class="sub-user">
          <section>
            <input v-model="setUser.customer" type="checkbox" class="check-inp">
            <span class="customer-text">Gold Bayi</span>
          </section>
          <section v-if="setUser.customer">
            <span class="account-text">Limit</span>
            <select v-model="setUser.userlimit" class="input-full" required oninvalid="this.setCustomValidity('Limit alanı boş bırakılamaz!')" oninput="setCustomValidity('')">
              <option value="5" selected>5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </section>
        </div>
        <footer class="form-footer register">
          <button v-if="isBtnReg && !isLoader" class="btn-set bg-g">Ekle</button>
          <img src="~/static/img/loader.gif" alt="" v-if="isLoader" class="welcome-loader">
          <alert v-if="alert" :message="alert" class="alert"/>
          <error v-if="error" :message="error" class="error"/>
        </footer>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      setUser: {
        user: null,
        nick: null,
        pass: null,
        credit: '',
        role: this.$store.state.auth.role,
        userlimit: 0,
        usedlimit: 0,
        admin: this.$store.state.auth.user,
        customer:false
      },
      isBtnReg: true,
      alert: null,
      error: null,
      isLoader: false
    }
  },
  mounted(){
    
  },
  computed: {
    checkRole(){
      if (this.$store.state.auth.role !== 'Member' && this.$store.state.auth.role !== 'Submember') {
        return true
      }
    },
    checkAdmin () {
      if (this.$store.state.auth.role === 'Admin') {
        return true
      }
    },
    checkSubadmin () {
      if (this.$store.state.auth.role === 'Subadmin') {
        return true
      }
    },
  },
  methods: {
    async register () {
        if (this.setUser.credit === '') {
          this.setUser.credit = 0
        }
        this.isLoader = true
        if (this.$store.state.auth.role === 'Subadmin' && this.setUser.credit > this.$store.state.betinfo.creditremain) {
          this.error = 'Yetersiz Bakiye!'
          this.isBtnReg = false
          this.isLoader = false
          setTimeout(() => {
            this.error = null
            this.isBtnReg = true
          }, 3000)
        } else {
          await axios.post('/api/home/account/register', this.setUser).then((result) => {
            if (result.data.code === 200) {
              this.isBtnReg = false
              this.alert = result.data.message
              this.isLoader = false
              setTimeout(() => {
                this.$router.push('/home/account/users')
                this.betInfo()
              }, 1000)
            } else {
              this.error = result.data.message
              this.isLoader = false
              this.isBtnReg = false
              setTimeout(() => {
                this.error = null
                this.isBtnReg = true
              }, 1500)
            }
          })
        }
    },
    async betInfo() {
      const credit = await axios.post('/api/home/account/creditinfo',{userbox:'Üyeler'})
      const active = await axios.post('/api/home/account/activeinfo',{userbox:'Üyeler'})
      const total = await axios.post('/api/home/account/totalinfo',{userbox:'Üyeler'})
      const won = await axios.post('/api/home/account/woninfo',{userbox:'Üyeler'})
      Promise.all([credit, active, total, won]).then(result => {
        let final = {... result[0].data.creditinfo, ...result[1].data.activeinfo, ...result[2].data.totalinfo, ...result[3].data.woninfo}
        this.$store.commit('setBetInfo',final)
      })
    },
    removeError () {
      this.error = null
      this.isBtnReg = true
    }
  }
}
</script>
