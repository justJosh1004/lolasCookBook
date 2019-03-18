import { GET_RECIPES, LOADING_RECIPES } from '../actions/types';

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
    default:
      return state;
  }
};
