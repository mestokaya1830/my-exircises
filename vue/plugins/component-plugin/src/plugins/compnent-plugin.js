import ComponentPlugin from '../components/Form.vue';
export default {
  install(app, option){
    app.component('component-plugin', ComponentPlugin)
  }
}