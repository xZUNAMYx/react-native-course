import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';
import { useCountStore } from '../../store/count-store';

export const HomeScreen = () => {
    const name = useProfileStore(state => state.name);
    const email = useProfileStore(state => state.email);
    const count = useCountStore(state => state.count);

    return (
        <View style={ styles.container }>
            <Text style={ styles.container }>{ name }</Text>
            <Text style={ styles.container }>{ email }</Text>
            <Text style={ styles.container }>{ `Count ${count}` }</Text>
        </View>
    );
};
