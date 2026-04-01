<template>
  <div class="admin-page">
      <form class="admin-form" @submit.prevent="login">
        <header class="admin-header">
          <h3>Giris Yapiniz</h3>
        </header>
        <div class="login-center">
          <div class="login-inputs-con">
            <i class="fas fa-user fa-lg login-icons" />
            <input type="text" v-model="user" @focus="removeError()" class="login-inputs" placeholder="Üye Adı" required oninvalid="this.setCustomValidity('Üye alanı boş bırakılamaz!')" oninput="setCustomValidity('')" tabindex='1' autofocus>
          </div>
          <div class="login-inputs-con">
            <i class="fas fa-unlock fa-lg login-icons" />
            <input type="password" v-model="pass" @focus="removeError()" class="login-inputs" placeholder="Şifre" required oninvalid="this.setCustomValidity('Şifre alanı boş bırakılamaz!')" oninput="setCustomValidity('')" tabindex='2'>
          </div>
        </div>
        <footer class="admin-footer">
          <input type="submit" v-if="isBtnLogin" value="Giriş" class="alert btn-alert cl-d">
          <alert v-if="alert" :message="alert" class="alert"/>
          <error v-if="error" :message="error" class="error"/>
        </footer>
      </form>
  </div>
</template>
<script>
import axios from 'axios'
import alert from '../components/alert.vue'
import error from '../components/error.vue'
export default {
  name:'admin',
  components:{
    error,
    alert
  },
  data() {
    return {
      user: null,
      pass: null,
      alert: null,
      error: null,
      isBtnLogin: true,
      isLoader: false
    }
  },
  mounted () {
    if (this.$store.state.auth){
      this.$router.push('http://localhost:3000/users')
    }
  },
  methods: {
    async login () {
      if (navigator.onLine === true){
        this.isLoader = true
        await axios.post('http://localhost:3000/login', { user: this.user, pass: this.pass }).then((result) => {
          if (result.data.code === 200) {
            this.$store.commit('setAuth', result.data.auth)
            this.error = ''
            this.isBtnLogin = false
            this.alert = 'Giris Basarili...'
            this.isLoader = false
            this.$router.push('/users')
          } else {
            this.isLoader = false
            this.isBtnLogin = false
            this.error = 'Gecersiz Kullanici!'
          }
        })
      }else {
        this.isBtnLogin = false
        this.error = 'Baglanti Yok!'
      }
    },
    removeError () {
      this.error = ''
      this.isBtnLogin = true
    },
    
  }
}
</script>