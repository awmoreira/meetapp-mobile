import '~/config/ReactotronConfig';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { Toast } from 'react-native-redux-toast';

import store from '~/store';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <Fragment>
      <Toast />
      <App />
    </Fragment>
  </Provider>
);

export default Root;
