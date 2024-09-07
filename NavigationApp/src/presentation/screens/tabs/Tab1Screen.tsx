import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
        <Text>Tab1Screen</Text>

        <Icon name="add-outline" size={30} color="#900" />

        <Icon name="airplane-outline" size={30} />

        <IonIcon name="rocket-outline"/>
        {/* <ion-icon name="add-outline"></ion-icon> */}
    </View>
  );
};
