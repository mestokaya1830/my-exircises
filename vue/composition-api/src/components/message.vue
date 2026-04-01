<script setup>
  import { defineProps } from 'vue'
  defineProps({
    parentMsg:{
      type: String,
      required: true
    }
  })
</script>
<template>
  <div>
    <h1>{{ parentMsg }}</h1>
  </div>
</template>
