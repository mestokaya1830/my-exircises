<template>
  <div>
    <h1>{{ title }}</h1>
    <h1>{{ message }}</h1>
    <h3>{{ users }}</h3>
  </div>
</template>

<script>
export default {
  inject:['message','users'],
  name:'HomePage',
  data(){
    return {
      title:'Home Page'
    }
  }
}
</script>