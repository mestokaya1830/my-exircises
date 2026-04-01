<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <div>
      <span>Keyup Event:</span>
      <input type="text"  @keyup="keyupEvent($event)" placeholder="Keyup something">
    </div>
    <div>
      <span>Enter Event:</span>
      <input type="text" @keyup.enter="enterEvent($event)" placeholder="Enter something">
    </div>
    <div>
      <span>Tab Event:</span>
      <input type="text" @keydown.tab="tabEvent()" placeholder="Tab">
    </div>
    <div>
      <span>Delete Event:</span>
      <input type="text" @keydown.delete="deleteEvent()" placeholder="Delete">
    </div>
    <div>
      <span>Esc Event:</span>
      <input type="text" @keydown.esc="escEvent()" placeholder="Esc">
    </div>
    <div>
      <span>Space Event:</span>
      <input type="text" @keydown.space="spaceEvent()" placeholder="Space">
    </div>
    <div>
      <span>Down Event:</span>
      <input type="text" @keydown.down="downEvent()" placeholder="Down">
    </div>
    <div>
      <span>Up Event:</span>
      <input type="text" @keydown.up="upEvent()" placeholder="Up">
    </div>
    <div>
      <span>Left Event:</span>
      <input type="text" @keydown.left="leftEvent()" placeholder="Left">
    </div>
    <div>
      <span>Right Event:</span>
      <input type="text" @keydown.right="rightEvent()" placeholder="Right">
    </div>
    <div>
      <span>Custom Event:</span>
      <input type="text" @keydown.a="customEvent()" placeholder="Custom press a">
    </div>
    <div>
      <span>Combinations:</span>
      <input type="text" @keydown.ctrl.shift="combinationsEvent()" placeholder="Ctrl + Shift">
      <!-- <input type="text" @keydown.ctrl.a="combinationsEvent()" placeholder="Ctrl + Shift"> -->
    </div>
  </div>
</template>

<script>

export default({
  name:"KeyEvents",
  data() {
    return {
      title:'Key Events',
    }
  },
  methods:{
    clickEvent(){
      alert('Hello')
    },
    onceEvent(){
      alert('Once Event Execute one time')
    },
    enterEvent(event){
      alert(event.target.value)
    },
    keyupEvent(event){
      alert(`Code:  ${event.which} \n Key:  ${event.key}`)
    },
    tabEvent(){
      alert('You pressed Tab key')
    },
    deleteEvent(){
      alert('You pressed Delete key')
    },
    escEvent(){
      alert('You pressed Esc key')
    },
    spaceEvent(){
      alert('You pressed Space key')
    },
    downEvent(){
      alert('You pressed Down key')
    },
    upEvent(){
      alert('You pressed Up key')
    },
    leftEvent(){
      alert('You pressed Left key')
    },
    rightEvent(){
      alert('You pressed Right key')
    },
    customEvent(){
      alert('You pressed A key')
    },
    combinationsEvent(){
      alert('You pressed Ctrl + Shift')
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