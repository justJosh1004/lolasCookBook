import { NEW_TAB } from '../actions/types';

const initialState = {
  activeItem: 'home'
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    case NEW_TAB:
      return {
        ...state,
        activeItem: action.payload
      };
  }
};
