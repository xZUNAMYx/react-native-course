/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { MovieDetail } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formatter';
import { Cast } from '../../../core/entities/cast.entity';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../cast/CastActor';

interface Props {
    movie: MovieDetail;
    cast: Cast[];
}

export const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ fontSize:23, marginTop:10, fontWeight:'bold' }}>
                    Historia
                </Text>

                <Text>{ movie.description }</Text>

                <Text style={{ fontSize:23, marginTop:10, fontWeight:'bold' }}>
                    Presupuesto
                </Text>

                <Text>{ Formatter.currency( movie.budget ) }</Text>
            </View>

            <View style={{ marginTop:10, marginBottom:50 }}>
                <Text style={{
                    fontSize:23,
                    fontWeight:'bold',
                    marginHorizontal:20,
                    marginVertical:10,
                }}>
                    Actores
                </Text>

                <FlatList
                    data={ cast }
                    keyExtractor={ (item) => item.id.toString() }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    renderItem={ ({ item }) => <CastActor actor={ item }/> }
                />
            </View>
        </>
    );
};
