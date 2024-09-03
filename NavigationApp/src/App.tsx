// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Text } from 'react-native';
import { StackNavigator } from './presentation/routes/StackNavigator';
// import { Text } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
