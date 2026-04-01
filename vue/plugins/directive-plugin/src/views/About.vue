<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-myFont:small>This is FontSize Directive Plugin Small</div>
    <div v-myFont:medium>This is FontSize Directive Plugin Medium</div>
    <div v-myFont:large>This is FontSize Directive Plugin Large</div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      name:'',
      title: "About",
    }
  },
  methods: {
    
  },
};
</script>

