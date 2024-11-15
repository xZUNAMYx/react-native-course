/* eslint-disable react-native/no-inline-styles */
import { FlatList, Image, ImageSourcePropType, NativeScrollEvent, NativeSyntheticEvent, Text, useWindowDimensions, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors, globalStyles } from '../../../config/theme/theme';
import { Button } from './Button';
import { useNavigation } from '@react-navigation/native';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../../assets/slide-3.png'),
    },
];

export const SlidesScreen = () => {
    const [ currentSlideIndex, setCurrentSlideIndex ] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation();

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    };

    const scrollToSlide = (index: number) => {
        // if (!flatListRef.current) {return;}

        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
                index: index,
                animated: true,
            });
        }
    };

        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.background,
            }}>

                <FlatList
                    data={ items }
                    keyExtractor={ (item, index) => item.title + index }

                    renderItem={ ({ item }) => <SlideItem item={ item } /> }
                    horizontal

                    pagingEnabled

                    scrollEnabled={ false }
                    onScroll={ onScroll }
                />

                {
                    currentSlideIndex === items.length - 1 ? (
                        <Button
                            text="Finalizar"
                            styles={{ position: 'absolute', bottom: 40, right: 40, width: 100 }}
                            onPress={ () => navigation.goBack() }
                        />
                    ) : (
                        <Button
                            text="Siguiente"
                            styles={{ position: 'absolute', bottom: 40, right: 40, width: 100 }}
                            onPress={ () => scrollToSlide(currentSlideIndex + 1) }
                        />
                    )
                }
            </View>
        );
    };



interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
    const { width } = useWindowDimensions();
    const { title, desc, img } = item;

    return (
        <View style={{
            flex: 1,
            width: width,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 40,
            justifyContent: 'center',
        }}>
            <Image
                source={ img }
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center',
                }}
            />

            <Text style={[
                globalStyles.title,
                { color: colors.primary, marginTop: 20 },
            ]}>
                { title }
            </Text>

            <Text style={[
                globalStyles.title,
                { color: colors.primary, marginTop: 20 },
            ]}>
                { desc }
            </Text>
        </View>
    );
};


