import { createStore } from "vuex";
import VuexPersistence from 'vuex-persist'
import localForage from 'localforage'
import Posts from './posts.js'

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true
})

export default createStore({
  state:{
    auth: {},
    users: null
  },
  getters:{
    getUsername(state){
      return state.auth.username + ' ' + 'is Admin'
    }
  },
  mutations:{
    setAuth(state, payload){
      state.auth = payload
    },
    getUsers(state, payload){
      state.users = payload //payload comes from actions commit
    }

    //self persist (with this you dont need persist plugin)
    // login(state, form){
    //   state.form = form
    //   localStorage.setItem('auth', JSON.stringify(form))
    //   alert('LoggedIn')
    // },
    // logout(state){
    //   state.form = ''
    //   localStorage.removeItem('auth')
    // },
    // checkAuth(state){
    //   if(localStorage.getItem('auth')){
    //     state.form = JSON.parse(localStorage.getItem('auth'))
    //   }
    // }
  },
  actions: {
    async getUsers({ commit }){
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      const final = await result.json()
      commit('getUsers', final)//fill getUsers mutation bei dispatch in page
    }
  },
  plugins: [vuexLocal.plugin],

  modules:{
    Posts
  }
})