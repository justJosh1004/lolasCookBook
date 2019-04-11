import {
  GET_RECIPES,
  LOADING_RECIPES,
  GET_RECIPE,
  CREATE_RECIPE,
  DELETE_RECIPE
} from '../actions/types';

const initialState = {
  recipes: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RECIPES:
      return {
        ...state,
        loading: true
      };
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false
      };
    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
        loading: false
      };
    case CREATE_RECIPE:
      console.log(`Creating a New Recipe with: `);
      console.log(action.payload);
      return state;
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe._id !== action.payload)
      };
    default:
      return state;
  }
};
