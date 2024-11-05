/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const loadMore = () => {
        // TODO: Añadir números a nuestro arreglo
        const newArray = Array.from({ length: 5 }, (_, i) => i + numbers.length);
        setNumbers([...numbers, ...newArray]);
    };

    return (
        <View style={{ backgroundColor: 'black' }}>
            <FlatList
                data={ numbers }
                onEndReached={ loadMore }
                onEndReachedThreshold={ 0.6}
                keyExtractor={ (item) => item.toString() }

                renderItem={ ({ item }) => <ListItem number={ item } /> }

                ListFooterComponent={ () => (
                    <View style={{ height: 50, justifyContent: 'center' }}>
                        <ActivityIndicator size={ 40 } color={ colors.primary } />
                    </View>
                )}
            />
        </View>
    );
};

interface ListItemProps {
    number: number;
}

const ListItem = ({ number }: ListItemProps) => {
    return (
        <FadeInImage
            uri={ `https://picsum.photos/id/${ number }/200/300` }
            style={{
                width: '100%',
                height: 300,
            }}
        />

        // <Image
        //     source={{ uri: `https://picsum.photos/id/${ number }/200/300` }}
        //     style={{
        //         width: '100%',
        //         height: 300,
        //     }}
        // />
    );
};
