<template>
  <div>
    <h1 ref="input">Home</h1>
    {{ fullName }}
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
const input = ref(null)
const testFunc = (param) => {
  return param
}

const firstName = ref('Mesto')
const lastName = ref('Kaya')

const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

onMounted(() => {
  console.log(input.value.innerText)
  console.log(testFunc('mount'))
})
</script>
