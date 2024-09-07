import React from 'react';

import { Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
// import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

const Tab1Icon = () => (
  <IonIcon name="rocket-outline" color="black" size={25}/>
);

// const Tab2Icon = ({ color }: { color: string }) => <Text style={{color}}>Tab2</Text>;
const Tab3Icon = ({ color }: { color: string }) => <Text style={{color}}>Tab3</Text>;


export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: Tab1Icon,
        }}
        component={ Tab1Screen }
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => <IonIcon name="rocket-outline" color={color} />,
        }}
        component={ Tab2Screen }
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: Tab3Icon,
        }}
        component={ StackNavigator }
      />
    </Tab.Navigator>
  );
};
