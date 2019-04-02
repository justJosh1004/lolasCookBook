import { combineReducers } from 'redux';

import recipeReducer from './recipeReducer';
import navReducer from './navReducer';

export default combineReducers({
  recipe: recipeReducer,
  activeItem: navReducer
});
