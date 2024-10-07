import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { TopRatedResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import type { Movie } from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<TopRatedResponse>('/top_rated');

        return topRated.results.map( result => MovieMapper.fromMovieDBResultToModel(result) );

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching top rated movies yyy');
    }
};
