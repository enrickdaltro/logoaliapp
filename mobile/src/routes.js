import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Search from './pages/Search';
import ProfileInfo from './pages/ProfileInfo';
import ProfileHomeInfo from './pages/ProfileHomeInfo';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

Icon.loadFont();

const searchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Search}
        options={{
          headerTransparent: true,
          headerTitle: null,
        }}
      />
      <Stack.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={{
          headerTitle: 'Informações do prestador',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const homeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitle: null,
        }}
      />
      <Stack.Screen
        name="ProfileHomeInfo"
        component={ProfileHomeInfo}
        options={{
          headerTitle: 'Informações do prestador',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function Router() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#1f33c9',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'transparent',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="HomePage"
        component={homeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchPage"
        component={searchStack}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="place" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
