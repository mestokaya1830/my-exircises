<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <div>
      <span>Clcik Event: </span>
      <input type="button" value="Click Event" @click="clickEvent()">
    </div>
    <div>
      <span>Once Click Event:</span>
      <input type="button" value="Once Event" @click.once="onceEvent()">
    </div>
    <div>
      <span>Double Click Event:</span>
      <span @dblclick="doubleClickEvent()">Double Click Here </span>
    </div>
  </div>
</template>

<script>

export default({
  name:"ClickEvent",
  data() {
    return {
      title:'Click Event',
    }
  },
  methods:{
    clickEvent(){
      alert('Hello')
    },
    onceEvent(){
      alert('Once Event Execute one time')
    },
    doubleClickEvent(){
      alert('Double Click Event')
    }
  }
});

</script>

<style scoped>
.wrapper div{
  display: flex;
  justify-content: space-between;
  width: 600px;
  margin: 10px auto;
}

span:nth-child(1){
  min-width: 200px;
  color: red;
}
</style>