// import axiosWithAuth from '../utils/axiosAuth';
import axios from 'axios';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const getUsers = () => dispatch => {
  // dispatch a "start" action
  dispatch({ type: FETCH_USERS_START });
  // then... start the API call
  // axiosWithAuth()
  axios
    .get(`https://usemytechstuff.herokuapp.com/api/users`)
    .then(res => {
      console.log("RESPONSE", res);
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERRRRRRRRRRRRRRRRRR", err);
      dispatch({
        type: FETCH_USERS_FAILURE,
        payload: err
      })
    })
}

// export const getTech = () => dispatch => {
//   dispatch({ type: FETCH_DATA_START });
//   axios // NOTICE DIFFERENT ENDPOINT !!!!!
//     .get(`https://usemytechstuff.herokuapp.com/api/tech`,
//       { headers: { Authorization: localStorage.getItem("token") } })
//     .then(res => {
//       console.log(" >>>>this is res  ", res);
//       dispatch({
//         type: FETCH_DATA_SUCCESS,
//         payload: res.data
//       });
//     })
//     .catch(err => {
//       console.log(err.response);
//       if (err.response.status === 403) {
//         localStorage.removeItem("token");
//       }
//       dispatch({ type: ERROR, payload: err.response });
//     });
// };