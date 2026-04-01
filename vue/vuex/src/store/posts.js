export default {
  state: {
   posts: null
  },
  mutations: {
    getPosts(state, payload){
      state.posts = payload //payload comes from actions commit
    }
  },
   
  //actions used for async operation
  actions: {
    async getPosts({ commit }){
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const final = await result.json()
      commit('getPosts', final)
    }
  },

  //getters used for filter and manupilation
  getters: {
    filterPosts(state){
      if(state.posts !== null){
        return state.posts.filter(item => item.id < 5)
      }
    }
  }
}