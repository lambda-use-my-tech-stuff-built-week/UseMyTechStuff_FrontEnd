import axios from 'axios';


export const CREATE_USER_START = 'CREATE_USER';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'
export const FETCH_USERS_START = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';



export const addUser = () => dispatch => {
  dispatch({ type: CREATE_USER_START });
  axios
    .post('https://usemytechstuff.herokuapp.com/api/users')
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_USER_FAILURE, payload: err });
    });
}

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get(`https://usemytechstuff.herokuapp.com/api/users`,
      { headers: { Authorization: localStorage.getItem("token") } })
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      // if (err.response.status === 403) {
      //   localStorage.removeItem("token");
      // }
      dispatch({ type: FETCH_USERS_FAILURE, payload: err });
    });
};

// export const getTech = () => dispatch => {
//   dispatch({ type: FETCH_DATA });
//   axios
//     .get('https://usemytechstuff.herokuapp.com/api/tech')
//     .then(res => {
//       dispatch({
//         type: FETCH_DATA_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       dispatch({ type: FETCH_DATA_FAILURE, payload: err });
//     });
// };