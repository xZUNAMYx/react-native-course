export interface Movie{
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    poster: string;
    backdrop: string;
}

export interface MovieDetail extends Movie{
    genres: string[];
    duration: number;
    budget: number;
    originalTitle: string;
    productionCompanies: string[];
}