import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import { colors } from '../../../config/theme/theme';

interface SeparatorProps {
    style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: SeparatorProps) => {
    return (
        <View style={{
            backgroundColor: colors.cardBackground,
        }}>
            <View
                style={[
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                        alignSelf: 'center',
                        width: '80%',
                        height: 1,
                        backgroundColor: colors.text,
                        opacity: 0.1,
                        marginVertical: 8,
                    },
                    style,
                ]}
            />
        </View>
    );
};
