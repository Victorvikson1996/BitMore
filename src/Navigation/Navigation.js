import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, SplashScreen} from '../screens';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ScreenOptions}>
        <Stack.Screen component={SplashScreen} name="SPALSH" />
        <Stack.Screen component={TabNavigation} name="Tab" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
