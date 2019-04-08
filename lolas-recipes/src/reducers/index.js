import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import recipeReducer from './recipeReducer';
import navReducer from './navReducer';
import authReducer from './authReducer';

export default combineReducers({
  form: reduxFormReducer,
  recipe: recipeReducer,
  activeItem: navReducer,
  auth: authReducer
});
