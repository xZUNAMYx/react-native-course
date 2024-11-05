/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();

    return (
        <View style={ styles.container }>

            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop,
                    }],
                },
            ]} />

            <Pressable onPress={() => {
                fadeIn({});
                startMovingTopPosition({
                    initialPosition: -100, duration: 700,
                });
            }} style={{ marginTop: 10 }}>
                <Text>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
                <Text>FadeOut</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    purpleBox: {
        backgroundColor: '#5856D6',
        height: 150,
        width: 150,
    },
});
