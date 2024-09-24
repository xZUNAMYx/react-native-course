import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { UpcomingResponse } from '../../../infrastructure/movie-db.responses';
import type { Movie } from '../../models/movie.model';

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');

        return upcoming.results.map( result => MovieMapper.fromMovieDBResultToModel(result) );

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching upcoming movies yyy');
    }
};
