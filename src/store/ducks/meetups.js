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
  addMeetupRequest: ['title', 'description', 'preference', 'locale', 'date_event', 'image'],
  addMeetupSuccess: ['meetup'],
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  subscriptions: [],
  nexts: [],
  recommended: [],
  isLoading: false,
});

/* Reducers */
export const getSubRequest = state => state.merge({ isLoading: true });
export const getSubSuccess = (state, { data }) => state.merge({ subscriptions: data, isLoading: false });

export const getNextRequest = state => state.merge({ isLoading: true });
export const getNextSuccess = (state, { data }) => state.merge({ nexts: data, isLoading: false });

export const getRecommendedRequest = state => state.merge({ isLoading: true });
export const getRecommendedSuccess = (state, { data }) => state.merge({ recommended: data, isLoading: false });

export const addRequest = state => state.merge({ isLoading: true });
export const addSuccess = (state, { meetup }) => state.merge({ nexts: [...state.nexts, meetup], isLoading: false });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SUBSCRIPTIONS_REQUEST]: getSubRequest,
  [Types.GET_SUBSCRIPTIONS_SUCCESS]: getSubSuccess,
  [Types.GET_NEXTS_REQUEST]: getNextRequest,
  [Types.GET_NEXTS_SUCCESS]: getNextSuccess,
  [Types.GET_RECOMMENDED_REQUEST]: getRecommendedRequest,
  [Types.GET_RECOMMENDED_SUCCESS]: getRecommendedSuccess,
  [Types.ADD_MEETUP_REQUEST]: addRequest,
  [Types.ADD_MEETUP_SUCCESS]: addSuccess,
});
