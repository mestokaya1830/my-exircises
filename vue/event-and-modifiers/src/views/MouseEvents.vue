<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
    <div @click.left="leftClick()">
      <span>Left Event:</span>
      <span>Click Mouse Left</span>
    </div>
    <div @click.right.prevent="rightClick()">
      <span>Right Event:</span>
      <span>Click Mouse Right</span>
    </div>
    <div @click.middle="middleClick()">
      <span>Middle Event:</span>
      <span>Click Mouse Middle</span>
    </div>
    <div @click.left.ctrl="combinationClick()">
      <span>Combination Event:</span>
      <span>Click Ctrl + Mouse Left</span>
    </div>
    <div @mousedown="mouseDown($event)">
      <span>Mouse Down Event:</span>
      <span>Click mouse left</span>
    </div>
    <div @mouseup="mouseUp($event)">
      <span>Mouse Up Event:</span>
      <span>Click mouse left and release</span>
    </div>
    <div @mouseover="mouseOver($event)">
      <span>Mouse Over Event:</span>
      <span>Point mouse here</span>
    </div>
    <div @mouseleave="mouseLeave($event)">
      <span>Mouse Leave Event:</span>
      <span>Point mouse here and leave it</span>
    </div>
    <div @mousemove="mouseMove($event)">
      <span>Mouse Move Event:</span>
      <span>Move mouse on here and look at the Console</span>
    </div>

  </div>
</template>

<script>

export default({
  name:"MouseEvents",
  data() {
    return {
      title:'Mouse Events',
    }
  },
  methods:{
    leftClick(){
      alert('You clicked mouse left')
    },
    rightClick(){
      alert('You clicked mouse right')
    },
    middleClick(){
      alert('You clicked mouse center')
    },
    combinationClick(){
      alert('You clicked Ctrl + mouse left')
    },
    mouseDown(event){
      alert(`Y: ${event.clientY} - X: ${event.clientX}`)
    },
    mouseUp(event){
      alert(`Y: ${event.clientY} - X: ${event.clientX}`)
    },
    mouseOver(event){
      alert(`Y: ${event.clientY} - X: ${event.clientX}`)
    },
    mouseLeave(event){
      alert(`Y: ${event.clientY} - X: ${event.clientX}`)
    },
    mouseMove(event){
      console.log(`Y: ${event.clientY} - X: ${event.clientX}`)
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