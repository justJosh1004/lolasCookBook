import { SIGN_IN, SIGN_OUT, AUTH_CHANGE } from '../actions/types';

const initialState = {
  isSignedIn: null,
  userId: null
};

export default (state = initialState, action) => {
  const auth = () => window.gapi.auth2.getAuthInstance();
  switch (action.type) {
    case AUTH_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        userId: action.payload.userId
      };
    case SIGN_IN:
      auth().signIn();
      return state;
    case SIGN_OUT:
      auth().signOut();
      return state;
    default:
      return state;
  }
};
