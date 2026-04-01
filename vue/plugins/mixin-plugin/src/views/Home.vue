<template>
  <div>
    <h2>{{ title }}</h2>
    <a :href="pluginLink" target="_blank">Mixin Plugin</a>
  </div>
</template>

<script>
export default {
  name:'HomePage',
  data () {
    return {
      title:'Home'
    }
  }
}
</script>