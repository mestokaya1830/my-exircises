<template>
  <div class="navbar-mobil">
    <router-link to="/categories" class="navbar-icons">
      <img src="@/assets/img/home-navbar.webp" alt=""  class="navbar-icons">
    </router-link>
    <span v-if="adminIcon" class="navbar-icons cl-w" @click="openAdminMenu()">
      <img src="@/assets/img/admin-navbar.webp" adlt="" class="navbar-icons"/>
    </span>
    <span v-if="slipIcon && $store.state.auth.mobil" class="navbar-slip cl-w pr" @click="openSlip()" title="Kuponlar">
      <span class="navbar-slip-length">{{ $store.state.slips.length }}</span>
    </span>
    <div v-if="$route.path.includes('/admin')" @click="openChatHandel()" title="Chat" class="navbar-icons msg-info">
      <img src="@/assets/img/chat.webp" alt="" class="navbar-icons">
      <span class="msg-count" v-if="$store.state.msgcount > 0">{{ newMsg }}</span>
    </div>
    <a href="#" class="navbar-icons" @click="logout" title="Çıkış">
      <LoaderComponent v-if="isLoader"/>
      <img v-else src="@/assets/img/signout.webp" alt="" class="logout-icons cp">
    </a>
  </div>
</template>

<script>
import axios from "axios";
import { socket } from "@/socket"
import LoaderComponent from "@/components/loader-component.vue";

export default {
  name: "navbar-component",
  components: {
    LoaderComponent
  },
  data() {
    return {
      isLoader: false,
      newMsg: '',
      adminIcon: false,
      slipIcon: false,
      slipState: false
    };
  },
  mounted() {
    if(window.matchMedia('screen and (max-width: 1280px)').matches){
      this.$route.path.includes('admin') ? this.adminIcon = true : this.adminIcon = false
    }
    if(window.matchMedia('screen and (max-width: 1280px)').matches){
      this.$route.path.includes('games') ? this.slipIcon = true : this.slipIcon = false
    }
    socket.on("msgcount", () => {
      this.newMsg++
      this.$store.commit('setMsgCount', (this.$store.state.msgcount + this.newMsg))
    }); 
    this.getMsgCount()
  },
  methods: {
    async logout() {
      this.isLoader = true;
      await axios.post("/api/logout").then((result) => {
        if (result.data.code == 200) {
          this.$store.commit("setBetSlip", false);
          this.$store.commit("removeSlips", '');
          this.$store.commit("setOpenChat", false);
          this.$store.commit("setAuth", '');
          socket.disconnect();
          localStorage.clear();
          this.isLoader = false;
          this.$router.push("/");
        }
      })
    },
    async getMsgCount() {
      await axios.get("/api/chat/msg-count").then((result) => {
        if (result.data.message) {
          this.newMsg = result.data.message
          this.$store.commit('setMsgCount', result.data.message)
          this.setNotify()
          return false
        }
      })
    },
    async setNotify() {
      const showNotification = () => {
        const notification = new Notification('Bet Notification', {
          body: 'Yeni mesajiniz var',
          icon: '/icon.webp'
        });

        setTimeout(() => {
          notification.close();
        }, 10 * 1000);
        notification.addEventListener('click', () => {
          this.openChatHandel()
        });
      }
      let granted = false;
      if (Notification.permission === 'granted') {
        granted = true;
      }else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
      }
      granted ? showNotification() : showError();
    },
    openChatHandel() {
      this.$store.commit("setOpenChat", true);
      this.isNewMsg = false;
    },
    openAdminMenu() {
      this.$store.commit("setAdminMenu", true)
    },
    openSlip(){
      this.slipState = true
      this.$store.commit('setOpenSlip', this.slipState)
    }
  }
};
</script>