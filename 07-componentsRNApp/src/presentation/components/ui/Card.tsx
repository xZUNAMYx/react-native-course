import { StyleProp, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { colors } from '../../../config/theme/theme';

interface CardProps extends PropsWithChildren{
    style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: CardProps) => {
    return (
        <View style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {
                backgroundColor: colors.cardBackground,
                borderRadius: 10,
                padding: 10,
            },
            style,
        ]}>
            { children }
        </View>
    );
};
