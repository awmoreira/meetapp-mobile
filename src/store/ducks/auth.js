import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
  authCheck: null,
  signOut: null,
  signUpRequest: ['username', 'email', 'password', 'password_confirmation'],
  updateUserRequest: ['username', 'password', 'password_confirmation', 'preference'],
  getUserRequest: null,
  getUserSuccess: ['user'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  isAuthChecked: false,
  isSigningIn: false,
  isSignedIn: false,
  token: null,
  user: null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({ isSignedIn: true, token });

export const authCheck = state => state.merge({ isAuthChecked: true });

export const logout = state => state.merge({ isSignedIn: false, token: null });

export const getSuccess = (state, { user }) => state.merge({ user });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.AUTH_CHECK]: authCheck,
  [Types.GET_USER_SUCCESS]: getSuccess,
});
