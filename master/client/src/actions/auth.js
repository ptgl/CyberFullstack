import axios from "axios";

export const createUser = (data) => {
  return dispatch => {
    const url = "http://localhost:5000/api/users";
    // const data = {
    //     "email": "abc@mail.com",
    //     "password": "12345678",
    //     "password2": "12345678",
    //     "DOB": "09/09/1998",
    //     "userType": "admin",
    //     "phone": "99909090",
    // }
    axios.post(url, data).then(res => {
        console.log(res.data);
    //   dispatch({
    //     type: "CREATE_USER",
    //     payload: res.data
    //   });
    });
  };
};
