import { StyleProp, View, ViewStyle } from 'react-native';
import React, { ReactNode, useContext } from 'react';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface CustomViewProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
    margin?: boolean;
}

export const CustomView = ({ style, children, margin }: CustomViewProps) => {
    const { colors } = useContext(ThemeContext);

    return (
        <View style={[
            globalStyles.mainContainer,
            margin ? globalStyles.globalMargin : null,
            { backgroundColor: colors.background },
            style,
        ]}>
            { children }
        </View>
    );
};
