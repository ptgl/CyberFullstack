import axios from "axios";

export const getUsers = () => {
  return dispatch => {
    const url = "http://localhost:5000/api/users";
    axios.get(url).then(res => {
      dispatch({
        type: "GET_USERS",
        payload: res.data
      });
    });
  };
};
