<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <upload />
          </div>
        </div>
        <uploadmulti />
      </div>
    </div>
  </div>
</template>

<script>
import upload from '../components/upload.vue';
import uploadmulti from '../components/uploadmulti.vue';

export default {
  name: 'Home',
  components: {
    upload,
    uploadmulti
  },
  data() {
    return {
      title: 'Home Page',
    }
  },
  methods: {

  }
};
</script>