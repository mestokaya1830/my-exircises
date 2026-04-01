<template>
  <div>
    <Navbar />
    <RouterView id="master-page" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default{
  name:'AppPage',
  components:{
    Navbar,
    Footer
  },
  data() {
    return{}
  }
}
</script>
<style>
ul {
  display: flex;
  list-style: none;
}
ul > li {
  margin: 0 15px;
}
#master-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
