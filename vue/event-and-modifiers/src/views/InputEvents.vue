<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <div>
      <span>Input Event:</span>
      <input type="text"  @input="inputEvent($event)" placeholder="Enter something">
    </div>
    <div>
      <span>Select Change Event:</span>
      <select @change="SelectEvent($event)">
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="Javascript">Javascript</option>
      </select>
    </div>
    <div>
      <span>Date Select Event:</span>
      <input type="date" @change="dateSelectEvent($event)">
    </div>
    <div>
      <span>Checkbox Checked Event:</span>
      <input type="checkbox" value="Male" @change="checkedEvent($event)">
    </div>
    <div>
      <span>Radio Checked Event:</span>
      <input type="radio" value="Female" @change="checkedEvent($event)">
    </div>
  </div>
</template>

<script>

export default({
  name:"InputEvents",
  data() {
    return {
      title:'Input Events',
    }
  },
  methods:{
    inputEvent(event){
      alert(`Code:  ${event.which} \n Key:  ${event.key}`)
    },
    SelectEvent(event){
      alert(event.target.value)
    },
    dateSelectEvent(event){
      alert(event.target.value)
    },
    checkedEvent(event){
      alert(event.target.value)
    },
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