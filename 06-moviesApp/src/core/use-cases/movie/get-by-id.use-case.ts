import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { MovieDetail } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number,
) : Promise<MovieDetail> => {

    try {
        const movie = await fetcher.get<MovieDBMovie>(`/${ movieId }`);

        const movieDetail = MovieMapper.fromMovieDBToEntity( movie );

        return movieDetail;
    } catch (error) {
        throw new Error('Error getting movie by id');
    }

};

