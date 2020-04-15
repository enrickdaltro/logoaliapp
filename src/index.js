import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from './routes';
// import { Container } from './styles';

export default function src() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Router />
    </NavigationContainer>
  );
}
