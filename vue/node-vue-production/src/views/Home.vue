<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page'
    }
  },
  mounted(){
    this.getNested()
  },
  methods:{
    async getNested(){
      await axios.get('/api').then(result => {
        console.log(result.data)
      })
    }
  }
};
</script>