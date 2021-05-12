import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
//import Community from '../screens/Community.js';
import PlantATree from '../screens/PlantATree';

//import MyForestScreen from '../screens/MyForestScreen';
//import Foundation from '../screens/Foundation.js';


export const AppTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: Home },
    PlantATree: { screen: PlantATree },
  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../assets/home-icon.png')}
              style={{ width: 20, height: 20 }}
            />
          );
        } 
      }
    }),
  }
);
