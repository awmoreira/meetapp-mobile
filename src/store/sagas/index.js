import { all, takeLatest } from 'redux-saga/effects';

import {
  initAuthCheck,
  signIn,
  updateUser,
  getUser,
  signUp,
  // signOut,
} from './auth';
import { AuthTypes } from '../ducks/auth';

import {
  getSubs, getNexts, getRecommended, addMeetup,
} from './meetups';
import { MeetupsTypes } from '../ducks/meetups';
import { getMeetup } from './meetupDetails';
import { MeetupDetailsTypes } from '../ducks/meetupDetails';

import { addSubscription, deleteSubscription } from './subscriptions';
import { SubscriptionsTypes } from '../ducks/subscriptions';

export default function* rootSaga() {
  return yield all([
    initAuthCheck(),
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(AuthTypes.GET_USER_REQUEST, getUser),
    // takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(MeetupsTypes.GET_SUBSCRIPTIONS_REQUEST, getSubs),
    takeLatest(MeetupsTypes.GET_NEXTS_REQUEST, getNexts),
    takeLatest(MeetupsTypes.GET_RECOMMENDED_REQUEST, getRecommended),
    takeLatest(MeetupsTypes.ADD_MEETUP_REQUEST, addMeetup),
    takeLatest(MeetupDetailsTypes.GET_MEETUP_REQUEST, getMeetup),
    takeLatest(SubscriptionsTypes.ADD_SUBSCRIPTION_REQUEST, addSubscription),
    takeLatest(SubscriptionsTypes.DELETE_SUBSCRIPTION_REQUEST, deleteSubscription),
  ]);
}
