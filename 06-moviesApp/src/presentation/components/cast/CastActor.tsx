/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Cast } from '../../../core/entities/cast.entity';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    actor: Cast;
}

export const CastActor = ({ actor }: Props) => {
    return (
        <View style={ styles.container }>
            <Image
                source={{ uri: actor.avatar }}
                style={ styles.imageActor }

            />

            <View style={ styles.actorInfo }>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{ actor.name }</Text>
                <Text style={{ fontSize: 12, opacity: 0.7 }}>{ actor.character }</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        paddingLeft: 10,
        display: 'flex',
        flexDirection: 'column',
        width: 100,
    },

    actorInfo: {
        marginLeft: 10,
        marginTop: 4,
    },

    imageActor: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },

});
