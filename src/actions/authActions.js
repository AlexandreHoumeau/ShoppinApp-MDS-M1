import firebase from "firebase";
import { IS_LOGGED_IN, IS_LOGGED_OUT, NEW_AUTH_ERROR } from "./typesActions";

export const signIn = (userData) => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
  .then(async(userCredential) => {
    dispatch(setAuthError(null))
    const { user } = userCredential;
    const data = {
      id: user.providerData[0].uid,
      token: await userCredential.user.getIdToken(),
      email: user.providerData[0].email
    }
    dispatch(setAuth(data))
  })
  .catch((error) => {
    dispatch(setAuthError(error.message))
  });
} 

export const signUp = (userData) => (dispatch) => {
  return firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
  .then((userCredential) => {
    dispatch(setAuthError(null))
    const { user } = userCredential;
    return user
    // dispatch(setAuth(data))
  })
  .catch((error) => {
    dispatch(setAuthError(error.message))
    return {error: error.message}
  });

}

export const signOut = () => (dispatch) => {
  firebase.auth().signOut().then(() => {
    dispatch(signOutUser)
  }).catch((error) => {
    dispatch(setAuthError(error.message))
  });
  
}

const setAuthError = (error) => {
  return {
    type: NEW_AUTH_ERROR,
    error
  }
}

const setAuth = (payload) => {
  return  {
    type: IS_LOGGED_IN,
    payload
  }
}

const signOutUser = () => {
  return {
    type: IS_LOGGED_OUT
  }
}