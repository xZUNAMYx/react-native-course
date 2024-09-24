import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { NowPlayingResponse } from '../../../infrastructure/movie-db.responses';
import type { Movie } from '../../models/movie.model';

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

        return nowPlaying.results.map( result => MovieMapper.fromMovieDBResultToModel(result) );

    } catch (error) {
        console.log(error);
        throw new Error('Error fetching now playing movies yyy');
    }
};
