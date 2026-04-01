<template>
  <div>
    <h2>{{ title }}</h2>

    <ul>
      <li v-for="item in Persons" :key="item.index">
        <span>{{ item.index }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Person from '../assets/persons.json';
export default {
  name:'Get Local File',
  data () {
    return {
      title:'Get Local File Page',
      Persons: {}
    }
  },

  mounted () {
    this.Persons = Person
    console.log(Person)
  },

  methods:{
   
  }
};
</script>
<style scoped>
  ul{
    display: flex;
    flex-direction: column;
  }
  ul > li{
    margin: 5px 0;
  }
  ul > li > span{
    margin: 0 10px;
  }
</style>
