import { NEW_TAB } from './types';

export const newTab = activeItem => {
  return {
    type: NEW_TAB,
    payload: activeItem
  };
};
