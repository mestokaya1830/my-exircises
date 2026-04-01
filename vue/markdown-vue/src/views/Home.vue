<template>
  <div>
    <h2>{{ title }}</h2>

    <textarea v-model="article" cols="60" rows="5" placeholder="type something..."></textarea>
    <p v-html="getMarkDown()"></p>
  </div>
</template>

<script>
  import {marked} from 'marked'
export default {
  name:'Home',
  data () {
    return {
      title:'Home Page',
      article: ''
    }
  },
  mounted(){
    this.getMarkDown()
  },
  methods:{
    getMarkDown() {
      return marked (this.article)
    }
  }
};
</script>