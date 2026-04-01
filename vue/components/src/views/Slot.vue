<template>
  <div>
    <h1>Slot Compoent</h1>
    <slot-component>
      <p style="margin-top: 50px;">I sent html from parent to child component <br/>  And get this html in child component with slot tag</p>
    </slot-component>
  </div>
</template>
<script>
import SlotComponent from '@/components/SlotComponent.vue'
export default {
  name:'Slot',
  components:{'slot-component': SlotComponent}

}
</script>