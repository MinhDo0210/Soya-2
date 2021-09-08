/* eslint-disable prettier/prettier */
import * as React from 'react';
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
  LoginScreen,
  InfoScreen,
  CartScreen,
} from './screens';

import Feather from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';

let store = createStore(allReducers);

const Tab = createBottomTabNavigator();

const RestStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <RestStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}
    >
      <RestStack.Screen name="Home" component={HomeScreen} />
    </RestStack.Navigator>
  );
}

function RestStackScreen() {
  return (
    <RestStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName={'Details'}
    >
      <RestStack.Screen name="Restaurant" component={RestaurantScreen} />
      <RestStack.Screen name="Details"  options={{ title: 'Chi tiết cửa hàng' }} component={DetaltRestScreen} />
      <RestStack.Screen name="Order" options={{ title: 'Soya Garden – Rainbow Linh Đàm' }} component={OrderScreen} />
      <RestStack.Screen name="Cart" options={{ title: 'Đơn hàng' }} component={CartScreen} />
    </RestStack.Navigator>
  );
}

function MessageStackScreen() {
  return (
    <RestStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName={'Message'}
    >
      <RestStack.Screen name="Message" component={MessageScreen} />
    </RestStack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <RestStack.Navigator
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName={'Account'}
    >
      <RestStack.Screen name="Account" options={{ title: 'Khác' }} component={AccountScreen} />
      <RestStack.Screen name="Login"  component={LoginScreen} />
      <RestStack.Screen name="Info" options={{ title: 'Thông tin cá nhân' }} component={InfoScreen} />
    </RestStack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName={'Login'}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#68ac44',
          }}
          initialRouteName={'Trang chủ'}
        >
          <Tab.Screen
            name="Trang chủ"
            component={HomeStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Material name="home" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Cửa hàng"
            component={RestStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Material name="storefront-outline" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Thông báo"
            component={MessageStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Feather name="bell" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Khác"
            component={AccountStackScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="dots-three-horizontal" color={color} size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

