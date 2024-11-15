/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { Text, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
// import { colors } from '../../../config/theme/theme';

export const ChangeThemeScreen = () => {
    const { setTheme, currentTheme, colors } = useContext( ThemeContext );

    return (
        <CustomView margin>
            <Title text={`Change Theme: ${ currentTheme }`} />

            <Button
                text="Light"
                onPress={() => setTheme('light')}
            />

            <View style={{height: 10}} />

            <Button
                text="Dark"
                onPress={() => setTheme('dark')}
            />

            <Text style={{ color: colors.text }}>
                { JSON.stringify( colors, null, 2) }
            </Text>
        </CustomView>
    );
};
