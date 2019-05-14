import {
  CREATE_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../actions';

const initialState = {
  users: [],
  fetchingUsers: false,
  addingUser: false,
  error: null
}

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_START:
      return {
        ...state,
        addingUser: true
      };

    case ADD_USER_SUCCESS:
      return {
        addingUser: false,
        items: action.payload,
        error: null
      };

    case ADD_USER_FAILURE:
      return {
        ...state,
        addingUser: false,
        error: action.payload
      }

    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUsers: true
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchingUsers: false,
        techUsers: action.payload,
        error: null
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        error: action.payload
      };

    default:
      return state;
  }
}