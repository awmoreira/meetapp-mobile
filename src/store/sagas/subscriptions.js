import { call, put } from 'redux-saga/effects';
// import { push } from 'connected-react-router';
// import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

// import SubscriptionsActions from '../ducks/subscriptions';

// export function* getSubscriptions({ meetup_id }) {
//   const response = yield call(api.get, `meetups/${meetup_id}/subscriptions`);

//   yield put(SubscriptionsActions.getSubscriptionsSuccess(response.data));
// }

export function* addSubscription({ meetup_id }) {
  try {
    yield call(api.post, `meetups/${meetup_id}/subscriptions`);

    // yield put(
    //   toastrActions.add({
    //     type: 'success',
    //     title: 'Inscrição',
    //     message: 'A inscrição foi realizada com sucesso.',
    //   }),
    // );

    // yield put(push('/'));
  } catch (err) {
    // yield put(
    //   toastrActions.add({
    //     type: 'error',
    //     title: 'Erro na inscrição',
    //     message: 'Houve algum problema ou você já está inscrito, por favor tente mais tarde.',
    //   }),
    // );
  }
}

export function* deleteSubscription({ meetup_id }) {
  try {
    yield call(api.delete, `meetups/${meetup_id}/subscriptions`);

    // yield put(
    //   toastrActions.add({
    //     type: 'success',
    //     title: 'Inscrição cancelada',
    //     message: 'Inscrição cancelada com sucesso.',
    //   }),
    // );

    // yield put(push('/'));
  } catch (err) {
    // yield put(
    //   toastrActions.add({
    //     type: 'error',
    //     title: 'Erro',
    //     message: 'Ocorreu algum problema na comunicação, por favor tente mais tarde.',
    //   }),
    // );
  }
}
