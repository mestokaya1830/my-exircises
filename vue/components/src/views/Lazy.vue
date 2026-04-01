<template>
  <div>
    <LazyComponent />
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const LazyComponent = defineAsyncComponent(() => import('@/components/Lazy.vue'))
export default {
  components: { LazyComponent }
}
</script>
