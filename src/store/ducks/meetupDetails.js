import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getMeetupRequest: ['id'],
  getMeetupSuccess: ['data'],
});

export const MeetupDetailsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: {},
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge(data);

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MEETUP_SUCCESS]: getSuccess,
});
