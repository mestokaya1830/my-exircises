<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ getTask() }}</p>
    <p>{{ getTask2() }}</p>
    <p>{{ filterUsers }}</p>
    <p>{{ fullName('Filiz', 'Kaya') }}</p>
  </div>
</template>

<script>
import Task from '../Mixins/Task.js'
export default {
  name: "ContactPage",
  mixins:[Task],
  data(){
    return {
      title:'Contact'
    }
  }
};
</script>
