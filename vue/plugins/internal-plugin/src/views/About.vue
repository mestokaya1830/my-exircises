<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ $sayHello('Sayhello plugin was created in main.js file and called here') }}</p>
  </div>
</template>

<script>
export default {
  name:'AboutPAge',
  data () {
    return {
      title:'About'
    }
  }
}
</script>