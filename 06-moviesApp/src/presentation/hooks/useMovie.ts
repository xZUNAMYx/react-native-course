import { useEffect, useState } from 'react';
import { getMovieByIdUseCase, getMovieCastUseCase } from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { MovieDetail } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = ( movieId: number ) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<MovieDetail>();
    const [cast, setCast] = useState<Cast[]>();

    useEffect(() => {
        loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    const loadMovie = async() => {
        setIsLoading(true);

        const movieDetailProimise = getMovieByIdUseCase( movieDBFetcher, movieId );
        const castPromise =  getMovieCastUseCase( movieDBFetcher, movieId );

        const [ movieDetail, cast ] = await Promise.all([movieDetailProimise, castPromise]);

        setMovie(movieDetail);
        setCast(cast);

        setIsLoading(false);   //!Error?

        // console.log({movieDetail});
        // console.log({ cast });
    };

    return{
        isLoading,
        movie,
        cast,
    };
};
