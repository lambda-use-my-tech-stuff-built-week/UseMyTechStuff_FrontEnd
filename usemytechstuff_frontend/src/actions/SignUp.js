import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_USERS';
export const FETCH_ITEMS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_USER_FAILURE';
export const CREATE_USER = 'CREATE_USER';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAILURE = 'ADD_USER_FAILURE'

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_ITEMS });
  axios
    .get('https://usemytechstuff.herokuapp.com/api/users')
    .then(res => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_ITEMS_FAILURE, payload: err });
    });
};

export const addUser = user => dispatch => {
  dispatch({ type: CREATE_USER });
  axios
    .post('https://usemytechstuff.herokuapp.com/api/users', user)
    .then(res => {
      dispatch({ type: ADD_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_USER_FAILURE, payload: err });
    });
}