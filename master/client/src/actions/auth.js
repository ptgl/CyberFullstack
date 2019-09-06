import axios from "axios";
import jwtDecode from "jwt-decode";
import setHeaders from "../helper/setHeaders";

export const createUser = data => {
  return dispatch => {
    const url = "http://localhost:5000/api/users";
    axios
      .post(url, data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  };
};

export const login = data => {
  return dispatch => {
    const url = "http://localhost:5000/api/users/login";
    axios
      .post(url, data)
      .then(res => {
        console.log(res.data);
        const { token } = res.data;

        localStorage.setItem("token", token);

        const decoded = jwtDecode(token);
        dispatch({
          type: "SET_CURRENT_USER",
          payload: decoded
        });

        setHeaders({ token });

        //test
        // axios.get("http://localhost:5000/api/trips");
      })
      .catch(err => {
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT"
    });
    setHeaders({});
  };
};
