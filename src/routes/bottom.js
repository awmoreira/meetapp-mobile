import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import { colors } from '~/styles';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import NewMeetup from '~/pages/NewMeetup';
import Search from '~/pages/Search';
import Meetup from '~/pages/Meetup';

import TabBarIcon from '~/components/TabBarIcon';

export default createBottomTabNavigator(
  {
    NewMeetup: {
      screen: NewMeetup,
      navigationOptions: {
        title: 'Início',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add-circle" />,
      },
    },
    App: {
      screen: createStackNavigator(
        {
          Dashboard,
          Profile,
          Meetup,
        },
        {
          defaultNavigationOptions: {
            header: null,
          },
        },
      ),
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        const routesWithoutTabs = ['Profile', 'Meetup'];

        if (navigation.state.routes.length > 1) {
          navigation.state.routes.map((route) => {
            if (routesWithoutTabs.includes(route.routeName)) {
              tabBarVisible = false;
            }
          });
        }

        return {
          title: 'Início',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
          tabBarVisible,
        };
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        title: 'Início',
        tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-search" />,
      },
    },
  },
  {
    initialRouteName: 'App',
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: colors.primary,
      },
    },
  },
);
