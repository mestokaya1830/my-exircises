<template>
  <div>
    <h2>{{ title }}</h2>
    <component-plugin>
      <template #name>Mesto</template>
      <template #password>9090</template>
    </component-plugin>
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

