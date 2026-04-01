<template>
  <div>
    <div class="navbar-logo">
      <img src="~/static/img/logo.png" alt="" />
    </div>
    <Navbar id="navbar" />
    <div class="top-items top-last-item">
      <div @click="openChatHandel()" title="Chat">
        <span v-if="lastMsg" class="msg-info hasMsg"><i class="fas fa-comments">{{ lastMsg }}</i></span>
        <span v-else class="msg-info"><i class="fas fa-comments"></i></span>
      </div>
      <nuxt-link to="/welcome" class="navbar-links mobile" exact-active-class="navbar-active">
        <i class="fas fa-home navbar-icons cl-w" />
      </nuxt-link>
      <div v-if="adminIcon" class="navbar-links mobile" @click="handleAdminMenu()" exact-active-class="navbar-active">
        <i class="fas fa-user navbar-icons cl-w" />
      </div>
      <nuxt-link to="" class="navbar-logout cl-r" @click.native="logout" title="Çıkış">
        <i v-if="!isLoader" class="fas fa-sign-out-alt fa-2x" />
        <img v-if="isLoader" src="~/static/img/loader.gif" class="mt10" width="50" alt="" />
        <span v-if="errorMsg">{{ errorMsg }}</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import socket from "~/plugins/socket.io.js";
export default {
  middleware: "clientauth",
  name: "Top",
  data() {
    return {
      isLoader: false,
      errorMsg: null,
      lastMsgCount: 0,
      isNewMsg: false,
      adminIcon: false
    };
  },
  mounted() {
    this.$route.name.includes('account') ? this.adminIcon = true : this.adminIcon = false
    socket.on("msgcount", () => {
      const oldcount = this.$store.state.msgcount;
      this.lastMsgCount = oldcount + 1;
      this.$store.commit("setMsgCount", this.lastMsgCount)
    });
    this.getMsgCount()
  },
  computed: {
    lastMsg() {
      return this.$store.state.msgcount;
    },
  },
  methods: {
    async logout() {
      if (navigator.onLine === true) {
        this.errorMsg = null;
        this.isLoader = true;
        await axios.get("/api/logout").then((result) => {
          if (result.data.ok) {
            this.$store.commit("setBetSlip", false);
            this.$store.commit("removeSlips", "");
            this.isLoader = false;
            socket.disconnect();
            localStorage.clear();
            this.$router.push("/");
            setTimeout(() => {
              this.$store.commit("setAuth", null);
            }, 1000);
          }
        });
      } else {
        this.isLoader = false;
        this.errorMsg = "Baglanti Yok!";
      }
    },
    async getMsgCount() {
      if (navigator.onLine === true) {
        await axios.get("/api/home/msgcount").then((result) => {
          if (result.data.message !== "null") {
            if (this.$store.state.msgcount !== result.data.message) {
              this.$store.commit("setMsgCount", result.data.message);
              this.setNotify()
            } else {
              this.$store.commit("setMsgCount", "");
            }
          }
        });
      }
    },
    checkRole() {
      if (this.$store.state.auth) {
        if (
          this.$store.state.auth.role !== "Boss" &&
          this.$store.state.auth.role !== "Superadmin"
        ) {
          return true;
        }
      }
    },
    openChatHandel() {
      this.$store.commit("setOpenChat", true);
      this.isNewMsg = false;
    },
    handleAdminMenu() {
      this.$store.commit("setAdminMenu", true)
    },
    async setNotify() {
      const showNotification = () => {
        const notification = new Notification('Bet Notification', {
          body: 'Yeni mesajiniz var',
          icon: '/icon.png'
        });

        setTimeout(() => {
          notification.close();
        }, 10 * 1000);
        notification.addEventListener('click', () => {
          this.openChatHandel()
        });
      }

      const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notifications';
      }

      let granted = false;

      if (Notification.permission === 'granted') {
        granted = true;
      } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
      }

      granted ? showNotification() : showError();

    }
  }
};
</script>
