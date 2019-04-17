import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ['email', 'password'],
  signInSuccess: ['token'],
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
  signedIn: false,
  // signedIn: !!localStorage.getItem('@Meetapp:token'),
  token: null,
  // token: localStorage.getItem('@Meetapp:token') || null,
  user: null,
});

/* Reducers */

export const success = (state, { token }) => state.merge({ signedIn: true, token });

export const logout = state => state.merge({ signedIn: false, token: null });

export const getSuccess = (state, { user }) => state.merge({ user });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT]: logout,
  [Types.GET_USER_SUCCESS]: getSuccess,
});
