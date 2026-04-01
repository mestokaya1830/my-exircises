<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Look at the Console and brows page, enter some text or click the button</p>
    <form @submit.prevent="sendForm">
      <input type="text" v-model="name" />
      <input type="submit" value="Send Form">
    </form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Home Page",
      name:''
    }
  },
  methods: {
    sendForm(){
      console.log(this.name)
    }
  },
  beforeCreate(){
    console.log('Before Create')
  },
  created(){
  },
  beforeMount(){
    console.log('Before Mount')
  },
  mounted(){
    console.log('Mounted')
  },
  beforeUpdate(){
    console.log('Before Update')
  },
  updated(){
    console.log('Updated')
  },
  beforeUnmount(){
    console.log('Before Unmount')
  },
  unmounted(){
    console.log('Unmounted')
  },
};
</script>

<style scoped>
#input-con {
  display: inline;
}
form {
  display: flex;
  flex-direction: column;
}
input, select, textarea {
  margin: 10px;
  padding: 5px 10px;
}
</style>