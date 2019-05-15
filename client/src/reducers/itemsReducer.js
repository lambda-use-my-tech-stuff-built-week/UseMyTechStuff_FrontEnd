import {
  LOGIN_START,
  LOGIN_RESOLVED,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,

  ADDING_TECH,
  ADDED_TECH,


  ERROR


} from "../actions";

const initialState = {
  techItems: [],                   // ADDED
  user_id: '',               // ADDED
  username: '',
  isLoggingIn: false,
  error: '',
  fetchingData: false,
  addingTech: false,

  token: localStorage.getItem('token'),
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
        isLoggingIn: false,
        name: action.payload.name,            // ADDED
        user_id: action.payload.user_id,     // ADDED
        username: action.payload.username            // ADDED
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
        techItems: action.payload,
      };


    case ADDING_TECH:
      return {
        ...state,
        addingTech: true,

      };

    case ADDED_TECH:
      return {
        ...state,
        addingTech: false,
        techItems: action.payload,
        

      };




    case ERROR:
      return {
        ...state,
        error: action.payload,

      };
    default:
      return state;

  }

};
