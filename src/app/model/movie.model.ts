export class SearchMovieModel {
    constructor(
        public page: number = 0,
        public results: Array<MovieModel> = [],
        public total_pages: number = 0,
        public total_results: number = 0
    ) {}
}

export class MovieModel {
    constructor(
        public adult: boolean = false,
        public backdrop_path: string = '',
        public belongs_to_collection = new Collection(),
        public budget: string = '',
        public genres: Array<Genre> = [new Genre()],
        public homepage: string = '',
        public id: number = 0,
        public imdb_id: string = '',
        public original_language: string = '',
        public original_title: string = '',
        public overview: string = '',
        public popularity: number = 0,
        public poster_path: string = '',
        public production_companies: Array<ProductionCompanies> = [new ProductionCompanies()],
        public production_countries: Array<ProductionCountries> = [new ProductionCountries()],
        public release_date: string = '',
        public revenue: number = 0,
        public runtime: number = 0,
        public spoken_languages: Array<Languages> = [new Languages()],
        public status: string = '',
        public tagline: string = '',
        public title: string = '',
        public video: boolean = false,
        public vote_average: number = 0,
        public vote_count: number = 0
    ) {}
}

export class Collection {
    constructor(
        public id: number = 0,
        public name: string = '',
        public poster_path: string = '',
        public backdrop_path: string = ''
    ) {}
}

export class Genre {
    constructor(
        public id: number = 0,
        public name: string = ''
    ) {}
}

export class ProductionCompanies {
    constructor(
        public id: number = 0,
        public logo_path: any = '',
        public name: string = '',
        public origin_country: string = ''
    ) {}
}

export class ProductionCountries {
    constructor(
        public iso_3166_1: string = '',
        public name: string = ''
    ) {}
}

export class Languages {
    constructor(
        public english_name: string = '',
        public iso_639_1: string = '',
        public name: string = ''
    ) {}
}