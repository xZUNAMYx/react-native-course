import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: { id: number, name: string };
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent',
      },
      headerTitleAlign: 'center', //Ayuda copilot para centrar el titulo
    }}>
      <Stack.Screen name="Home" component={ HomeScreen } />
      <Stack.Screen name="Products" component={ ProductsScreen } />
      <Stack.Screen name="Product" component={ ProductScreen } />  {/* QUitar para probar despues */}
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
