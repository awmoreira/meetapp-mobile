import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import navigation from '~/services/navigation';
import api from '~/services/api';

import MeetupsActions from '../ducks/meetups';

export function* getSubs({ term }) {
  const response = yield call(api.post, 'subs', { term });

  yield put(MeetupsActions.getSubscriptionsSuccess(response.data.data));
}

export function* getNexts({ term }) {
  const response = yield call(api.post, 'nexts', { term });

  yield put(MeetupsActions.getNextsSuccess(response.data.data));
}

export function* getRecommended({ term }) {
  const response = yield call(api.post, 'recommended', { term });

  yield put(MeetupsActions.getRecommendedSuccess(response.data.data));
}

// export function* getMeetups() {
//   const response = yield call(api.get, 'meetups');

//   yield put(MeetupsActions.getMeetupsSuccess(response.data.data));
// }

export function* addMeetup({
  title, description, preference, locale, date_event, file_id,
}) {
  try {
    const response = yield call(api.post, 'meetups', {
      title,
      description,
      preference,
      locale,
      date_event,
      file_id,
    });

    yield put(MeetupsActions.addMeetupSuccess(response.data));

    yield put(ToastActionsCreators.displayInfo('Meetup adicionado.'));

    navigation.navigate('Dashboard');
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Falha na operação. Tente mais tarde.'));
  }
}
