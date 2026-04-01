<template>
  <div>
    <h2>{{ title }}</h2>
    <div>
      {{ JSON.stringify(formValues, null, 2) }}
    </div>
    <form @submit.prevent="sendForm">
      <input type="text" v-model="formValues.name" />
      <input type="date" v-model="formValues.birthDate" />
      <input type="number" v-model="formValues.age" />
      <div>
        <input type="radio" value="Male" v-model="formValues.gender" />
        <input type="radio" value="Female" v-model="formValues.gender" />
      </div>
      <select v-model="formValues.city">
        <option value="Antep">Antep</option>
        <option value="Urfa">Urfa</option>
        <option value="Amed">Amed</option>
      </select>
      <select name="" id="" v-model="formValues.software" multiple>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="Javascript">Javascript</option>
      </select>
      <div>
        <input type="checkbox" value="Sport" v-model="formValues.hobby" />
        <input type="checkbox" value= "Reading" v-model="formValues.hobby" />
        <input type="checkbox" value="Climbing" v-model="formValues.hobby" />
      </div>
      <textarea name="" id="" cols="30" rows="3" v-model="formValues.summary"></textarea>
      <input type="submit" value="Send Form">
    </form>
    
  </div>
</template>

<script>
export default {
  name:'FormPage',
  data () {
    return {
      title:'Form',
      formValues: {
        name: "",
        age: 0,
        birthDate: "",
        gender: "Male",
        software: [],
        city: "",
        hobby: [],
        summary:''
      },
    }
  },

  mounted () {
    
  },

  methods:{
    sendForm(){
      console.log(this.formValues)
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
