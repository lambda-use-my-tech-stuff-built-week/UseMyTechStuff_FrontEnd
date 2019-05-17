import axios from 'axios';


import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions';

const initialState = {
  users: [],
  error: '',
  // user_id: '',
  // username: '',
  fetchingUsers: false,
  deletingUser: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        error: '',
        fetchingUsers: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingUsers: false,
        // user_id: action.payload.user_id,
        // username: action.payload.username,
        users: action.payload
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
}
