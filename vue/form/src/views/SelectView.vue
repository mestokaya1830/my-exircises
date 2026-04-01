<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
      {{ JSON.stringify(formValues, null, 2) }}
    </div>
    <form @submit.prevent="sendForm">
      <select name="" id="" v-model="formValues.city">
        <option value="Antep">Antep</option>
        <option value="Urfa">Urfa</option>
        <option value="Amed">Amed</option>
      </select>
      <select name="" id="" v-model="formValues.software" multiple>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="Javascript">Javascript</option>
      </select>
      <input type="submit" value="Send Form">
    </form>
    
  </div>
</template>

<script>
export default {
  name:'SelectPage',
  data () {
    return {
      title:'Select',
      formValues: {
        software: [],
        hobby: []
      },
    }
  },

  mounted () {
    
  },

  methods:{
    sendForm(){
      alert(JSON.stringify(this.formValues))
    }
  }
};
</script>
<style scoped>
#input-con {
  display: inline;
}
form {
  display: flex;
  flex-direction: column;
}
input, select, textarea {
  margin: 10px;
  padding: 5px 10px;
}
</style>
