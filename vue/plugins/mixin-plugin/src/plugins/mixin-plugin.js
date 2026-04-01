export default {
  install(app, option){
    app.mixin({
      data(){
        return{
          pluginLink:'https://vueschool.io/courses'
        }
      }
    })
  }
}