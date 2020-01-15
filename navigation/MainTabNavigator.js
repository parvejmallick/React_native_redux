import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  //Scan: ScanScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarVisible: false
};


export default createBottomTabNavigator({
  HomeStack,
},{
    
});
