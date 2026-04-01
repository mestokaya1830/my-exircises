<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <button @click="$router.push('/admin/posts')">Back</button>
  </div>
</template>
<script>
import {useHead} from '@vueuse/head'
useHead({
  title:'Details',
  meta: [
    {
      name: 'description',  content:'Meta Details Page'
    }
  ]
})
export default {
  name: 'Details',
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