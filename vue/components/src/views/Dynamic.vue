<template>
  <div>
    <h2>Dynamic Component</h2>
    <div>
      <button class="btn" @click="active = 'comp1'">Comp1</button>
      <button class="btn" @click="active = 'comp2'">Comp2</button>
      <button class="btn" @click="active = 'comp3'">Comp3</button>
    </div>

    <component :is="active" />
  </div>
</template>

<script>
import Comp1 from '@/components/Comp1.vue'
import Comp2 from '@/components/Comp2.vue'
import Comp3 from '@/components/Comp3.vue'

export default {
  components: {
    Comp1,
    Comp2,
    Comp3
  },
  data() {
    return {
      active: 'comp1'
    }
  }
}
</script>
