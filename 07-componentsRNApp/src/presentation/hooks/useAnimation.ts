import { useRef } from 'react';
import { Animated, Easing } from 'react-native';


export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({ duration = 300, toValue = 1, callBack = () => {} }) => {
        // Animated.timing(animatedTop, {
        //     toValue: 100,
        //     duration: 700,
        //     useNativeDriver: true,
        //     easing: Easing.bounce,
        // },).start(() => console.log('Animation finished'));

        Animated.timing(animatedOpacity, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
        },).start( callBack);
    };

    const fadeOut = ({ duration = 300, toValue = 0, callBack = () => {} }) => {
        Animated.timing(
            animatedOpacity,
            {
                toValue: toValue,
                duration: duration,
                useNativeDriver: true,
            },
        ).start( callBack );
    };

    const startMovingTopPosition = ({
        initialPosition = 0,
        toValue = 0,
        duration = 300,
        easing = Easing.bounce,
        callBack = () => {},
    }) => {
        animatedTop.setValue( initialPosition );
        Animated.timing( animatedTop, {
            toValue: toValue,
            duration: duration,
            useNativeDriver: true,
            easing: easing,
        }).start( callBack );
    };

    return {
        // Propiedades
        animatedOpacity,
        animatedTop,

        // Métodos
        fadeIn,
        fadeOut,
        startMovingTopPosition,
    };
};

