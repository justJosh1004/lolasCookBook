import axios from 'axios';

import { GET_RECIPES, LOADING_RECIPES } from './types';

// Get all recipes
export const getAllRecipes = () => dispatch => {
  dispatch(setLoading());
  axios
    .get('/api/recipes')
    .then(res => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_RECIPES,
        payload: null
      });
    });
};

// Set Loading
export const setLoading = () => {
  return {
    type: LOADING_RECIPES
  };
};
