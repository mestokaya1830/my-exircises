<template>
  <div>
    <h2>{{ title }}</h2>
    <a :href="pluginLink" target="_blank">Mixin Plugin</a>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      name:'',
      title: "Contact",
    }
  },
  methods: {
    
  },
};
</script>