<template>
  <div>
    <h1>Actions For Async Process</h1>

    <ul v-if="$store.state.users !== null">
      <li v-for="item in $store.state.users" :key="item.id">
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <input type="button" @click="$store.dispatch('getUsers')" value="Get Users">
  </div>
</template>

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