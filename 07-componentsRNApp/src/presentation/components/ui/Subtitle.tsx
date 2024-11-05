/* eslint-disable react-native/no-inline-styles */
import { Text } from 'react-native';
import React from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SubtitleProps {
    text: string;
    safe?: boolean;
    backgroundColor: string;
}

export const Subtitle = ({ text, safe = false, backgroundColor = colors.background }: SubtitleProps) => {
    const { top } = useSafeAreaInsets();

    return (
        <Text style={{
            ...globalStyles.title,
            marginTop: safe ? top : 0,
            marginBottom: 10,
            backgroundColor: backgroundColor,
        }}>
            { text }
        </Text>
    );
};
