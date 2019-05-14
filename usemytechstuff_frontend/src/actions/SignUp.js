import axios from 'axios';


export const CREATE_USER = 'CREATE_USER';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'
export const FETCH_DATA = 'FETCH_ITEMS';
export const FETCH_DATA_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_ITEMS_FAILURE';



export const addUser = newUser => dispatch => {
  dispatch({ type: CREATE_USER });
  axios
    .post('https://usemytechstuff.herokuapp.com/api/users', newUser)
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_USER_FAILURE, payload: err });
    });
}

export const getItems = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get('https://usemytechstuff.herokuapp.com/api/tech')
    .then(res => {
      dispatch({
        type: FETCH_DATA_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAILURE, payload: err });
    });
};