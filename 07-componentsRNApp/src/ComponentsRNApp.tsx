import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './presentation/navigator/Navigator';

export const ComponentsRNApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
