import axios from "axios";

export const createUser = (data) => {
  return dispatch => {
    const url = "http://localhost:5000/api/users";
    axios.post(url, data).then(res => {
        console.log(res.data);
    }).catch(err=>{
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    });
  };
};
