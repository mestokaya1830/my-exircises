<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent>
      <input type="text" v-model="creditLogs.name">
      <input type="submit" value="Send" @click="setCreditLogs()">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'CreditLogs',
  data () {
    return {
      title:'Creditlogs Page',
      creditLogs: {
        name:''
      }
    }
  },
  methods:{
    async setCreditLogs(){
      await axios.post('/api/creditlogs', {creditlogs: this.creditLogs}).then(result => {
        if(result.data){
          console.log(result.data)
        }
      })
    }
  }
};
</script>