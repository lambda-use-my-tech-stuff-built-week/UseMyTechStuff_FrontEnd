import {
  CREATE_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions';

const initialState = {
  items: [],
  fetchingData: false,
  addingUser: false,
  error: null
}

export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
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

    case FETCH_DATA:
      return {
        ...state,
        fetchingData: true
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        smurfs: action.payload,
        error: null
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };

    default:
      return state;
  }
}