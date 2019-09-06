import validateToken from "../helper/validateToken";

let initialState = {
  user: {},
  isAuthenticate: false
};

if (validateToken().status)
  initialState = {
    user: validateToken().decoded,
    isAuthenticate: true
  };

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        user: action.payload,
        isAuthenticate: true
      };

    case "LOGOUT":
      return {
        user: {},
        isAuthenticate: false
      };
    default:
      break;
  }

  return state;
};

export default auth;
