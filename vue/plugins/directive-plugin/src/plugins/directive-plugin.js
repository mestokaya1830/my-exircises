export default {
  install(app, options){
    app.directive('myFont', (el, binding, vnode) => {
      let size = 12
      switch (binding.arg) {
        case 'small':
          size = 16
          break;
        case 'medium':
          size = 24
          break;
        case 'large':
          size = 32
          break;
        
        default:
          size = 16
          break;
      }
      el.style.fontSize = size + 'px'
    })
  }
}