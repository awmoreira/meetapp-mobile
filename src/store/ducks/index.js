import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';
import { reducer as auth } from './auth';
import { reducer as meetups } from './meetups';
import { reducer as meetupDetails } from './meetupDetails';
import { reducer as subscriptions } from './subscriptions';

export default combineReducers({
  toast,
  auth,
  meetups,
  meetupDetails,
  subscriptions,
});
