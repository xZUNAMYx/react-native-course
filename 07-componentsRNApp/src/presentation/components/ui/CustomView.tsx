import { StyleProp, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../../../config/theme/theme';

interface CustomViewProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    margin?: boolean;
}

export const CustomView = ({ style, children, margin }: CustomViewProps) => {
    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            style,
        ]}>
            { children }
        </View>
    );
};
