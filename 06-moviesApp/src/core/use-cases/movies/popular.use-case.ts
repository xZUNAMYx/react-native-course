import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { PopularResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import type { Movie } from '../../entities/movie.entity';

interface Options {
    page?: number;
    limit?: number;
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<PopularResponse>('/popular' , {
            params: {
                page: options?.page || 1,
            },
        });

        return popular.results.map( result => MovieMapper.fromMovieDBResultToModel(result) );

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching popular movies yyy');
    }
};
