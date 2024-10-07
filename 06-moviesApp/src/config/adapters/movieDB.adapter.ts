import { THE_MOVIE_DB_API_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        // api_key: 'fd207a1f95c9c0581e1f275c8e55fb00',
        api_key: THE_MOVIE_DB_API_KEY ?? 'no-key',
        language: 'es',
    },
});
