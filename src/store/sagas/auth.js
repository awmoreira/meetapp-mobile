import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastActionsCreators } from 'react-native-redux-toast';
import api from '~/services/api';
import navigation from '~/services/navigation';

import AuthActions from '../ducks/auth';

export function* initAuthCheck() {
  const token = yield call([AsyncStorage, 'getItem'], '@Meetapp:token');

  if (token) {
    yield put(AuthActions.signInSuccess(token));
  }

  yield put(AuthActions.authCheck());
}

export function* signIn({ email, password }) {
  try {
    const { data } = yield call(api.post, 'sessions', { email, password });

    yield call([AsyncStorage, 'setItem'], '@Meetapp:token', data.token);

    yield put(AuthActions.signInSuccess(data.token));

    const navigateTo = data.preference ? 'Dashboard' : 'Preferences';
    navigation.navigate(navigateTo);
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Verifique seu Email e/ou senha'));
  }
}

export function* signOut() {
  // yield call([AsyncStorage, 'removeItem'], '@Meetapp:token');
  // navigation.navigate('SignIn');
}

export function* signUp({
  username, email, password, password_confirmation,
}) {
  try {
    yield call(api.post, 'users', {
      username,
      email,
      password,
      password_confirmation,
    });

    yield put(ToastActionsCreators.displayInfo('Verifique seu Email e/ou senha'));

    navigation.navigate('SignIn');
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Falha na operação. Tente novamente mais tarde.'));
  }
}

export function* updateUser({
  username, password, password_confirmation, preference,
}) {
  try {
    if (password !== '' && password_confirmation !== '') {
      yield call(api.put, 'users', {
        username,
        password,
        password_confirmation,
        preference,
      });
    } else {
      yield call(api.put, 'users', {
        username,
        preference,
      });
    }

    yield put(ToastActionsCreators.displayInfo('Usuário atualizado.'));
    navigation.navigate('Dashboard');
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Falha na operação. Tente novamente mais tarde.'));
  }
}

export function* getUser() {
  const response = yield call(api.get, 'users');

  yield put(AuthActions.getUserSuccess(response.data));
}
