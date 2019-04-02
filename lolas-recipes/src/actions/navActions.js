import { NEW_TAB } from './types';

export const newTab = activeItem => {
  console.log(`Navigating to new tab: ${activeItem}`);
  return {
    type: NEW_TAB,
    payload: activeItem
  };
};
