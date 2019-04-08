import axios from 'axios';

import {
  GET_RECIPES,
  LOADING_RECIPES,
  GET_RECIPE,
  CREATE_RECIPE
} from './types';

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
      console.log(err.response);
      dispatch({
        type: GET_RECIPES,
        payload: null
      });
    });
};

// Get one recipe
export const getRecipe = id => dispatch => {
  dispatch(setLoading());
  axios
    .get(`/api/recipes/${id}`)
    .then(res => {
      dispatch({
        type: GET_RECIPE,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: GET_RECIPE,
        payload: null
      });
    });
};

// Create recipe
export const createRecipe = formValues => dispatch => {
  dispatch({
    type: CREATE_RECIPE,
    payload: formValues
  });
};

// Set Loading
export const setLoading = () => {
  return {
    type: LOADING_RECIPES
  };
};
