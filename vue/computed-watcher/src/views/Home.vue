<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ counter }}</h2>
    <br />

    <div>
      <input type="button" :disabled="inc" value="Increase" @click="increase()" />
      <input type="button" :disabled="dec" value="Decrease" @click="decrease()" />
    </div>
  </div>
</template>

<script>
import { version } from 'vue';

export default {
  name: "Home",
  data() {
    return {
      title: "Home Page",
      counter: 0,
      inc:false,
      dec:true
    };
  },
  methods: {
    increase() {
      this.counter += 1;
    },
    decrease() {
      this.counter -= 1;
    },
  },
  watch:{
    //watcher run as async
    counter(newValue, oldValue){
      // console.log('old', oldValue)
      // console.log('new', newValue)
      // const sum = oldValue + newValue
      // console.log(sum) //run as reduce

      if(newValue > 0 && newValue < 5){
        this.inc = false
        this.dec = false
      } else if(newValue > 4){
        this.inc = true
      } else {
        this.dec = true
      }
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