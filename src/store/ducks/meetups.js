import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getSubscriptionsRequest: ['term'],
  getSubscriptionsSuccess: ['data'],
  getNextsRequest: ['term'],
  getNextsSuccess: ['data'],
  getRecommendedRequest: ['term'],
  getRecommendedSuccess: ['data'],
  addMeetupRequest: ['title', 'description', 'preference', 'locale', 'date_event', 'file_id'],
  addMeetupSuccess: ['meetup'],
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  subscriptions: [],
  nexts: [],
  recommended: [],
});

/* Reducers */

export const getSubSuccess = (state, { data }) => state.merge({ subscriptions: data });

export const getNextSuccess = (state, { data }) => state.merge({ nexts: data });

export const getRecommendedSuccess = (state, { data }) => state.merge({ recommended: data });

export const addSuccess = (state, { meetup }) => state.merge({ nexts: [...state.nexts, meetup] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SUBSCRIPTIONS_SUCCESS]: getSubSuccess,
  [Types.GET_NEXTS_SUCCESS]: getNextSuccess,
  [Types.GET_RECOMMENDED_SUCCESS]: getRecommendedSuccess,
  [Types.ADD_MEETUP_SUCCESS]: addSuccess,
});
