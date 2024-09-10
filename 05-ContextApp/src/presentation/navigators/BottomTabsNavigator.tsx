import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { useCountStore } from '../store/count-store';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  const count = useCountStore(state => state.count);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ HomeScreen } />
      <Tab.Screen name="Profile" component={ ProfileScreen } />
      <Tab.Screen name={`Count ${count}`} component={ SettingsScreen } />
    </Tab.Navigator>
  );
};
