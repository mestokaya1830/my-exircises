<template>
  <div>
    <h1>{{ title }}</h1>
    <h1 v-if="!$store.state.auth">Please login...</h1>
    <h1 v-else>Welcome {{ $store.state.auth }}</h1>
  </div>
</template>

<script>
import {useHead} from '@vueuse/head'
useHead({
  title:'Home',
  meta: [
    {
      name: 'description',  content:'Meta Home Page'
    }
  ]
})
export default {
  name:'Home',
  data () {
    return {
      title:'Home'
    }
  }
};
</script>
