import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import HomeScreen from '../Screens/HomeScreen'


export default createBottomTabNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: {
      headerMode: 'none',
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          color={tintColor}
          type='ionicon'
          name={
            Platform.OS === 'ios'
              ? 'ios-home' : 'md-home'}
        />
      ),
    }
  },
},
{
  tabBarOptions: {
    activeTintColor: '#2F6389',
    inactiveTintColor: '#658D92',
    style: {
      backgroundColor: '#FFED46',
      borderTopWidth: 0,
      shadowOffset: {width:5,height:3},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    },
  },
});
