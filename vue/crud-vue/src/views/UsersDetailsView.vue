<template lang="">
  <div>
    <h2 class="title">{{title}}</h2>
    <p>{{ user}}</p>

    <form>
      <input type="number" v-model="age">
      <input type="button" @click="updateUser(user._id)" value="Update">
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserDetailsView',
  data() {
    return {
      title: ' User Details',
      user: null,
      age: null
    }
  },
  mounted() {
    this.userDetails()
  },
  methods: {
    async userDetails() {
      const result = await fetch('http://localhost:3000/users/' + this.$route.params.id)
      const final = await result.json()
      this.user = final.user
    },
    async updateUser(id){
      const result  = await fetch('http://localhost:3000/updateuser', {
        method: 'PUT',
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
          id: id,
          age:this.age
        })
      })
      if(result.status == 200){
        this.$router.push('/users')
      }
    }
  }
}
</script>
<style scoped>
.title{
  margin-bottom: 20px;
}
.user-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 400px;
  margin: 5px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #ddd;
}
.user-list span{
  width: 120px;
}
.user-list span:first-child{
  max-width: 30px;
}
</style>