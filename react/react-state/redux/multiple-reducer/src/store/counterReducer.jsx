const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increament':
      return state + 1
    case 'decreament':
      return state -1
    default:
      return state
  }
}

export default counterReducer