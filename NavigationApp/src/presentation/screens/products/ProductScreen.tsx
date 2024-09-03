import React, { useEffect } from 'react';

import { Text, View } from 'react-native';

import { globalStyles } from '../../theme/theme';
import { type RootStackParams } from '../../routes/StackNavigator';

import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={ globalStyles.container }>
        <Text>Product Screen</Text>

        <Text style={ globalStyles.title2center }>
          { params.id } - { params.name }
        </Text>
    </View>
  );
};
