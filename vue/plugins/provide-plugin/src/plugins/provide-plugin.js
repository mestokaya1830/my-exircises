export default {
  install(app, option){
    const logout = () => {
      alert('Logout Plugin')
    }
    app.provide('providePlugin', logout)
  }
}