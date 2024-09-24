/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

    if(isLoading) {
        return(
            <Text>Loading...</Text>
        );
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                {/* Carousel principal */}
                <PosterCarousel
                    movies={nowPlaying}
                />

                {/* Películas populares */}
                <HorizontalCarousel
                    movies={ popular }
                    title="Populares"
                />
                <HorizontalCarousel
                    movies={ topRated }
                    title="Mejor calificadas"
                />
                <HorizontalCarousel
                    movies={ upcoming }
                    title="Próximamente"
                />

            </View>
        </ScrollView>
    );
};
