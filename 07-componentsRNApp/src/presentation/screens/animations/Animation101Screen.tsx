/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation101Screen = () => {
    const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();
    const { colors } = useContext(ThemeContext);

    return (
        <CustomView style={ styles.container }>

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
                <Text style={{ color: colors.text }}>FadeIn</Text>
            </Pressable>

            <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
                <Text style={{ color: colors.text }}>FadeOut</Text>
            </Pressable>

        </CustomView>
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
