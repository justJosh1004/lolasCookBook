import { SIGN_IN, SIGN_OUT, AUTH_CHANGE } from './types';

const auth = () => window.gapi.auth2.getAuthInstance();

export const signIn = () => {
  return {
    type: SIGN_IN
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const authChange = () => {
  if (auth().isSignedIn.get()) {
    return {
      type: AUTH_CHANGE,
      payload: {
        isSignedIn: auth().isSignedIn.get(),
        userId: auth()
          .currentUser.get()
          .getId()
      }
    };
  } else {
    return {
      type: AUTH_CHANGE,
      payload: { isSignedIn: auth().isSignedIn.get() }
    };
  }
};
