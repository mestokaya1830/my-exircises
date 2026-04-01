<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent>
      <input type="text" v-model="gameLogs">
      <input type="submit" value="Send" @click="setGameLogs()">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'GameLogs',
  data () {
    return {
      title:'GameLogs Page',
      gameLogs:''
    }
  },
  methods:{
    async setGameLogs(){
      await axios.post('/api/gamelogs', {gamelogs: this.gameLogs}).then(result => {
        console.log(result.data)
      })
    }
  }
};
</script>