<template>
  <div class="wrapper">
    <h2>Use Vuex As Modules</h2>

    <ul v-if="$store.state.Posts.posts !== null">
      <li v-for="item in $store.state.Posts.posts" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.title }}</span>
        <span>{{ item.body }}</span>
      </li>
    </ul>

    <input type="button" @click="$store.dispatch('getPosts')" value="Get Posts">

    <h3>Filtered-Posts will come from Getters</h3>
    <ul v-if="$store.state.posts !== null">
      <li v-for="item in $store.getters.filterPosts" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.title }}</span>
        <span>{{ item.body }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Modules',
  data() {
    return {
      
    }
  }

};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  list-style: none;
}

ul li {
  margin: 5px 0;
}

ul li span {
  margin: 0 10px;
}

input {
  margin: 5px 0;
  padding: 0 20px;
}
</style>