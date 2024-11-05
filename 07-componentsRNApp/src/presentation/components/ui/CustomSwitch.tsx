import { Platform, StyleSheet, Switch, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../config/theme/theme';

interface CustomSwitchProps {
    isOn: boolean;
    text?: string;

    onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, text, onChange }: CustomSwitchProps) => {
    return (
        <View style={ styles.switchRow }>
            {
                text && (<Text style={{ color: colors.text }}>{ text }</Text>)
            }

            <Switch
                    thumbColor={ Platform.OS === 'android' ? colors.primary : '' }
                    // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={ onChange }
                    value={ isOn }
            />
        </View>
    );
};

const styles = StyleSheet.create({

    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },

});
