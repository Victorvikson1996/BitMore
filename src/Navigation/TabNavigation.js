import {View, Text} from 'react-native';
import React from 'react';
import {
  HomeScreen,
  ConfirmScreen,
  LoginScreen,
  PendingScreen,
  SendScreen,
  SplashScreen,
} from '../screens';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../utils';
import {TabIcon} from '../assets/Icons';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarActiveTintColor: COLORS.tabBarActiveTintColor,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.tabBackgroundColor,
    position: 'absolute',
    bottom: 25,
    right: 20,
    left: 20,
    elevation: 0,
    borderRadius: 15, // for android
    height: 80,
    // borderTopWidth: 5,
    borderTopColor: COLORS.tabBackgroundColor,
    paddingBottom: 20,
  },
};

const _HomeIconOptions = {
  tabBarIcon: ({focused}) => (
    <TabIcon
      icon={require('../assets/Icons/home.png')}
      focused={focused}
      label="Home"
    />
  ),
};

const _WalletIconOptions = {
  tabBarIcon: ({focused}) => (
    <TabIcon
      icon={require('../assets/Icons/bitcoin-wallet.png')}
      focused={focused}
      label="Wallet"
    />
  ),
};

const _SendIconOptions = {
  tabBarIcon: ({focused}) => (
    <TabIcon
      icon={require('../assets/Icons/send.png')}
      focused={focused}
      label="Send"
    />
  ),
};

const _ConfirmIconOptions = {
  tabBarIcon: ({focused}) => (
    <TabIcon
      icon={require('../assets/Icons/scan.png')}
      focused={focused}
      label="History"
    />
  ),
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        component={HomeScreen}
        options={_HomeIconOptions}
        name="HOME"
      />
      <Tab.Screen
        options={_WalletIconOptions}
        component={LoginScreen}
        name="WALLET"
      />
      <Tab.Screen
        component={SendScreen}
        options={_SendIconOptions}
        name="SEND"
      />
      <Tab.Screen
        options={_ConfirmIconOptions}
        component={PendingScreen}
        name="PENDING"
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
