<template>
  <div>
    <h1>Dashboard</h1>
  </div>
</template>
<script>
import {useHead} from '@vueuse/head'
useHead({
  title:'Dashboard',
  meta: [
    {
      name: 'description',  content:'Meta Dashboard Page'
    }
  ]
})
export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
 
  //local route guard
  // beforeRouteEnter(to, from, next) {
  //   alert('You have no permission for this page')
  //   if (to.name == '/') {
  //     next()
  //   }
  // }
}
</script>