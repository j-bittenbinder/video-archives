import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { SearchMovieModel } from 'src/app/model/movie.model';
import { ListMoviesService } from 'src/app/service/list-movies/list-movies.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  
  let search: SearchMovieModel = {
    page: 0,
    results: [{
      adult: false,
      backdrop_path: '',
      belongs_to_collection: {
        id: 0,
        name: '',
        poster_path: '',
        backdrop_path: ''
      },
      budget: '',
      genres: [{
        id: 0,
        name: ''
      }],
      homepage: '',
      id: 0,
      imdb_id: '',
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      production_companies: [{
        id: 0,
        logo_path: '',
        name: '',
        origin_country: ''
      }],
      production_countries: [{
        iso_3166_1: '',
        name: ''
      }],
      release_date: '',
      revenue: 0,
      runtime: 0,
      spoken_languages: [{
        english_name: '',
        iso_639_1: '',
        name: ''
      }],
      status: '',
      tagline: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0
    }],
    total_pages: 0,
    total_results: 0
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ HttpClientModule, FormsModule ],
      providers: [
        ListMoviesService
      ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    component.movieDetails = search.results[0];
    component.search = search;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit passing data', () => {
    const listMoviesService: ListMoviesService = TestBed.inject(ListMoviesService);
    const formSearchParam = <NgForm>{
      value: {
          first: 'title'
      }
    };
    const spyListMovies = spyOn(listMoviesService, 'getSearchMovie').and.returnValue(of(search));
    component.onSubmit(formSearchParam);
    expect(spyListMovies).toHaveBeenCalled();
  });

  it('should call onSubmit and return empty array', () => {
    const formSearchParam = <NgForm>{
      value: {
          first: ''
      }
    };
    component.onSubmit(formSearchParam);
    component.search.results = [];
    expect(component.search.results).toEqual([]);
  });

  it('should call noResults', () => {
    const formSearchParam = <NgForm>{
      value: {
          first: ''
      }
    };
    component.search = search;
    component.noResults(formSearchParam);
    expect(component.search.total_results).toEqual(0);
  });

  it('should call viewDetails', () => {
    component.search = search;
    component.viewDetails(0);
    expect(component.movieDetails).toEqual(component.search.results[0]);
  });
});
