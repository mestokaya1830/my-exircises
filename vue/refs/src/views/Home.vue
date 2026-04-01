<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" ref="nameInput" placeholder="Enter some text and click the button">
    <p ref="message" style="margin: 20px 0;"></p>
    <input type="button" @click="getRef()" value="Get Ref Text">
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title:'Home Page'
    };
  },
  mounted() {
    this.$refs.message.innerText = ''
  },
  methods: {
    getRef(){
      this.$refs.message.innerText = this.$refs.nameInput.value
    }
  },
};
</script>