import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

const Routes = createAppContainer(createSwitchNavigator({ Main, SignUp, SignIn }));

export default Routes;
