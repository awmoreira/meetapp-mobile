import '~/config/ReactotronConfig';

import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Toast } from 'react-native-redux-toast';

import './config/StatusBarConfig';

import Routes from '~/routes';

import store from '~/store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Toast />
    </Fragment>
  </Provider>
);

export default App;
