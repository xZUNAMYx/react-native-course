import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useCountStore } from '../../store/count-store';

export const SettingsScreen = () => {
    const count = useCountStore(state => state.count);
    const increment = useCountStore(state => state.increment);
    const decrement = useCountStore(state => state.decrement);

    return (
        <View style={ styles.container }>
            <Text>Count { count }</Text>

            <Pressable
                style={ styles.primaryButton }
                onPress={ increment}
            >
                <Text>+1</Text>
            </Pressable>

            <Pressable
                style={ styles.primaryButton }
                onPress={ decrement }
            >
                <Text>-1</Text>
            </Pressable>
        </View>
    );
};
