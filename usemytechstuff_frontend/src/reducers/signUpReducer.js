import {
  CREATE_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from '../actions';

const initialState = {
  items: [],
  fetchingItems: false,
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

    case FETCH_ITEMS:
      return {
        ...state,
        fetchingItems: true
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        fetchingItems: false,
        smurfs: action.payload,
        error: null
      };

    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        fetchingItems: false,
        error: action.payload
      };

    default:
      return state;
  }
}