import axios from "axios";

let initialState = [];

const userReducer = (state = initialState, action )=>{
switch (action.type) {
    case "GET_USERS":
        return action.payload;
        

    default:
        break;
}
    
return state;
}
export default userReducer;