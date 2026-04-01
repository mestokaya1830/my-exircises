const autReducer = (state = "", action) => {
  switch (action.type) {
    case 'login':
      return {
        user: action.payload
      }
    case 'logout':
      return {
        user: ""
      }
    default:
      return state
  }
}

export default autReducer