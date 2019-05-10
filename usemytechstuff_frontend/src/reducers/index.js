import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { selectedItemReducer } from './selectedItemReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  itemsReducer,
  selectedItemReducer,
  userReducer,



});