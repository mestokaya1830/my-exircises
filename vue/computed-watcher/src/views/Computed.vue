<template>
  <div>
    <h2>{{ title }}</h2>

    <p>Total Computed</p>
    <p style="color: red;">{{ totalComputed }}</p>
    <p>Total Method</p>
    <p style="color: red;">{{ totalMethod() }}</p>
    <br>
    <template v-for="item in products" :key="item.id">
      <div>
        <span>{{ item.id }}</span>
        <span>{{ item.products }}</span>
        <span>{{ item.price }}</span>
      </div>
    </template>
    <div>
      <input type="button" value="Add New Item" @click="addNewItem()" />
<br>
<p>If you enter something in inputbox method is triggerd but not computed look at the console</p>
      <input type="text" v-model="test" placeholder="Enter something...">
      {{ test }}
      <input type="button" value="Add New Text" @click="addNewtext()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputedPAge",
  data() {
    return {
      title: "Computed Page",
      products:[
        {id:1, product:'Laptop', price: 300},
        {id:2, product:'Laptop2', price: 400},
        {id:3, product:'Laptop3', price: 500}
      ],
      test:''
    };
  },
  computed:{
    totalComputed(){
      console.log('Computed')
      return this.products.reduce((x, y) => x + y.price ,0)
    }
  },
  methods: {
    addNewItem(){
      this.products.push(
        {id:4, product:'Laptop4', price: 600}
      )
    },
    totalMethod(){
      console.log('Method')
      return this.products.reduce((x, y) => x + y.price ,0)
    },
    addNewtext(){
      this.test = 'Hello'
    }
  }
};
</script>

<style>
  #input-con{
    display: inline;
  }
  input{
    margin: 0 10px;
    padding: 5px 10px;
  }
</style>
