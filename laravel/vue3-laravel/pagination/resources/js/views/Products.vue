<script setup>
import axios from "../models/axios.js";
</script>
<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <span>{{ item.name }}</span>
        <span>{{ item.price }}</span>
      </li>
    </ul>
    <ul class="pagination">
      <li v-for="(page, index) in pages" :key="index">
        <span @click="getProducts(page)">{{ page }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: {},
      pages: 1,
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    async getProducts(page = 1) {
      await axios.get("/products?page=" + page).then((result) => {
        console.log(result.data);
        this.products = result.data.data;
        this.pages = result.data.last_page;
      });
    },
  },
};
</script>

<style scoped>
.pagination > li {
  display: flex;
  justify-content: flex-start;
}
.pagination > li > span {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 30px;
  min-height: 3px;
  margin: 5px;
  border: 1px solid #ccc;
  background-color: cornflowerblue;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}
</style>
