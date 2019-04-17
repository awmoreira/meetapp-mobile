import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import SignIn from '~/pages/Auth/SignIn';

const Routes = createAppContainer(createSwitchNavigator({ Main, SignIn }));

export default Routes;
