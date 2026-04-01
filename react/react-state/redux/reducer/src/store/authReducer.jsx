const initial = {
  users: {}
};
const autReducer = (state = initial, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        users: action.payload,
      };
    case "logout":
      return {
        users: {}
      };
    default:
     return state;
  }
};

export default autReducer;
