<template>
  <h1>{{ title }}</h1>
  {{ user }}
</template>

<script>
import axios from "axios";
export default {
  name: "typescript",
  data() {
    return {
      title: "Type-Vue-Node",
      user: {},
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      await axios.get("/api").then((result) => {
        this.user = result.data;
      });
    },
  },
};
</script>
