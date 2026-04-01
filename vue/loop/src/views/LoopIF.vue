<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Get the as Department</p>
    <div class="list">
      <template v-for="item in Persons" :key="item.index">
        <div v-if="item.dep == 'Sales'">
          <span>{{ item.index }}</span>
          <span>{{ item.dep }}</span>
          <span>{{ item.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Person from '../assets/persons.json';
export default {
  name:'Loop IF',
  data () {
    return {
      title:'Loop IF Page',
      Persons: {}
    }
  },

  mounted () {
    this.Persons = Person
    console.log(Person)
  },
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.list > div {
  margin: 5px 0;
}
.list > div  span{
  margin: 0 10px;
}

</style>
