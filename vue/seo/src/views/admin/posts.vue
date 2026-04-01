<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="item in posts" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.title }}</span>
        <span><router-link :to="`/posts/${item.id}`">Details</router-link></span>
      </li>
    </ul>
  </div>
</template>
<script>
import {useHead} from '@vueuse/head'
useHead({
  title:'Posts',
  meta: [
    {
      name: 'description',  content:'Meta Posts Page'
    }
  ]
})
export default {
  name: 'Posts',
  data() {
    return {
      posts: {}
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts() {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const final = await result.json()
      this.posts = final
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