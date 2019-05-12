import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_RESOLVED = "LOGIN_RESOLVED";

// create action types for getting data
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

// generic action type for any error
export const ERROR = "ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios // we post login creds to login server
    .post(`https://usemytechstuff.herokuapp.com/api/auth/login`, creds)
    .then(res => {
      // local storage stores token passed in
      console.log('response.data is >> ', res.data);
  //    localStorage.setItem("token", res.data.payload);
      localStorage.setItem('token', res.data.token);        // added
      localStorage.setItem('user_id', res.data.user_id);    // breaks on blank login
    })
    .catch(err => {
      console.log("login err: ", err);
      if (err.response.status === 403) {
        localStorage.removeItem("token");
   //     localStorage.removeItem("user_id");
      }
      dispatch({ type: LOGIN_RESOLVED });
    });
};
