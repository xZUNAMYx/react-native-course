import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import React from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';

interface ButtonProps {
    text: string;
    onPress: () => void;
    styles?: StyleProp<ViewStyle>;
}

export const Button = ({ onPress, styles, text }: ButtonProps) => {
    return (
        <Pressable
            onPress={ onPress }
            style= { ({ pressed }) => ([
                globalStyles.btnPrimary,
                {
                    opacity: pressed ? 0.7 : 1,
                    backgroundColor: colors.primary,
                },
                styles,
            ]) }
        >
            <Text style={[
                globalStyles.btnPrimaryText,
                {
                    color: colors.buttonTextColor,
                },
            ]}>
                { text }
            </Text>
        </Pressable>
    );
};
