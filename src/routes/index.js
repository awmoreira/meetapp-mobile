import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import Preferences from '~/pages/Preferences';
import Bottom from './bottom';

export default function createNavigator(isAuth = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,
        Bottom,
        Preferences,
      },
      {
        initialRouteName: isAuth ? 'Bottom' : 'SignIn',
      },
    ),
  );
}
