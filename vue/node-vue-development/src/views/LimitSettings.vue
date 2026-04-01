<template>
  <div>
    <h2>{{ title }}</h2>
    <form @click.prevent>
      <input type="text" v-model="limitSettings">
      <input type="submit" value="Send" @click="setLimitSettings()">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'LimitSettings',
  data () {
    return {
      title:'LimitSettings Page',
      limitSettings:''
    }
  },
  methods:{
    async setLimitSettings(){
      await axios.post('/api/limitSettings', {limitsettings: this.limitSettings}).then(result => {
        console.log(result.data)
      })
    }
  }
};
</script>