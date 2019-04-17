import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import MeetupDetailsActions from '../ducks/meetupDetails';

export function* getMeetup({ id }) {
  const response = yield call(api.get, `meetups/${id}`);
  yield put(MeetupDetailsActions.getMeetupSuccess(response.data));
}
