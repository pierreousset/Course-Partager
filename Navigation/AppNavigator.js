import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import SwiperScreen from '../Screens/SwiperScreen';
import AuthLoadingScreen from './AuthLoadingScreen';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  Login: SwiperScreen
},
{
  initialRouteName: 'AuthLoading',
}));