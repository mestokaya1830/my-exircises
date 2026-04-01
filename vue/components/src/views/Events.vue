<template>
  <div>
    <h2>Events</h2>
    <button @click="openPopup()">Open Popup</button>
    <Popup v-if="open"  message="Parent Message" @closePopup="closePopup"/>
  </div>
</template>

<script>
  import Popup from '@/components/popup.vue'
  export default {
    components: {Popup},
    data () {
      return {
        open: false
      }
    },
    methods:{
      openPopup() {
        this.open = true
      },
      closePopup(value) {
        this.open = value//coms from child
      }
    }
  }
</script>