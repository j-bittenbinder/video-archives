export interface SearchMovieModel {
    page: number;
    results: Array<MovieModel>;
    total_pages: number;
    total_results: number;
}

export interface MovieModel {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Collection;
    budget: string;
    genres: Array<Genre>;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Array<ProductionCompanies>;
    production_countries: Array<ProductionCountries>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<Languages>;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompanies {
    id: number;
    logo_path: any;
    name: string;
    origin_country: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface Languages {
    english_name: string;
    iso_639_1: string;
    name: string;
}