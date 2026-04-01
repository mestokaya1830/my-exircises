import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      auth: 'mesto'
    }
  },
  mutations: {
   setAuth(state, payload){
    state.auth = payload
   }
  }
})

export default store