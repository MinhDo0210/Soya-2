/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  RestaurantScreen,
  MessageScreen,
  AccountScreen,
  DetaltRestScreen,
  OrderScreen,
} from './screens';

const Tab = createBottomTabNavigator();

const RestStack = createStackNavigator();

function RestStackScreen() {
  return (
    <RestStack.Navigator
      screenOptions={{
          headerShown: true,
        }}
        initialRouteName={'Home'}
    >
      <RestStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestStack.Screen name="Details" component={DetaltRestScreen} />
      <RestStack.Screen name="Order" component={OrderScreen} />
    </RestStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Cửa hàng" component={RestStackScreen} />
        <Tab.Screen name="Chi tiết" component={OrderScreen} />
        <Tab.Screen name="Thông báo" component={MessageScreen} />
        <Tab.Screen name="Khác" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

