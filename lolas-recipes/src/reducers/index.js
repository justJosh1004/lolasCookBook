import { combineReducers } from 'redux';

import recipeReducer from './recipeReducer';
import navReducer from './navReducer';
import authReducer from './authReducer';

export default combineReducers({
  recipe: recipeReducer,
  activeItem: navReducer,
  auth: authReducer
});
