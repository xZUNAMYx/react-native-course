import { useEffect, useState } from 'react';
import type { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

let popularPageNumber = 1;

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [popular, setPopular] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
        const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDBFetcher);
        const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
        const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);

        const [
            nowPlayingMovies,
            upcomingMovies,
            topRatedMovies,
            popularMovies,
        ] = await Promise.all([
            nowPlayingPromise,
            upcomingPromise,
            topRatedPromise,
            popularPromise,
        ]);

        setNowPlaying(nowPlayingMovies);
        setUpcoming(upcomingMovies);
        setTopRated(topRatedMovies);
        setPopular(popularMovies);

        setIsLoading(false);

    };

    return {
        isLoading,
        nowPlaying,
        upcoming,
        topRated,
        popular,

        // Methods
        popularNextPage: async () => {
            popularPageNumber++;
            const popularMovies = await UseCases.moviesPopularUseCase( movieDBFetcher, {
                page: popularPageNumber,
            });

            setPopular( prev => [...prev, ...popularMovies] );
        },
    };
};
