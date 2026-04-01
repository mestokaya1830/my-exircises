<template>
  <div>
    <nav>
      <router-link to="/" class="links">Home</router-link>
      <label for="clr-black" class="clr-rd-lb clr-black">
        <input type="radio" name="thema" @change="appendFile('./src/assets/black.css')" id="clr-black" class="clr-btn" />
      </label>

      <label for="clr-blue" class="clr-rd-lb clr-blue">
        <input type="radio" name="thema" @change="appendFile('./src/assets/blue.css')" id="clr-blue" class="clr-btn" />
      </label>

      <label for="clr-green" class="clr-rd-lb clr-green">
        <input type="radio" name="thema" @change="appendFile('./src/assets/green.css')" id="clr-green" class="clr-btn" />
      </label>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods:{
    appendFile(param){
      let file = document.createElement('link');
      file.rel = 'stylesheet';
      file.href = param
      document.head.appendChild(file)
    }
  }
}
</script>

<style scoped>
nav {
  display: flex;
}

.links {
  margin: 10px;
}

.links {
  text-decoration: none;
}

.active {
  color: green;
}</style>
