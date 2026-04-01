<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-autofocus placeholder="Search...">
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title:'Home Page'
    };
  },
  directives:{
    autofocus:{
      mounted(el){
        el.focus()
      }
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
};
</script>