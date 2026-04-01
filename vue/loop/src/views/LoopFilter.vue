<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Get the as Department {{ getPerson.length }}</p>
    <ul>
      <li v-for="item in getPerson" :key="item.index">
        <span>{{ item.index }}</span>
        <span>{{ item.dep }}</span>
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Person from '../assets/persons.json';
export default {
  name:'Loop Filter',
  data () {
    return {
      title:'Loop Filter Page',
      Persons: {}
    }
  },

  computed:{
    getPerson(){
      return Person.filter(item => item.dep == 'Sales');
    }
  },
  mounted () {
    this.Persons = Person
    console.log(Person)
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}

ul>li {
  margin: 5px 0;
}

ul>li>span {
  margin: 0 10px;
}
</style>
