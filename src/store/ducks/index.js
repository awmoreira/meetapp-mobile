import { combineReducers } from 'redux';

// import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as meetups } from './meetups';
import { reducer as meetupDetails } from './meetupDetails';
import { reducer as subscriptions } from './subscriptions';

export default combineReducers({
  // auth,
  // toastr,
  // meetups,
  // meetupDetails,
  // subscriptions,
  test: () => [],
});
