<template>
  <div class="popup">
    <p>{{ message }}</p>
    <button class="btn" @click="$emit('closePopup', false)">Close Popup</button>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data () {
      return {

      }
    },
  }
</script>

<style>
  .popup{
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #444;
    margin-top: 30px;
  }
</style>