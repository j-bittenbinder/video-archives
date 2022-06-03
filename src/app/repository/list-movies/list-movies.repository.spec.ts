import { HttpBackend, HttpClient, HttpClientModule, HttpRequest } from "@angular/common/http";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ListMoviesRepository } from "./list-movies.repository";

describe('ListMoviesRepository', () => {
    let repository: ListMoviesRepository;
    let httpClient: HttpClientModule;
    

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [ HttpClientModule ],
          providers: [
            HttpBackend
          ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        repository = TestBed.inject(ListMoviesRepository);
        httpClient = TestBed.inject(HttpClientModule);
    });

    it('should create', () => {
        expect(repository).toBeTruthy();
    });
});