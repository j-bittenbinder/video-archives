import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { ListMoviesRepository } from "src/app/repository/list-movies/list-movies.repository";

import { ListMoviesService } from "./list-movies.service";

describe('ListMoviesService', () => {
    let service: ListMoviesService;
    let repository: ListMoviesRepository;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ HttpClientModule ],
          providers: [
            ListMoviesRepository
          ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        service = TestBed.inject(ListMoviesService);
        repository = TestBed.inject(ListMoviesRepository);
    });

    it('should create', () => {
        expect(service).toBeTruthy();   
    });

    it('should call getListMovies', () => {
        const spyGetMovies = spyOn(repository, 'getMovies').and.callThrough();
        service.getListMovies();
        expect(spyGetMovies).toHaveBeenCalled();   
    });

    it('should call getSearchMovie', () => {
        const search: string = 'nome-filme'
        const spyGetMovies = spyOn(repository, 'searchMovie').and.callThrough();
        service.getSearchMovie(search);
        expect(spyGetMovies).toHaveBeenCalled();   
    });
});
