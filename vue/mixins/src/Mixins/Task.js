export default {
  data() {
    return {
      title:' Mixins',
      users: [
        {name:'Mesto', age:50},
        {name:'Filiz', age:40},
        {name:'Bidik', age:20},
        {name:'Helin', age:17},
        {name:'Ilos', age:14}
      ]
    }
  },
  mounted() {
    console.log('Mixins')
  },
  methods: {
    getTask(){
      return 'Task 1 from Mixins'
    },
    getTask2(){
      return 'Task 2 from Mixins'
    },
    fullName(name, lastname){
      return name +' '+ lastname
    }
  },
  computed:{
    filterUsers(){
      return this.users.filter(item => item.age < 40)
    },
    setHours(param) {
      const d = new Date()
      return d.getHors() + param
    }
  }
}
