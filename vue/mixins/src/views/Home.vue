<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ getTask() }}</p>
    <p>{{ getTask2() }}</p>
    <p>{{ filterUsers }}</p>
    <p>{{ fullName('Mesto', 'Kaya') }}</p>
    <p>Look at the Console and you will see Mixins comes first than Home</p>

    {{ getHores(3) }}
  </div>
</template>

<script>
import Task from '../Mixins/Task.js'
export default {
  name: "HomePage",
  mixins:[Task],
  data(){
    return {
      title:'Home'
    }
  },
  mounted(){
    console.log('Home')
  },
  methods:{
    
  }
};
</script>