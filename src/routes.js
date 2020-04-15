import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';

// const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

Icon.loadFont();

export default function Router() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#333',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
