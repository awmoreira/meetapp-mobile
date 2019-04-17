import { call, put } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
// import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    // localStorage.setItem('@Meetapp:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    if (response.data.preference) {
      // yield put(push('/'));
    } else {
      // yield put(push('/preferences'));
    }
  } catch (err) {
    // yield put(
    //   toastrActions.add({
    //     type: 'error',
    //     title: 'Falha no login',
    //     message: 'Verifique seu e-mail/senha!',
    //   }),
    // );
  }
}

export function* signOut() {
  // localStorage.removeItem('@Meetup:token');
  // yield put(push('/signin'));
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

    // yield put(
    //   toastrActions.add({
    //     type: 'success',
    //     title: 'SignUp',
    //     message: 'Cadastro realizado! Por favor faça seu login.',
    //   }),
    // );
    // yield put(push('/'));
  } catch (err) {
    // yield put(
    //   toastrActions.add({
    //     type: 'error',
    //     title: 'Falha no cadastro',
    //     message: 'Tente novamente mais tarde...',
    //   }),
    // );
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

    // yield put(
    //   toastrActions.add({
    //     type: 'success',
    //     title: 'Perfil',
    //     message: 'Atualização realizada com sucesso!',
    //   }),
    // );
    // yield put(push('/'));
  } catch (err) {
    // yield put(
    //   toastrActions.add({
    //     type: 'error',
    //     title: 'Falha na atualização',
    //     message: 'Tente novamente mais tarde...',
    //   }),
    // );
  }
}

export function* getUser() {
  const response = yield call(api.get, 'users');

  yield put(AuthActions.getUserSuccess(response.data));
}
