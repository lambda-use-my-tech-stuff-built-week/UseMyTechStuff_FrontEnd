import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  ERROR


} from "../actions";

const initialState = {
  items: [],
  isLoggingIn: false,
  error: '',
  fetchingData: false,

};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...state,
        isLoggingIn: true
      };
    }
    case LOGIN_RESOLVED: {
      return {
        ...state,
        isLoggingIn: false
      };
    }

    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingData: false,
        isLoggingIn: false,
        friends: action.payload,
      };
    //   case FETCH_DATA_FAILURE:


    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;

  }

};