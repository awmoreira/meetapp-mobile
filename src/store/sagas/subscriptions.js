import { call, put } from 'redux-saga/effects';
import { ToastActionsCreators } from 'react-native-redux-toast';
import navigation from '~/services/navigation';
import api from '~/services/api';

export function* addSubscription({ meetup_id }) {
  try {
    yield call(api.post, `meetups/${meetup_id}/subscriptions`);

    yield put(ToastActionsCreators.displayInfo('Inscrição realizada.'));

    navigation.navigate('Dashboard');
  } catch (err) {
    yield put(
      ToastActionsCreators.displayError(
        'Falha na operação. Tente mais tarde. Você já está inscrito?',
      ),
    );
  }
}

export function* deleteSubscription({ meetup_id }) {
  try {
    yield call(api.delete, `meetups/${meetup_id}/subscriptions`);

    yield put(ToastActionsCreators.displayWarning('Inscrição cancelada.'));

    navigation.navigate('Dashboard');
  } catch (err) {
    yield put(ToastActionsCreators.displayError('Falha na operação. Tente mais tarde.'));
  }
}
